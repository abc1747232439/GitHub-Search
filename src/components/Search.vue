<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;<button @click="getInfo">Search</button>
      </div>
    </section>
</template>

<script>
import axios from "axios"

export default {
    name:"Search",
    data:function(){
        return {
            keyword:""
        }
    },
    methods:{
        getInfo:function(){  /* 想清楚流程,首次打开网址显示欢迎，点击搜索后未发出ajax显示Loading，发出后得到数据显示结果或报错 */
        this.$bus.$emit("getInfo",{users:[],isFirst:false,isLoading:true,err:""});
            axios.get("https://api.github.com/search/users?q="+this.keyword).then(res=>{
                this.$bus.$emit("getInfo",{users:res.data.items,isFirst:false,isLoading:false,err:""});
            }).catch(err=>{
                this.$bus.$emit("getInfo",{users:[],isFirst:false,isLoading:false,err:err.message});
            })
        }
    }
}
</script>

<style>

</style>