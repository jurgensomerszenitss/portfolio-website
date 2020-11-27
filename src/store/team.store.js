export const teamState = {
   team: {
       isMounted:false
   }
}

export const teamGetters = {
    isTeamMounted : state => state.team.isMounted,
}

export const teamMutations = {
    TEAM_MOUNTED(state, isMounted) { 
        state.team.isMounted = isMounted; 
    },
}


export const teamActions = {
    onTeamMounted({commit}, isMounted) {
        commit('TEAM_MOUNTED', isMounted); 
    }
}

