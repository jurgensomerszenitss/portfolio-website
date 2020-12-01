<template>
  <div>
     <div class="panel title">
          <transition name="slide-fade">
            <h1 v-if="isMounted">Services</h1>  
          </transition> 
    </div>

    <div class="page">

        <div class="panel half-right">
            <div class="topic">
                <img src="../assets/img/services1.png" class="topic">
            </div> 
             <transition name="slide-fade">
                <div class="content" v-if="isMounted">     
                    <h3>What are we doing?</h3>
                        Our services are focused on quality and cover the requirements for business that need 
                        support in their IT-department. 
                        To accomplish this, we can rely on years of experience in different domains and business sectors
                </div>
            </transition>
        </div>

        <div class="panel half-left">
            <div class="topic">
                <img src="../assets/img/services2.png" class="topic">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                    <h3>Software on demand</h3>
                    <p>
                  One of our core services is to create custom software for your business that fits your needs.
                  This can go from giving support to an existing team, or to manage complete projects ourself
                  </p>
                </div> 
             </transition>
        </div>


        <div class="panel half-right">
            <div class="topic">
                <img src="../assets/img/services3.png" class="topic">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                    <h3>You need a specialist?</h3> 
                    Maybe your business already has an IT-department, but you are on a very close deadline and the delivery is in danger? 
                    Or your team has not the inhouse knowledge needed? Don't worry, 
                    we will solve this for you. We will send you a specialist that can manage the problems or needs
                </div> 
             </transition>
        </div>

        <div class="panel half-left">
            <div class="topic">
                <img src="../assets/img/services4.png" class="topic">
            </div>
             <transition name="slide-fade">
                <div class="content"  v-if="isMounted">
                    <h3>Knowledge domains</h3> 
                    Our main developments are based on Microsoft technologiesWe work mainly within the .NET environment
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
  name: 'Services',
   computed: {  
    ...mapGetters({  
    isMounted:"isServicesMounted"
    }),
  },
  mounted() {
    store.dispatch('onServicesMounted',true);
  },
  beforeDestroy(){
    store.dispatch('onServicesMounted',false);
  }
}
</script>

<style scoped>
 
</style>
