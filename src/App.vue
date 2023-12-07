<template>
  <div id="app">
    <h2 ref="pdfDom">1</h2>
    <div @click="print">print</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$nextTick(()=>{
      window.addEventListener('beforeprint',function (){
        console.log('beforeprint');
      })
      window.addEventListener('afterprint',function (){
          console.log('afterprint');
      })
    })
  },
  methods:{
   print(){
     this.$print(this.$refs['pdfDom'])
   }
 }
}
</script>

<style lang="scss">
</style>
