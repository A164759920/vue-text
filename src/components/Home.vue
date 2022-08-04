<template>
<div class="container">
    
    <div class="header">
        <div class="left">
           <svg t="1658645633518" class="icon" viewBox="0 0 1112 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7135" width="32" height="32"><path d="M1112.702976 772.388571V81.92A105.325714 105.325714 0 0 0 1013.22869 0h-936.228571a111.177143 111.177143 0 0 0-58.514286 46.811429A128.731429 128.731429 0 0 0 0.931547 128.731429v643.657142a111.177143 111.177143 0 0 0 46.811429 87.771429 175.542857 175.542857 0 0 0 76.068571 11.702857h392.045715v76.068572H211.582976a35.108571 35.108571 0 0 0-35.108571 35.108571 40.96 40.96 0 0 0 35.108571 40.96h690.468571a40.96 40.96 0 0 0 35.108572-40.96 35.108571 35.108571 0 0 0-35.108572-35.108571h-304.274285v-76.068572h444.708571a99.474286 99.474286 0 0 0 70.217143-99.474286zM100.405833 76.068571z m-11.702857 5.851429z m0 0z m-5.851429 702.171429z m5.851429 5.851428z m942.08-11.702857v11.702857H77.000119V99.474286h5.851428a5.851429 5.851429 0 0 0 5.851429-5.851429h947.931429v678.765714h-5.851429z" p-id="7136" fill="#ffffff"></path><path d="M416.382976 397.897143a40.96 40.96 0 0 0-40.96 40.96 40.96 40.96 0 0 0 81.92 0 40.96 40.96 0 0 0-40.96-40.96zM556.817262 397.897143a40.96 40.96 0 0 0-40.96 40.96 40.96 40.96 0 0 0 81.92 0 40.96 40.96 0 0 0-40.96-40.96zM697.251547 397.897143a40.96 40.96 0 0 0-40.96 40.96 40.96 40.96 0 0 0 81.92 0 40.96 40.96 0 0 0-40.96-40.96z" p-id="7137" fill="#ffffff"></path></svg>
            <h3 class="title-3-style">管理后台{{$route.params.username}}</h3>
        </div>
        <div class="center"></div>
        <div class="right" @click="logout">
            <svg t="1658644450339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" width="32" height="32"><path d="M513.335 962c248.368 0 448.665-200.296 448.665-448.665 0-165.579-88.131-309.792-218.991-387.24-42.729-24.036-66.765 26.707-29.377 50.742 114.837 66.765 192.284 192.284 192.284 336.499 0 216.321-176.261 392.582-392.582 392.582-216.321 0-392.582-176.261-392.582-392.582 0-144.214 77.449-269.733 192.284-336.499 34.718-24.036 13.353-74.777-29.377-50.742-133.531 77.449-221.662 221.662-221.662 387.24 0 248.368 202.968 448.665 451.335 448.665zM513.335 62c18.694 0 37.388 16.024 37.388 34.717v504.748c0 18.694-18.695 34.717-37.388 34.717-21.366 0-37.388-16.024-37.388-34.718v-504.748c0-18.694 16.024-34.717 37.388-34.717z" p-id="2083" fill="#ffffff"></path></svg>
        </div>
    </div>
    <div class="body">
        <div class="side">
                <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#4682b4"
            text-color="#fff"
            active-text-color="#24292f">

            <el-menu-item index="2" @click="goToMenu('Info')">
                <i class="el-icon-menu"></i>
                <span slot="title">我的信息</span>
            </el-menu-item>
            
            <el-menu-item index="3" @click="goToMenu('function1')">
                <i class="el-icon-document"></i>
                <span slot="title">功能①</span>
            </el-menu-item>

            <el-menu-item index="4" @click="goToMenu('function2')">
                <i class="el-icon-setting"></i>
                <span slot="title">功能②</span>
            </el-menu-item>
            </el-menu>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div> 
    <!-- <div class="side-footer">
       <div class="divider"></div>
       <div class="footer-info">
            Copyright © 2022 Powered By vue-cli.
       </div>
        
    </div> -->
</div>
</template>

<script>
import shareStore from '@/store/index.js'
import 'animate.css'
export default{
    name: 'Home',
    methods: {
        logout() {
            // sessionStorage.removeItem("token");
            shareStore.clearAction('token');
            this.$router.push('/login');
        },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        },
        goToMenu(path) {
        this.$router.push(`/home/${path}`)
      }
    }
}
</script>

<style lang="scss" >
    *{
        padding: 0px;
        margin: 0px;
    }
    .container{
        height: 100%
    }
    .el-menu {
        text-align: left;
    }

    .header {
        height: 60px;
        background-color: #24292f;
        display: flex;

            .left{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 160px;
            height: 100%;
            
            // background-color:green

            .title-3-style{
                color:#fff;
                margin-left: 6px;
                margin-left: 5px;
            }
            }

            .right{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 100%;
            // background-color:green
            }
            .center{
            flex-grow: 1;

        }
    }

    .body{
        display: flex;
        height: calc(100% - 60px); 
       
    }

    .side{
        width: 240px;
    }
    .el-menu-vertical-demo  {
        height: 100% 
    }
    .content{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .side-footer{
        background-color: #fff;
        height: 70px;
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
</style>