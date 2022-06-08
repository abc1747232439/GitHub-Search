<template>
  <div class="row">
      <div class="card" v-for="user in info.users" :key="user.login" v-show="info.users.length">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <!-- 欢迎词 -->
       <h1 v-if="info.isFirst">欢迎使用本应用</h1>
      <!-- 加载 -->
      <h1 v-if="info.isLoading">Loading</h1>
      <!-- 错误信息 -->
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
    </div>
</template>

<script>
export default {
    name:"List",
    data() {
        return {
           info:{
            isFirst:true,
            isLoading:false,
            errMsg:"",
            users:[],
           }
        }
    },
    methods:{
      getInfo(dataObj){
          this.info=dataObj
      },
    },
    mounted() {
        this.$bus.$on("getInfo",this.getInfo);
    },
    beforeDestroy() {
        this.$bus.$off("getInfo",this.getInfo);
    },
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>