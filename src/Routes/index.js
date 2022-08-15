import { routes } from "./Route";
import HomePage from '../Page/Home';
import Profile from '../Page/Profile';
import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout'
const publicRoutes = [
  {
    path: routes.home,
    component: HomePage,
  },
  {
    path: routes.profile,
    component: Profile,
  },
  {
    path: routes.login,
    component:DefaultLayout,
    default:true
  },
];

export {publicRoutes}