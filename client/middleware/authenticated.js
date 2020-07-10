export default function ({ store, redirect }) {
  if (!store.state.users.auth.login) {
    // alert('로그인이 필요합니다.')
    redirect('/login');
  }
}
