<template>
  <div>
     <div class="panel">
          <transition name="slide-fade">
            <h1 v-if="isMounted">Services</h1>  
          </transition> 
    </div>

    <div class="page">

        <div class="panel content right">
            <div class="inline photo">
                <img src="../assets/img/services1.png" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title" v-if="isMounted">     
                    <h3>What are we doing?</h3>
                  Our services are focused on quality and cover the requirements for business that need support in their IT-department. To accomplish this, we can rely on years of experience in different domains and business sectors
                </div>
            </transition>
        </div>

        <div class="panel content left">
            <div class="inline photo">
                <img src="../assets/img/services2.png" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title"  v-if="isMounted">
                    <h3>Software on demand</h3>
                    <p>
                  One of our core services is to create custom software for your business that fits your needs.This can go from giving support to an existing team, or to manage complete projects ourself
                  </p>
                    <!-- <a href="mailto:ksenia@zenitss.eu">ksenia@zenitss.eu</a> -->
                </div> 
             </transition>
        </div>


        <div class="panel content right">
            <div class="inline photo">
                <img src="../assets/img/services3.png" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title"  v-if="isMounted">
                    <h3>You need a specialist?</h3> 
                    Maybe your business already has an IT-department, but you are on a very close deadline and the delivery is in danger? Or your team has not the inhouse knowledge needed? Don't worry, we will solve this for you. We will send you a specialist that can manage the problems or needs
                    <!-- <a href="mailto:ksenia@zenitss.eu">ksenia@zenitss.eu</a> -->
                </div> 
             </transition>
        </div>

        <div class="panel content left">
            <div class="inline photo">
                <img src="../assets/img/services4.png" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title"  v-if="isMounted">
                    <h3>Knowledge domains</h3> 
                    Our main developments are based on Microsoft technologiesWe work mainly within the .NET environment
                    <!-- <a href="mailto:ksenia@zenitss.eu">ksenia@zenitss.eu</a> -->
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

h1 {
    font-family: 'Goldman', sans-serif;    
    margin-top:60px;
    color:var(--content-fg-primary);
} 

h3 {
      font-family: 'Goldman', sans-serif;    
}

h4 {
      font-family: 'Goldman', sans-serif;    
}

a {
    color:white;
}

a:hover {
    color:white;
}


img.photo {
    width:128px;
    height: 128px;
}

div.photo {
    max-height: 128px;
    max-width: 128px;
    margin-top: 0px;
    vertical-align: top;
}

div.title {
    margin-left: 10px;
}


@media screen and (max-width:375px) {
    div.photo { 
        text-align: center;
        max-width: inherit;
    } 
}
</style>
