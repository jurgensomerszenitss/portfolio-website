import {EmailService} from '../services/email.service';

export const contactState = {
   contact: {
       isMounted:false,
       isEmailSent:false
   }
}

export const contactGetters = {
    isContactMounted : state => state.contact.isMounted,
    isContactEmailSend : state => state.contact.isEmailSent,
}

export const contactMutations = {
    CONTACT_MOUNTED(state, isMounted) { 
        state.contact.isMounted = isMounted; 
    },
    CONTACT_EMAILSEND(state, isSent) {
        state.contact.isEmailSent = isSent;
    }
}


export const contactActions = {
    onContactMounted({commit}, isMounted) {
        commit('CONTACT_MOUNTED', isMounted); 
    },
    onContactSendMail({commit}, email ) { 
        EmailService.send(email).then(
            () => {
                commit('CONTACT_EMAILSEND', true);
            },
            (err) => console.error(err)
        ); 
    },
    onContactResetMail({commit}) {
        commit('CONTACT_EMAILSEND', false);
    }
}

