<template>
    <div class="login-page">
        <h2>芝麻開門</h2>
        <h5>請先登入</h5>
        <div>
            <span>帳號</span>
            <span><input v-model="account" type="text"></span>
        </div>
        <div>
            <span>密碼</span>
            <span><input v-model="password" type="text"></span>
        </div>
        <div>
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
            vm.list.push(
                vm.account,vm.password
            )
            localStorage.setItem('member', vm.list)
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