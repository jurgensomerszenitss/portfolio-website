 
import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Services from './components/Services.vue';
import Expertise from './components/Expertise.vue';

const routes = [
    { path: "/", component: Home }, 
    { path: "/team", component: Team }, 
    { path: "/services", component: Services }, 
    { path: "/expertise", component: Expertise }, 
];

export default routes;