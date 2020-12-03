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

        <div class="panel right">
           <div class="photo">
               <img src="../assets/img/jurgen.jpg" class="photo" >               
            </div>
            <transition name="slide-fade">               
                <div class="content" v-if="isMounted">
                    <h3>Jurgen Somers <img src="../assets/img/quote.png" class="quote" @click="toggleQuoteJurgen()">  </h3>
                    <h4>CEO / founder</h4>
                    Active in IT since 2001<br/>                    
                </div>
            </transition> 
            <div class="quote" v-if="isQuoteJurgenVisible" @click="toggleQuoteJurgen()">   
              <hr class="option"    />
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

         <div class="panel left">
            <div class="photo">
                <img src="../assets/img/ksenia.jpg" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                    <h3>Ksenia Medova <img src="../assets/img/quote.png" class="quote" @click="toggleQuoteKsenia()">  </h3>
                    <h4>CCO / Co-founder</h4>
                    Experienced in sales and management since 2003
                </div>
             </transition>
             <div class="quote" v-if="isQuoteKseniaVisible" @click="toggleQuoteKsenia()">   
              <hr class="option"    />
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
        </div>


        <!-- <div class="panel center">
            All of our people are specialists in their area<br/>
        </div> -->
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
      store.dispatch('onQuoteKsenia', false)
    },
    toggleQuoteKsenia() {
      store.dispatch('onQuoteKsenia', !this.isQuoteKseniaVisible);
      store.dispatch('onQuoteJurgen',false);
    } 
  }
}
</script>

<style scoped>

div.quote {
  font-size:small;
  font-family: 'Roboto';
  font-style:italic;
  z-index: 700;  
  position:fixed; 
  background-color:var(--modal-bg-primary);
  padding:10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); 
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

@media screen and (max-width:375px) {
  div.quote {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
  }
}
</style>
