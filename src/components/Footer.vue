<template>
  <div class="footer-bar">
      <span class="footer-content">
    &copy; Zenit Software Solutions 2021
    </span>
  </div>
</template>

<script> 

export default {
  name: 'Footer' 
}
</script>

<style>   
.footer-bar {
   background:var(--footer-bg-primary); 
    vertical-align: middle;
    height: 40px;
}

.footer-content {
    font-family: 'Roboto', sans-serif;
    font-size: 10pt;
    vertical-align: middle;
    color:var(--footer-fg-primary);
}
</style>
