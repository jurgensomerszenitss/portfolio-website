export const contactState = {
   contact: {
       isMounted:false
   }
}

export const contactGetters = {
    isContactMounted : state => state.contact.isMounted,
}

export const contactMutations = {
    CONTACT_MOUNTED(state, isMounted) { 
        state.contact.isMounted = isMounted; 
    },
}


export const contactActions = {
    onContactMounted({commit}, isMounted) {
        commit('CONTACT_MOUNTED', isMounted); 
    }
}

