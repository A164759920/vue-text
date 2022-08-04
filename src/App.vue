<template>
  <div class="app">
      <router-view>

      </router-view>
  <!-- <div class="main" v-if="false"> 
    <keep-alive include="Home">

    </keep-alive>
      
      <router-link to="/">首页</router-link>

      <router-link 
      :to='{path:"/fav",query:{userId:123}}'
       tag="button">收藏</router-link>

      <router-link :to='{path:"/Config",params:{userId:123}}'>设置</router-link>
      <button @click="toConfig">按钮</button>
      {{toRouter}}
      <ul>
        <li v-for="(item,index) in str" :key="index">{{item}}</li>
        </ul>
       <V-share></V-share> 
  </div> -->
  </div>
</template>
<script>
  
  export default{
    data(){
      return{
        str:[]
      }
    },
    methods:{
      toConfig(){
        this.$router.push({
          path:'/Config'
        })
      }
    },
    // asyncComputed:{
    //   http(){
    //      let That =this;
    //     this.axios.get('http://localhost:8080/data.json?a=1')
    //         .then((res)=>{
    //           That.str=res.data
    //           console.log(res.data.data)
    //         }) 
    //   }
    // }
  }
</script>
<style >
  *{
    margin: 0px;
    padding: 0px;
  }
  html, body, .app
    {
      height: 100%;
    }
</style>
