export default function ({ route, store, redirect }) {
    const list = JSON.parse(sessionStorage.getItem('member'))
    const check = sessionStorage.getItem('checkLoginStatus')
    if((route.fullPath !== '/checklogin') && (!list || !check)){
      return redirect('/checklogin')
    }
  }