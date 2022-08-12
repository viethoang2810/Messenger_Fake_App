import { routes } from "./Route";
import  ChatRoom  from "../components/ChatRoom/index";
import Login from '../components/Form/Login/index'
const publicRoutes = [
  {
    path: routes.home,
    component: ChatRoom,
  },
  {
    path: routes.login,
    component:Login,
  },
];

export {publicRoutes}