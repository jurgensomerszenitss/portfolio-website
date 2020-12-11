 
import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Services from './components/Services.vue';
import Expertise from './components/Expertise.vue';
import Contact from './components/Contact.vue';

const routes = [
    { path: "/", component: Home }, 
    { path: "/team", component: Team }, 
    { path: "/services", component: Services }, 
    { path: "/expertise", component: Expertise }, 
    { path: "/contact", component: Contact }, 
];

export default routes;