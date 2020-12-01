<template>
  <div>
    <div class="panel title">
      <h1>Welcome at <br/>Zenit Software Solutions</h1>    
    </div>

    <div class="page">
      <div class="panel content left">
        <transition name="slide-fade">
          <span v-if="isMounted">
            Here we want to inform you about who we are and what we do.<br/>
            And what makes us one of the best in it.
            </span>
        </transition>
      </div>
    </div>
     <!-- <div class="panel content right">
      Here you will find more information about our company
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store }  from '../store/store'; 

export default {
  name: 'Home', 
  computed: {  
    ...mapGetters({  
    isMounted:"isHomeMounted"
    }),
  },
  mounted() {
    store.dispatch('onHomeMounted',true);
  },
  beforeDestroy(){
    store.dispatch('onHomeMounted',false);
  }
}
</script>

<style scoped>

h1 {
    font-family: 'Goldman', sans-serif;    
    margin-top:60px;
    color:var(--content-fg-primary);
} 
</style>
