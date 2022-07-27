export default {
    state: {
        homeList:[
            {name: 'Tutorial', countNum: 0},
            {name: 'calender', countNum: 0},
            {name: 'todos', countNum: 0}
        ],
        num: 0
    },
    actions: {
        countNum(context, data) {
            context.commit('addNum', data)
        }
    },
    mutations: {
        addNum(state, data){
             const index = state.homeList.findIndex(item => item.name === data.name)
             state.homeList[index].countNum++
        }
    },
    getters: {
        getList(state) {
            return  state.homeList
        }
    }
}