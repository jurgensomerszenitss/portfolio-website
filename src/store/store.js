import Vue from 'vue';
import Vuex from 'vuex';

import { routerState, routerMutations, routerGetters, routerActions} from './router.store';
import { homeState, homeMutations, homeGetters, homeActions} from './home.store';
import { teamState, teamMutations, teamGetters, teamActions} from './team.store';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        ...routerState,
        ...homeState,
        ...teamState,
    },
    getters : {
        ...routerGetters,
        ...homeGetters,
        ...teamGetters,
    },
    mutations:{
        ...routerMutations,
        ...homeMutations,
        ...teamMutations,
    },
    actions:{
        ...routerActions,
        ...homeActions,
        ...teamActions
    }
});