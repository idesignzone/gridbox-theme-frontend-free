<template>
  <div id="app">
      <Header></Header>
      <transition name="fade" appear>
        <main>
            <slot></slot>
        </main>
      </transition>
      <Footer></Footer>
      <off-canvas></off-canvas>

      <!--Scroll To Top-->
      <a href="#" id="scroll-to-top" class="uk-icon-button uk-text-primary" data-uk-totop data-uk-scroll></a>

  </div>
</template>

<script>
  import Header from "../components/ThemeHeader";
  import Footer from "../components/ThemeFooter";
  import OffCanvas from "../components/OffCanvas";
  export default {
    components: {OffCanvas, Footer, Header}
  }
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
