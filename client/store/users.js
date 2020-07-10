const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  auth: {
    login: null,
    name: "",
    userId: ""
  },
  loginProcess: {
    success: null,
    message: ""
  },
  registerProcess: {
    success: null,
    message: ""
  }
});

export const mutations = {
  setAuth(state, payload) {
    state.auth.login = payload.login;
    state.auth.name = payload.name;
    state.authuserId = payload.id
  },

  setLoginProcessStatus(state, payload) {
    state.loginProcess.success = payload.success
    state.loginProcess.message = payload.message
  },

  setRegisterProcessStatus(state, payload) {
    state.registerProcess.success = payload.success
    state.registerProcess.message = payload.message
  }
};

export const actions = {
  async login({ commit }, payload) {
    try {
      const res = await this.$axios.post('/api/users/login', {
        email: payload.email,
        password: payload.password,
      })
      
      if(res.data.success) {
        commit('setAuth', {
          login: true,
          name: res.data.name,
          id: res.data._id
        });
        this.$router.push('/')
        Cookie.set('x_auth', res.data.token)
      }else {
        commit('setLoginProcessStatus', {
          success: res.data.success,
          message: res.data.message
        });
      }
    } catch (err) {
      console.error(err);
    }
  },

  async register({ commit }, payload) {
    try {
      const res = await this.$axios.post('/api/users/register', {
        email: payload.email,
        password: payload.password,
        name: payload.name
      })
      
      if(res.data.success) {
        alert('회원가입이 완료되었습니다.')
        this.$router.push('/login')
      }else {
        commit('setRegisterProcessStatus', {
          success: res.data.success,
          message: res.data.message
        });
      }
    } catch (err) {
      console.error(err);
    }
  },

  async logout({ commit }, payload) {
    try {
      const res = await this.$axios.get('/api/users/logout', {
        withCredentials: true
      })
      if(res.data.success){
        Cookie.remove('x_auth')
        commit('setAuth', {
          login: false,
          name: "",
          id: ""
        });
      }else {
        console.log(res.data)
        alert("logout fail")
      }
    } catch (err) {
      console.error(err);
    }
  },

  async auth({ commit }, payload) {
    try {
      const res = await this.$axios.get('/api/users/auth',{
        withCredentials: true
      });
      if(res.data.isAuth){
        commit('setAuth', {
          login: true,
          name: res.data.name,
          id: res.data._id
        });
      }else {
        Cookie.remove('x_auth')
      }
      
    } catch (err) {
      console.error(err);
    }
  }
};
