<template>
  <div>
     <div class="panel title">
        <transition name="slide-fade">
        <h1 v-if="isMounted">Expertise</h1>  
        </transition> 
    </div>

    <div class="page">
      <div v-for="topic in topics" :key="topic.title" class="panel" v-bind:class="topic.align">
        <transition name="slide-fade">
          <div v-if="isMounted">
            <h4>{{topic.title}}</h4>       
            <div class="expertise-container">         
              <div class="alt-wrap" v-for="item in topic.items" :key="item.label">
                <img class="expertise" v-bind:src="require(`../assets/img/expertise/${item.icon}.png`)"/> 
                <p class="alt">{{item.label}}</p> 
              </div> 
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
  name: 'Expertise',
   computed: {  
    ...mapGetters({  
    isMounted:"isExpertiseMounted",
    topics:"expertiseItems"
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

 .alt-wrap {
  position: relative; 
  margin:5px;
}

p.alt {
  position: absolute;
  opacity: 0; /* hide initially  */
  left: 0; right: 0; bottom: 0;
  margin: 0;
  padding: 2px;
  font-size: 12px;
  line-height: 14px;
  background-color: rgba(0,0,0,0.8);
  transition: all 300ms ease;
  transition-delay: 300ms;
}

.alt-wrap:hover > p.alt { 
  opacity: 1; 
  transition-delay: 0s;
}

div.expertise-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
 

img.expertise {
  width:64px;
  height:64px;
  background-color:white;
  margin:0px;
  display:block;
}

@media screen and (max-width:768px) { 
  p.alt {
    opacity: 1;
  }

  div.expertise-container {
   flex-wrap: wrap; 
  }
}

@media screen and (max-width:666px) {   
  div.expertise-container { 
   align-content: flex-start;
   justify-content: flex-start;
  }
}
</style>
