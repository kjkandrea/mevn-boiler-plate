export default function ({ store, redirect }) {
  if (store.state.users.auth.login) {
    redirect('/');
  }
}