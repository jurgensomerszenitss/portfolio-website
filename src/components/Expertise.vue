<template>
  <div>
     <div class="panel title">
          <transition name="slide-fade">
            <h1 v-if="isMounted">Expertise</h1>  
          </transition> 
    </div>

    <div class="page">
 
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store }  from '../store/store'; 

export default {
  name: 'Expertise',
   computed: {  
    ...mapGetters({  
    isMounted:"isExpertiseMounted"
    }),
  },
  mounted() {
    store.dispatch('onExpertiseMounted',true);
  },
  beforeDestroy(){
    store.dispatch('onExpertiseMounted',false);
  }
}
</script>

<style scoped>
 
</style>
