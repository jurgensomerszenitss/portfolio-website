<template>
  <div >
     <div class="panel title">
          <transition name="slide-fade">
            <h1 v-if="isMounted">Our team</h1>
          </transition>
    </div> 

    <div class="page"> 
        <div class="panel center subtitle">
          <transition name="slide-fade">   
            <div v-if="isMounted">            
              <h4>Management</h4>
            </div>
          </transition> 
        </div>

        <div class="panel right" v-bind:class="{openLeft : isQuoteJurgenVisible}">
           <div class="photo">
               <img src="../assets/img/jurgen.jpg" class="photo">               
               <div class="socmed-container">
                  <a href="https://www.linkedin.com/in/jurgen-somers/" target="_blank"><img src="../assets/img/logo_linkedin.png" class="link"></a>
                  <a href="https://www.xing.com/profile/Jurgen_Somers" target="_blank"><img src="../assets/img/logo_xing.png" class="link"></a>
              </div>
            </div>
              <transition name="slide-fade">
                <div class="content" v-if="isMounted">
                  <div v-bind:class="{inline : isQuoteJurgenVisible}">
                    <h3>Jurgen Somers  <div  @click="toggleQuoteJurgen()"  class="quoteButton" v-bind:class="{quoteButtonHide : isQuoteJurgenVisible}"/></h3>
                    <h4>CEO / founder</h4>
                    Active in IT since 2001     
                  </div>
                  <div class="quote openLeft" v-if="isQuoteJurgenVisible" >   
                    <p>
                      <img src="../assets/img/quoteopen.png" class="quoteopen">  
                      After studying 2 years of industrial computer sciences, and 3 years of business computer sciences,
                      I started to work as a developer at Real Software.
                    </p>

                    <p>
                      A few years later, I decided to work as a freelancer, 
                      providing consultancy for some major international companies.
                    </p>

                    <p>
                      The roles I was playing in the various teams,
                      go from developer to lead-developer, technical manager and architect.
                    </P>

                    <p>
                      Today, I can rely on many years of experience and a large
                      technological base to help and guide clients and companies
                      in their journey of creating a beautifull IT landscape.                
                      <img src="../assets/img/quoteclose.png" class="quoteclose">
                    </p>
                  </div>
                </div>
              </transition>        
        </div> 


         <div class="panel left"  v-bind:class="{openRight : isQuoteKseniaVisible}">
            <div class="photo">
                <img src="../assets/img/ksenia.jpg" class="photo">
                <div class="socmed-container">
                  <a href="https://www.xing.com/profile/Ksenia_Medova" target="_blank" alt="Xing profile"><img src="../assets/img/logo_xing.png" class="link"></a>             
                </div>
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                  <div v-bind:class="{inline : isQuoteKseniaVisible}">
                    <h3>Ksenia Medova    <div  @click="toggleQuoteKsenia()"  class="quoteButton" v-bind:class="{quoteButtonHide : isQuoteKseniaVisible}"/></h3>
                    <h4>CCO / Co-founder</h4>
                    Experienced in sales and management since 2003                     
                  </div>                    
                  <div class="quote openRight" v-if="isQuoteKseniaVisible" >             
                    
                  </div>
                </div>   
             </transition>
        </div>
 
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store }  from '../store/store';
 

export default {
  name: 'Team',
   computed: {
    ...mapGetters({
    isMounted:"isTeamMounted",
    isQuoteJurgenVisible:"isQuoteJurgenVisible",
    isQuoteKseniaVisible:"isQuoteKseniaVisible",
    }),
  },
  mounted() {
    store.dispatch('onTeamMounted',true);
  },
  beforeDestroy(){
    store.dispatch('onTeamMounted',false);
  },
  methods: {
    toggleQuoteJurgen() {      
      store.dispatch('onQuoteJurgen',!this.isQuoteJurgenVisible);
    },
    toggleQuoteKsenia() {
      store.dispatch('onQuoteKsenia', !this.isQuoteKseniaVisible);
    } 
  }
}
</script>

<style scoped>

div.openLeft {
  margin-left:0%;  
  /* transition: margin 700ms; */
}

div.openRight {
  margin-right:0%; 
  /* transition: margin 700ms;   */
}

div.quote {
  font-size:small;
  font-family: 'Roboto';
  font-style:italic;
  max-height: 128px;
  overflow: auto;
  border-left:solid 1px var(--zss-theme-option);
  margin-left:10px;
  padding-left:10px;
} 

div.content {
  max-height: 128px;
}

div.inline {  
  float:left;
  margin-right: 10px;
  width:calc(50% - 128px);
}

div.socmed-container {
  position:absolute; 
  bottom:-5px;
  right:5px
} 
div.quoteButton {
  background-image: url("../assets/img/quote_hor_show.png");
  background-repeat:no-repeat;
  max-width:24px;
  max-height:24px;
  width:48px;
  height:48px;
  float:right;
  cursor:pointer;
}

div.quoteButtonHide {
  background-image: url("../assets/img/quote_hor_hide.png")!important;  
}

@media screen and (max-width:768px) {

  div.content {
    max-height: unset;
  }

  div.quoteButton {
    background-image: url("../assets/img/quote_ver_show.png");  
  }


  div.quoteButtonHide {
    background-image: url("../assets/img/quote_ver_hide.png")!important;  
  }


  div.inline {  
    float:none;
    width:100%;
  }

  div.quote {
    border-left:none;
    border-top:solid 1px var(--zss-theme-option);
    margin-left:0px;
    margin-top:5px;
    padding-left:0px; 
    padding-top:5px
  } 

  div.socmed-container {
  position:absolute; 
  bottom:0px;
  right:calc(50% - 64px);
}
 
  p {
      line-height: 10pt;
  }
}
</style>
