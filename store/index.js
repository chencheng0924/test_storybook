export const state = () => ({
    homeList:['Tutorial','calender','todos'],
    num: 0
})

export const mutations = {
    countNum(state) {
        state.num++
    }
}