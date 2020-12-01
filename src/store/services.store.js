export const servicesState = {
   services: {
       isMounted:false
   }
}

export const servicesGetters = {
    isServicesMounted : state => state.services.isMounted,
}

export const servicesMutations = {
    SERVICES_MOUNTED(state, isMounted) { 
        state.services.isMounted = isMounted; 
    },
}


export const servicesActions = {
    onServicesMounted({commit}, isMounted) {
        commit('SERVICES_MOUNTED', isMounted); 
    }
}

