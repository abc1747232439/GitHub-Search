<template>
  <div class="list">
    <h1 v-show="info.isFirst">欢迎来到本应用</h1>
    <h1 v-show="info.isLoading">Loading...</h1>
    <ul>
        <li v-for="user in info.users">
            <img :src="user.avatar_url" alt="">
            <p class="name">{{user.login}}</p>
        </li>
    </ul>
    <h1 v-show="info.err">出错了..</h1>
  </div>
</template>

<script setup>
import { reactive ,getCurrentInstance,onMounted,onUnmounted,ref,toRefs} from 'vue';

const { proxy, ctx } = getCurrentInstance()
let info = ref({
    isFirst:true,
    isLoading:false,
    err:'',
    users:[]
})

function getInfo(dataObj) {
   info.value = {
        ...dataObj
    }
}
onMounted(()=>{
    proxy.$bus.on('getInfo',getInfo)
})
onUnmounted(()=>{
    proxy.$bus.off('getInfo',getInfo)
})
</script>

<style>
    ul {
       display: flex;
       flex-wrap: wrap;
       justify-content:flex-start;
    }
    li {
        display: flex;
        flex-direction: column;
        border: 1px solid #efefef;
        margin-bottom: 2px;
        text-align: center;
    }
    img {
        width: 100px;
    }
    p {
        width: 100px;
    }
</style>