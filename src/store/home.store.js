export const homeState = {
   home: {
       isMounted:false
   }
}

export const homeGetters = {
    isHomeMounted : state => state.home.isMounted,
}

export const homeMutations = {
    HOME_MOUNTED(state, isMounted) { 
        state.home.isMounted = isMounted; 
    },
}


export const homeActions = {
    onHomeMounted({commit}, isMounted) {
        commit('HOME_MOUNTED', isMounted); 
    }
}

