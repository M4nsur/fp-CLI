<template>
  <Header/>
  <div class="contentW">
    <router-view/>
  </div>
  <Footer/>
</template>

<!-- 
  "@" - aliases, который ссылается на "./src/" 
-->

<script>
  import Header from "@/components/Header-comp.vue"
  import Footer from "@/components/Footer-comp.vue"
  export default  {
    components: {
      Header,
      Footer
    }
  }
</script>

<style></style> 