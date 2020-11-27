<template>
  <section class="VideoBg">
     <video id="videoBG" poster="background.jpg" autoplay muted loop>
      <source src="./assets/background.mp4" type="video/mp4">
    </video>

    <div id="app">
      <Header/>   
      <router-view></router-view>
      <Footer id="footer"/>
    </div>
  </section> 
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  meta:{
    title : 'Zenit'
  },
  components: {
    Header,
    Footer
  },
   created () {
            document.title = "Zenit Software Solutions";
        }
}
</script>

<style>
/* Bootstrap Css */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Roboto&display=swap'); 

/* Theme */
@import url('./assets/colors.scss'); 
@import url('./assets/containers.scss'); 
@import url('./assets/animations.scss'); 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  position:absolute;
  bottom: 0px;
  width:100%;
  height: 40px;
}

#videoBG {
    position:fixed;
    z-index: -1;
    width:100%;     
    height: auto;
}

@media (min-aspect-ratio: 16/9) {
    #videoBG {
        width:100%;
        height: auto;
    }
}

@media (max-aspect-ratio: 16/9) {
    #videoBG { 
        width:auto;
        height: 100%;
    }
}



</style>
