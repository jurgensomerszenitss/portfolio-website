<template>
  <section class="VideoBg">
    <div  id="video-overlay">
     <video id="videoBG" poster="background.jpg" autoplay muted loop playsinline>
      <source src="./assets/img/background.mp4" type="video/mp4">
    </video>
    </div>

    <div id="app">
      <Header id="header"/>   
      <router-view id="routerview"></router-view>
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
@import'~bootstrap/dist/css/bootstrap.css';

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Roboto&display=swap'); 

/* Theme */
@import url('./assets/css/colors.scss'); 
@import url('./assets/css/containers.scss'); 
@import url('./assets/css/animations.scss'); 
@import url('./assets/css/content.scss'); 
@import url('./assets/css/scrollbar.scss'); 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  position:fixed;
  bottom: 0px;
  width:100%;
  height: 40px;
}

 #header {
  position:fixed;
  top: 0px; 
  width:100%;
  z-index:100;
} 

#routerview {
  padding-top:74px;
}

#videoBG {
  position:fixed;
  z-index: -1;
  width:100%;     
  height: auto;
}

#video-overlay { 
  opacity: 1; 
}

@media screen and (max-width:375px){
  #routerview {
  padding-top:24px;
}
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
