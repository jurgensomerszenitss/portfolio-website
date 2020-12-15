<template>
  <div>
     <div class="panel title">
        <transition name="slide-fade">
        <h1 v-if="isMounted">Jobs</h1>  
        </transition> 
    </div>

    <div class="page">
        <div class="panel content left">
            <transition name="slide-fade">
                <div v-if="isMounted">
                    Here you can find the current open vancancies.
                </div>
            </transition>
        </div>



        <div class="panel content right">
            <transition name="slide-fade">
                <span v-if="isMounted">
                If you want to freely apply to work with us, send an email to <a href="mailto:jobs@zenitss.eu">jobs@zenitss.eu</a>
                with your motivation letter and cv.
                We will contact you as soon as possible.
                </span>
            </transition>
        </div>

      
        <!-- <div class="panel content">
            <form v-if="!isSent" class="contact-form needs-validation" @submit.prevent="sendEmail">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="from_name" required>
                    <div class="invalid-feedback">
                        Please provide a name.
                    </div>
                     <div class="valid-feedback">
                        Name ok
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="from_email" required >
                </div>

                <div class="col-md-6">
                    <label for="message" class="form-label">Message</label>
                    <textarea name="message" class="form-control" id="message" required></textarea>
                </div>  

                <button type="submit" class="primary"><img class="button" src="../assets/img/send.png">Send</button>
            </form>
            <div v-if="isSent">
                Thank you for your message. We will contact you soon.
                <button type="button" class="primary" v-on:click="resetEmail()"><img class="button" src="../assets/img/back.png">Back to email</button>
            </div>
        </div>   -->
    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store }  from '../store/store'; 

export default {
  name: 'Jobs',
   computed: {  
    ...mapGetters({  
        isMounted:"isJobsMounted", 
        isSent:"isJobsEmailSend",
    })
  },
  mounted() {
    store.dispatch('onJobsMounted',true);
  }, 
  beforeDestroy(){ 
    store.dispatch('onJobsMounted',false);
  },
  methods : {
    sendEmail: (e) => {
          var elements = [];
          e.target.forEach(ctrl =>  {
              elements.push(`"${ctrl.name}" : "${ctrl.value}"`);
          });
 

          const json = `{${elements.join(',')}}`;
          const email = JSON.parse(json);
          store.dispatch('onJobsSendMail',email);
    },
    resetEmail : () => {
        store.dispatch('onJobsResetMail');        
    }
  }
}
</script>

<style scoped>
 button {
     margin:15px;
     outline:none;
 }

 


</style>
