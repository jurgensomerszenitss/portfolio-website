<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <router-link   to="/">
        <a class="navbar-brand" href="#"><img src="../assets/img/logo.gif" width="48" height="48"><img src="../assets/img/banner.gif" height="48"></a>
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">              
                 <router-link to="/services"> 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/services'}" href="#" >Services</a>
                </router-link>
            </li>
            <li class="nav-item">              
                 <router-link to="/team"> 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/team'}" href="#" >Team</a>
                </router-link>
            </li>
            <li class="nav-item">              
                 <router-link to="/expertise"> 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/expertise'}" href="#" >Expertise</a>
                </router-link>
            </li>
            <li class="nav-item">              
                 <router-link to="/jobs"> 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/jobs'}" href="#" >Jobs</a>
                </router-link>
            </li>
             <li class="nav-item" >               
                 <router-link to="/contact" > 
                    <a class="nav-link" v-bind:class="{active : currentRoute == '/contact'}" href="#" >Contact</a>
                </router-link>
            </li>
                      
          </ul>
      </div>
    </nav> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Header',
  computed:{
    ...mapGetters({
      currentRoute:"currentRoute"
    })  
  },
  methods : {   
  }
}
</script>

<style>  
.bg-light {
    /* background-color: white; var(--zss-theme-primary); */
    
}

.navbar-brand {
    color:var(--zss-theme-primary)!important;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
}

.nav-link{
    color:var(--zss-theme-primary)!important;
    font-family: 'Roboto', sans-serif;
}

.nav-link:hover{
    text-decoration: none;
}

a:hover {
    text-decoration: none!important;
    color:var(--zss-theme-option)!important;
}

a.nav-link.active{
    color:var(--zss-theme-option)!important;
}

/* .navbar-toggler-icon {
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,280,280, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")!important;
} */

/* .navbar-toggler {
    border-color: var(--zss-gray)!important;
} */
</style>
