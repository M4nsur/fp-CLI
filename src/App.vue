<template>
<div class="mainWrapper">
  <Header/>
  <div class="contentWrapper">
    <router-view/>
  </div>
  <Footer/>
</div>
</template>

<!-- 
  "@" - aliases, который ссылается на "./src/" 
-->

<script>
  import Header from "@/components/HeaderComp.vue"
  import Footer from "@/components/FooterComp.vue"
  export default  {
    components: {
      Header,
      Footer
    }
  }
</script>

<style></style> 