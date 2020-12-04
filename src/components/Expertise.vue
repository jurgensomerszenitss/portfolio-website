<template>
  <div>
     <div class="panel title">
        <transition name="slide-fade">
        <h1 v-if="isMounted">Expertise</h1>  
        </transition> 
    </div>

    <div class="page">
        <div class="panel half-left">
            We deliver a variety of services, and so we support also a variety of technologies.<br/>
            Here you can find an overview of our knowledge base.
        </div>

        <div class="panel half-right">
            <h4>Programming languages</h4>
            <img class="expertise" src="../assets/img/expertise/csharp.png"/> 
            <img class="expertise" src="../assets/img/expertise/angular.png"/> 
            <img class="expertise" src="../assets/img/expertise/vue.png"/> 
            <img class="expertise" src="../assets/img/expertise/nodejs.png"/> 
            <img class="expertise" src="../assets/img/expertise/javascript.png"/> 

            <!-- <img class="expertise" src="../assets/img/expertise/aspnet.png"/>             
            <img class="expertise" src="../assets/img/expertise/entityframework.png"/> 
            <img class="expertise" src="../assets/img/expertise/iis.png"/> 
            
            <img class="expertise" src="../assets/img/expertise/mstest.png"/> 
            <img class="expertise" src="../assets/img/expertise/nhibernate.png"/> 
            
            <img class="expertise" src="../assets/img/expertise/nunit.png"/> 
    
            <img class="expertise" src="../assets/img/expertise/tfs.png"/> 
            <img class="expertise" src="../assets/img/expertise/wcf.png"/> 
            <img class="expertise" src="../assets/img/expertise/wpf.png"/>  -->
        </div>

        <div class="panel half-left">
            <h4>Databases</h4>
            <img class="expertise" src="../assets/img/expertise/sql_server.png"/> 
            <img class="expertise" src="../assets/img/expertise/oracle.png"/> 
            <img class="expertise" src="../assets/img/expertise/mongodb.png"/>             
            <img class="expertise" src="../assets/img/expertise/cosmosdb.png"/>   
            <img class="expertise" src="../assets/img/expertise/postgresql.png"/>   
            <img class="expertise" src="../assets/img/expertise/mysql.png"/>   
        </div>

        <div class="panel half-right">
            <h4>Cloud solutions</h4>
            <!-- Azure -->
        </div>

        <div class="panel half-left">
            <h4>Frameworks</h4>
            <!-- wpf, wcf, entity framework; NHibernate, NUnit, MSTest -->
        </div>

        <div class="panel half-right">
            <h4>CI/CD</h4>
            <!-- Devops, Bitbucket, TFS -->
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
 
 img.expertise {
     width:64px;
     height:64px;
     background-color:white;
     margin:5px;
 }
</style>
