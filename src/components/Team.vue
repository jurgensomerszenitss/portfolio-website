<template>
  <div>
     <div class="panel">
      <h1>Our team</h1>    
    </div>

    <div class="page">

        <div class="panel content right">
            <div class="inline photo">
                <img src="../assets/jurgen.jpg" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title" v-if="show"> 
    
                    <h3>Jurgen Somers</h3>
                    <h4>CEO / founder</h4>
                    Active in IT since 2001<br/>
                    <!-- <a href="mailto:jurgen@zenitss.eu">jurgen@zenitss.eu</a> -->
                </div>
            </transition>
        </div>

        <div class="panel content left">
            <div class="inline photo">
                <img src="../assets/ksenia.jpg" class="photo">
            </div>
             <transition name="slide-fade">
                <div class="inline title"  v-if="show">
                    <h3>Ksenia Medova</h3>
                    <h4>CCO / Co-founder</h4>
                    Experienced in sales and management since 2006
                    <!-- <a href="mailto:ksenia@zenitss.eu">ksenia@zenitss.eu</a> -->
                </div> 
             </transition>
        </div>

        <div class="panel content center">
            Each team member is a specialist in their area.<br/>
            Before we increase our team, everyone is tested on their skills.<br/>
            And once a new team member is added to the family, we support them with all they need.
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  props: {
    show: Boolean
  },
  mounted() {
    this.show = true; // might need this.$nextTick
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
