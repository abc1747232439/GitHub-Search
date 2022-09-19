<template>
  <div class="search">
     <h1>GitHub Users</h1>
     <input type="text" v-model="keyword">
     <button @click="getUser">搜索</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref,toRaw ,getCurrentInstance} from 'vue';

const { proxy, ctx } = getCurrentInstance()
let keyword = ref('')
function getUser() {
    proxy.$bus.emit('getInfo',{isFirst:false,isLoading:true,err:'',users:[]})
    axios.get("https://api.github.com/search/users?q="+keyword.value).then(res=>{
                proxy.$bus.emit("getInfo",{users:res.data.items,isFirst:false,isLoading:false,err:""});
            }).catch(err=>{
                proxy.$bus.emit("getInfo",{users:[],isFirst:false,isLoading:false,err:err});
            })
}
</script>

<style scoped>
.search {
        background-color: #ccc;
    }
    h1,input {
        margin-left: 20px;
        margin-bottom: 10px;
    }
</style>