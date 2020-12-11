import { items } from '../services/expertise.service';

export const expertiseState = {
   expertise: {
       isMounted:false,
       items:{},
   }
}

export const expertiseGetters = {
    isExpertiseMounted : state => state.expertise.isMounted,
    expertiseItems:state => state.expertise.items,
}

export const expertiseMutations = {
    EXPERTISE_MOUNTED(state, isMounted) { 
        state.expertise.isMounted = isMounted; 
        state.expertise.items = items;
    },
}


export const expertiseActions = {
    onExpertiseMounted({commit}, isMounted) {
        commit('EXPERTISE_MOUNTED', isMounted); 
    }
}

