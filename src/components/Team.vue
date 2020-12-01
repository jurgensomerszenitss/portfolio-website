<template>
  <div>
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
               <img src="../assets/img/jurgen.jpg" class="photo">
            </div>
            <transition name="slide-fade">               
                <div class="content" v-if="isMounted">
                    <h3>Jurgen Somers</h3>
                    <h4>CEO / founder</h4>
                    Active in IT since 2001<br/>
                </div>
            </transition> 
        </div>

         <div class="panel left">
            <div class="photo">
                <img src="../assets/img/ksenia.jpg" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                    <h3>Ksenia Medova</h3>
                    <h4>CCO / Co-founder</h4>
                    Experienced in sales and management since 2003
                </div>
             </transition>
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
    isMounted:"isTeamMounted"
    }),
  },
  mounted() {
    store.dispatch('onTeamMounted',true);
  },
  beforeDestroy(){
    store.dispatch('onTeamMounted',false);
  }
}
</script>

<style scoped>

</style>
