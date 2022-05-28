<template>
    <div>
        <div class="test-title">
            <h1>陳呈的測試天地</h1>
        </div>
        <div>
            <div v-for="(item, index) in testList" :key="index" @click="move(item)">{{ item }} 今日點擊次數:{{num}}次</div>
        </div>
        <span><a-button @click="logout()">登出</a-button></span>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        testList(){
            const vm = this
            return vm.$store.state.homeList
        },
        ...mapState({
            num: 'num'
        }),
        ...mapMutations({
            countNum: 'countNum',
        })
    },
    methods: {
        move(item){
            const vm = this
            vm.$router.push(`/testList/${item}`)
        },
        logout(){
            const vm = this
            localStorage.removeItem('member')
            vm.$router.push('/login')
        }
    },
}
</script>

<style scoped>
.test-title{
    color: rgb(230, 159, 53);
}
</style>