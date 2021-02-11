<template>
    <div class="div">
        <p>{{name}}</p>
        <button @click="updatedName">change name</button>
    </div>
</template>
<script>
/* eslint-disable */
export default {
data(){
        return{
            name: 'seonbosim GG',
        }
    },
    methods:{
        updatedName() {
            this.name = 'simseongbo'
        },
        }        }
</script>
<style scoped>

</style>
