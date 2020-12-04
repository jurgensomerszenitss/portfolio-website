export const expertiseState = {
   expertise: {
       isMounted:false
   }
}

export const expertiseGetters = {
    isExpertiseMounted : state => state.expertise.isMounted,
}

export const expertiseMutations = {
    EXPERTISE_MOUNTED(state, isMounted) { 
        state.expertise.isMounted = isMounted; 
    },
}


export const expertiseActions = {
    onExpertiseMounted({commit}, isMounted) {
        commit('EXPERTISE_MOUNTED', isMounted); 
    }
}

