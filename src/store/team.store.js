export const teamState = {
   team: {
       isMounted:false,
       quotes : {
        jurgen:false,
        ksenia:false
       }
   }
}

export const teamGetters = {
    isTeamMounted : state => state.team.isMounted,
    isQuoteJurgenVisible : state => state.team.quotes.jurgen,
    isQuoteKseniaVisible: state => state.team.quotes.ksenia
}

export const teamMutations = {
    TEAM_MOUNTED(state, isMounted) { 
        state.team.isMounted = isMounted; 
    },
    QUOTE_JURGEN(state,show){
        state.team.quotes.jurgen = show;
    },
    QUOTE_KSENIA(state, show){
        state.team.quotes.ksenia = show;
    }
}


export const teamActions = {
    onTeamMounted({commit}, isMounted) {
        commit('TEAM_MOUNTED', isMounted); 
    },
    onQuoteJurgen({commit}, show){
        commit('QUOTE_JURGEN',show);
    },
    onQuoteKsenia({commit}, show) {
        commit('QUOTE_KSENIA', show);
    }
}

