export default function ({ route, store, redirect }) {
    const list = localStorage.getItem('member')
    const check = store.state.check
    console.log(list)
    console.log(check)
    // return list && check ? true : redirect('/checklogin')
  }