import Vue from 'vue';
import Vuex from 'vuex';

import { routerState, routerMutations, routerGetters, routerActions} from './router.store';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        ...routerState,
    },
    getters : {
        ...routerGetters,
    },
    mutations:{
        ...routerMutations,
    },
    actions:{
        ...routerActions,
    }
});