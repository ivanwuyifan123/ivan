import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CommonHeader from '@/components/common/CommonHeader'
import CommonFooter from '@/components/common/CommonFooter'
import Movie from '@/components/movie/Movie'
import Music from "@/components/music/Music"
import Book from "@/components/book/Book"
import Photo from "@/components/photo/Photo"
import Count from "@/components/Count"
import MovieTop250 from '@/components/movie/MovieTop250'
import Albums from '@/components/music/MusicList'
import Player from '@/components/music/MusicPlayer'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   component:Movie,
    //   redirect:'/movie/top250',
    // },
    {
      path: '/count',
      component: Count
    },
    {
      path:'/',
      component:Movie,
      redirect:'/movie/top250',
      children : [
        {path:'/movie/top250',component:MovieTop250},
        {path:'/movie/hot',component:MovieTop250},
        {path:'/movie/coming',component:MovieTop250}
      ]
    },
    {
      path:'/music',
      component:Music,
      redirect : '/music/music_albums',
      children : [
        {path:'/music/music_albums',component:Albums},
        {path:'/music/music_player/:id/',component:Player}
      ]
    },
    {
      path     : '/book',
      component: Book
    },
    {
      path     : '/photo',
      component: Photo

    },
    {
      path     : '/photo_detail/:index',
      component: PhotoDetail
    }
  ]
})
