const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  auth: {
    success: null,
    name: ""
  },
  loginProcess: {
    success: null,
    message: ""
  }
});

export const mutations = {
  setAuth(state, payload) {
    state.auth = payload;
  },

  setLoginProcessStatus(state, payload) {
    state.loginProcess.success = payload.success
    state.loginProcess.message = payload.message
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
          success: res.data.success,
          name: res.data.name
        });
        Cookie.set('auth', res.data.token, { expires: 7 })
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
};
