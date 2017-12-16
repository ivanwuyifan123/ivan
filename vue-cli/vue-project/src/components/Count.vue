<template>
  <div>
      <h1>{{$store.state.count}}</h1>
      {{count1}}
      {{count2}}
      <!-- <button @click="$store.commit('add',10)">+1</button>
      <button @click="$store.commit('reduce')">-1</button> -->
       <button @click="addAction">add</button>
      <button @click="reduceAction">reduce</button>
  </div>
</template>
<script>
import store from '../vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
      return{};
  },
  
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
  },
  computed  : {
        ...mapState(["count","count1"]),
        ...mapGetters(['count2'])
        },
};
</script>
<style>

</style>
