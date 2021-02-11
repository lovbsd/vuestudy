
<template>
  <div><h1>this is home page</h1>
  <p>{{name}}</p>
  <seongbo/>
  </div>
</template>
<script>
/* eslint-disable no-alert */
/* eslint-disable */
import seongbo from '@/components/seongbo.vue';
  export default {
  components:{
      seongbo
    },
  data(){
    return{
      name:'seobo'
    }
    }
  }
</script>
<style scoped> 
h1 {
  font-size: 20px;
  color: red;
}
</style>