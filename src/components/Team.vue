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

        <div class="panel right" v-bind:class="{leftQuoteOpen : isQuoteJurgenVisible}">
           <div class="photo">
               <img src="../assets/img/jurgen.jpg" class="photo" >               
            </div>
            <transition name="slide-fade">               
                <div class="content" v-if="isMounted">
                  <div v-bind:class="{leftInline : isQuoteJurgenVisible}">
                    <h3>Jurgen Somers <img src="../assets/img/quote.png" class="quote" @click="toggleQuoteJurgen()">  </h3>
                    <h4>CEO / founder</h4>
                    Active in IT since 2001<br/>                    
                  </div>
                  <transition name="slide-up">    
                    <div class="quote leftQuote" v-if="isQuoteJurgenVisible" >   
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
                  </transition>
                </div>
            </transition>        
        </div>

       

         <div class="panel left"  v-bind:class="{rightQuoteOpen : isQuoteKseniaVisible}">
            <div class="photo">
                <img src="../assets/img/ksenia.jpg" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                  <div v-bind:class="{leftInline : isQuoteKseniaVisible}">
                    <h3>Ksenia Medova <img src="../assets/img/quote.png" class="quote" @click="toggleQuoteKsenia()">  </h3>
                    <h4>CCO / Co-founder</h4>
                    Experienced in sales and management since 2003
                  </div>   
                  <transition name="slide-up">                         
                    <div class="quote leftQuote" v-if="isQuoteKseniaVisible" >             
                      <p>
                        <img src="../assets/img/quoteopen.png" class="quoteopen">  
                        I am little
                        </p>

                        <p>
                        I like shoes and dresses
                        </p>

                        <p>
                        I don't like gru, gru gru
                        </P>

                        <p>    
                        In my opinion
                        <img src="../assets/img/quoteclose.png" class="quoteclose">
                        </p>
                    </div>
                  </transition>
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

div.leftQuoteOpen {
  margin-left:0%; 
}

div.rightQuoteOpen {
  margin-right:0%; 
}

div.quote {
  font-size:small;
  font-family: 'Roboto';
  font-style:italic;
  max-height: 128px;
  overflow: auto;
}

div.leftQuote {
    border-left:solid 1px var(--zss-theme-option);
    margin-left:10px;
    padding-left:10px;
}

div.leftInline {  
  float:left;
  margin-right: 10px;
}
 

img.quoteopen {
  text-align: left;
  width:24px;
  height:24px;
}

img.quoteclose {
  text-align: right;
  width:24px;
  height:24px;
}

img.quote {
  position:relative;
  top:-8px;
  left:-5px;
  width:24px;
  height:24px;
  text-align: right;
  cursor: pointer;
}

@media screen and (max-width:768px) {
  div.leftInline {  
   float:none;
  }

  div.leftQuote {
    border-left:none;
    border-top:solid 1px var(--zss-theme-option);
    margin-left:0px;
    margin-top:5px;
    padding-left:0px; 
    padding-top:5px
  }
 
}
</style>
