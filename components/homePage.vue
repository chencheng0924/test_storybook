<template>
    <div class="flex flex-col mt-2">
        <div class="test-title">
            <h1>陳呈的測試天地</h1>
        </div>
        <div class="mb-2">
            <div v-for="(item, index) in testList" :key="index" @click="move(item)">
                {{ item.name }}-今日點擊次數:{{item.countNum}}次
            </div>
        </div>
        <div class="self-end">
            <a-button type="primary" @click="logout()">登出</a-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
        ...mapGetters({
            num: 'getList'
        })
    },
    methods: {
        move(item){
            const vm = this
            this.$store.dispatch('countNum',item)
            vm.$router.push(`/testList/${item.name}`)
        },
        logout(){
            const vm = this
            sessionStorage.removeItem('member')
            sessionStorage.removeItem('checkLoginStatus')
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