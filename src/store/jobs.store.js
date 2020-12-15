import {EmailService} from '../services/email.service';

export const jobsState = {
   jobs: {
       isMounted:false,
       isEmailSent:false
   }
}

export const jobsGetters = {
    isJobsMounted : state => state.jobs.isMounted,
    isJobsEmailSend : state => state.jobs.isEmailSent,
}

export const jobsMutations = {
    JOBS_MOUNTED(state, isMounted) { 
        state.jobs.isMounted = isMounted; 
    },
    JOBS_EMAILSEND(state, isSent) {
        state.jobs.isEmailSent = isSent;
    }
}


export const jobsActions = {
    onJobsMounted({commit}, isMounted) {
        commit('JOBS_MOUNTED', isMounted); 
    },
    onJobsSendMail({commit}, email ) { 
        EmailService.sendJob(email).then(
            () => {
                commit('JOBS_EMAILSEND', true);
            },
            (err) => console.error(err)
        ); 
    },
    onJobsResetMail({commit}) {
        commit('JOBS_EMAILSEND', false);
    }
}

