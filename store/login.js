export default {
    state: {
        checklogin: false
    },
    actions: {
        checkLoginStatus(context, data){
            context.commit('changeStatus', data)
        }
    },
    mutations: {
        changeStatus(state, data){
            if(data.length > 0){
                state.checklogin = true
                sessionStorage.setItem('checkLoginStatus', true)
            }
        }
    },
    getters: {
        getStatus(state){
            return state.checklogin
        }
    }
}