<template>
  <div class="music">
      <common-header title="music" nav="<" bgColor="rgb(0, 150, 136)"></common-header>
      <router-view></router-view>
      <common-footer bgColor="rgb(0, 150, 136)"></common-footer>
  </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Axios from 'axios'
export default {
  data(){
    return{
      MusicList:[]
    }
  },
  mounted(){
    Axios.get('/static/musiclist.json')
    .then((res)=>{
      this.MusicList = res.data.album;
    })
  },
   components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
<style>
  .albums{
        position: absolute;
        top     : 1rem;
        bottom  : 1rem;
        width   : 100%;
    }
    .albums li{
        width : 50%;
        height: 33.33%;
        float : left;
    }
    .albums li img{
         width : 100%;
         height: 100%;
    }
</style>
