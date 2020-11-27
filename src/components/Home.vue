<template>
  <div>
    <div class="panel">
      <h1>Welcome at <br/>Zenit Software Solutions</h1>    
    </div>

    <div class="page">
      <div class="panel content left">
        <transition name="slide-fade">
          <span v-if="show">
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
export default {
  name: 'Home',
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
</style>
