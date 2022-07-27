<template>
    <div class="login-page">
        <h2 class="mt-2">芝麻開門</h2>
        <div class="flex items-center mb-3">
            <span class="mr-2">帳號</span>
            <span><a-input v-model="account"></a-input></span>
        </div>
        <div class="flex items-center">
            <span class="mr-2">密碼</span>
            <span><a-input v-model="password" type="password"></a-input></span>
        </div>
        <div class="mt-2">
            <a-button type="primary" @click="login()">登入</a-button>
            <a-button type="dashed" @click="clear()">清除</a-button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            account: '',
            password: '',
            list: []
        }
    },
    methods:{
        login(){
            const vm = this
            vm.list = [{
                account:vm.account,
                password:vm.password
            }]
            sessionStorage.setItem('member', JSON.stringify(vm.list))
            vm.$store.dispatch('login/checkLoginStatus', vm.list)
            vm.$router.push('/')
        },
        clear(){
            const vm = this
            vm.account = ''
            vm.password = ''
        }
    }
}
</script>

<style lang="less" scoped>
.login-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>