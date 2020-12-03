import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import { routerState, routerMutations, routerGetters, routerActions} from './router.store';
import { homeState, homeMutations, homeGetters, homeActions} from './home.store';
import { teamState, teamMutations, teamGetters, teamActions} from './team.store';
import { servicesState, servicesMutations, servicesGetters, servicesActions} from './services.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state : {
        ...routerState,
        ...homeState,
        ...teamState,
        ...servicesState,
    },
    getters : {
        ...routerGetters,
        ...homeGetters,
        ...teamGetters,
        ...servicesGetters,
    },
    mutations:{
        ...routerMutations,
        ...homeMutations,
        ...teamMutations,
        ...servicesMutations,
    },
    actions:{
        ...routerActions,
        ...homeActions,
        ...teamActions,
        ...servicesActions,
    }
});