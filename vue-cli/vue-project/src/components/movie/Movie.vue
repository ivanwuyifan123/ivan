<template>
  <div class="movie">
      <common-header title="movie" nav="首页" bgColor="rgb(33, 150, 243)">
          <button >首页</button>
      </common-header>
      <movie-nav></movie-nav>
      <router-view></router-view>
      <div class="loading" v-show="isShow">
          <img src="/static/img/loading.gif" alt="">
      </div>   
      <common-footer bgColor="rgb(33, 150, 243)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import MovieNav from "./MovieNav"
import MovieList from './MovieList'
import Axios from 'axios'
export default {
  data () {
    return {
        movieList:[],
        isShow:false
    }
  },
  mounted(){
           Axios.get(API_PROXY + "https://api.douban.com/v2/movie/top250?type=hot&offset=0&limit=10")
           .then((res)=>{
               this.movieList = res.data.subjects;
           });
           let _this = this;
                window.onscroll = function(){
                let clientHeight = document.documentElement.clientHeight;
                let scrollTop    = document.documentElement.scrollTop;
                let scrollHeight = document.documentElement.scrollHeight;
                if(clientHeight + scrollTop >= scrollHeight){
                    _this.isShow = true;
                     Axios.get(API_PROXY + "https://api.douban.com/v2/movie/top250?type=hot&offset="+_this.movieList.length+"&limit=10")
                        .then((res)=>{
                            _this.movieList = _this.movieList.concat(res.data.data.movies);
                            _this.isShow    = false;
                        });
                }
            }
        },
  components:{
    CommonHeader,
    CommonFooter,
    MovieNav,
    MovieList
  }
}
</script>
<style scoped>
.list-box{
      margin-top: 2rem;
      margin-bottom: 2rem;
  }
  .loading{
        margin-bottom: 1rem;
        text-align   : center;
  }
  
</style>