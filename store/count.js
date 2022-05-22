export const state = () => ({
    countNum: 0,
})

export const mutations = {
    count(state){
        state.countNum++
    }
}