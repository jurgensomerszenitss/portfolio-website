<template>
  <div>
     <div class="panel title">
        <transition name="slide-fade">
        <h1 v-if="isMounted">Contact</h1>  
        </transition> 
    </div>

    <div class="page">
        <div class="panel content">
            <transition name="slide-fade">
                <span v-if="isMounted">
                Please fill in this form to contact us,
                or send an email to <a href="mailto:contact@zenitss.eu">contact@zenitss.eu</a><br/>
                We will answer your question as soon as possible.
                </span>
            </transition>
        </div>

        <div class="panel content">
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
        </div>  
    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store }  from '../store/store'; 

export default {
  name: 'Contact',
   computed: {  
    ...mapGetters({  
        isMounted:"isContactMounted", 
        isSent:"isContactEmailSend",
    })
  },
  mounted() {
    store.dispatch('onContactMounted',true);
  }, 
  beforeDestroy(){ 
    store.dispatch('onContactMounted',false);
  },
  methods : {
    sendEmail: (e) => {
          var elements = [];
          e.target.forEach(ctrl =>  {
              elements.push(`"${ctrl.name}" : "${ctrl.value}"`);
          });
          const json = `{${elements.join(',')}}`;
          const email = JSON.parse(json);
          store.dispatch('onContactSendMail',email);
    },
    resetEmail : () => {
        store.dispatch('onContactResetMail');        
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
