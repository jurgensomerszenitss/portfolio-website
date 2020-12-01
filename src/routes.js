 
import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Services from './components/Services.vue';

const routes = [
    { path: "/", component: Home }, 
    { path: "/team", component: Team }, 
    { path: "/services", component: Services }, 
];

export default routes;