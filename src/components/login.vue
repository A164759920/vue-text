<template>
        <div class="container" >
            <el-button class="Lang-button" size="medium"  @click="changeLang">{{$t('message.lang')}}</el-button>
            <div class="main-login">
                <div class="info">
                        <img width="100%"  class="info-top" :src="animationUrl.url" alt="">
                    <div class="info-body">
                        <div class="body-input">
                            <el-input size="small" class="el-input" v-model="username" placeholder="nickname">
                            </el-input>
                            <el-input size="small" class="el-input" v-model="password" placeholder="passowrd" show-password ></el-input>
                            <el-button size="medium" class="el-button" @click="login">{{$t('message.login')}}</el-button>
                             <el-button size="medium" class="el-button" @click="testApi">测试</el-button>
                        </div>
                    </div>
                </div>
                <div class="info-register">
                    <div class="el-button-register">
                         <el-button size="medium"  @click="register">{{ $t('message.loginUp')}}</el-button>
                    </div> 
                </div>
            </div>
            <div class="login-bottom">
                <div class="divider"></div>
                <div class="footer-info">
                      Copyright © 2022 Powered By vue-cli.
                </div>        
            </div>
        </div>
</template>
<script>
import axios from "axios" //异步请求
import shareStore from '@/store/index.js'  //引入store
export default {

    data() {
        return {
            username: '',
            password: '',
            animationUrl: { url: require('../assets/img/111.gif') },
            loginData: shareStore, //将全局对象变为data数据 以便渲染
            }
    },
    methods: {
        async testApi() { 
            const resApi = await axios.get('http://121.40.50.145:8888/')
            console.log(resApi);
        },
        async login() {
            //发起网络请求
            const res = await axios.get('http://learn.api.futureruntime.com/')
            //将请求到token放到全局store中  
            this.loginData.setAction("token", res.data.data.token)  
            console.log(this.username);
            console.log(this.password);
            // this.loginData.setUserInfo(this.username, this.password);
            // 模拟用户信息
            // const token = "fshufiuiahdfuiahiuhaiufhuia"
            // 放入sessionStorage
            // sessionStorage.setItem('token',token) 
            if (this.loginData.checkUserInfo(this.username, this.password))
            {
                this.$notify({
                title: "成功",
                message: "您已成功登录，已成功为您跳转至控制台",
                    type: "success",
                 position: 'top-left'
                 });
                this.$router.push({
                path:'/home', //跳转时触发路由守卫==》判断token==》router.indexjs中
                })
            }
            else {
                this.$notify.error({
                title: "失败",
                message: "用户名或密码错误",
                 position: 'top-left'
                 });
                console.log("密码错误")
            } 

        },
        register() {
            console.log("注册:", this.loginData.checkUserInfo(this.username, this.password))
            if (!this.loginData.checkUserInfo(this.username, this.password)&&this.username!==''&&this.password!=='')
            {   
                
                this.loginData.setUserInfo(this.username, this.password);
                this.$notify({
                title: "成功",
                message: "注册成功！",
                    type: "success",
                 position: 'top-left'
                 });
            }
            else
            {
                this.$notify.error({
                title: "失败",
                message: "注册失败！",
                    type: "success",
                 position: 'top-left'
                 });
            }
        },
        changeLang() {
            if (this.$i18n.locale === 'en') {

                this.$i18n.locale = 'zh'
            }
            else{
                this.$i18n.locale = 'en'
            }
        }  
    }
    }
</script>

<style lang="scss">
    .container{
        background-color:powderblue;
        width: 100%;
        height: calc(100% - 70);
        z-index: 100;
    }
    .main-login{
        width:  30%;
        height: 45%;
        position: absolute;
        z-index: 999;
        top:15%;
        right:5%;
    }

    .info{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .info-top{

        widows: 100%;
        height: 35%;
    }
    .info-body{
        width: 100%;
        height:65%;
        background-color:steelblue; 
        text-align: center;
        position: relative;
        border-radius: 5px;


    }
    .body-input{
        height: 0%;
        width: 50%;
        position: absolute;
        top: 20%;
        left: 25%;
        margin: 4px;

    }
    .el-input{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .el-button{
        margin-top: 2px;
        width: 100%;
    }
    .login-bottom{
         position: absolute;
        background-color:aliceblue;
        width: 100%;
        height:70px;
        bottom:0%;
        text-align: center;
        
        .divider{
            text-align: center;
            padding-top: 20px;
            width: 100%;
            border-bottom: 1px solid lightgray;
        }
        .footer-info{
            margin-top: 5px;
            color: lightgray;
            font-family: Arial, Helvetica, sans-serif;
        }
        
    }

    .info-register{
        margin-top: 5px;
        background-color: steelblue;
        width: 100%;
        height: 50px;
        border-radius: 5px;

        .el-button-register{
            width: 50%;
            padding-left: 25%;
            padding-top: 7px;
        }
    }
</style>