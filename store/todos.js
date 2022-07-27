export default {
    state: {
        list: []
    },
    mutations: {
        add(state, text){
            state.list.push({
                text,
                done: false
            })
        },
        remove(state, todo){
            state.list = state.list.filter(todo => !todo.done)
        },
        toggle(state, todo){
            todo.done = !todo.done
        }
    }
}