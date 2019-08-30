import Login from "views/authentification/LoginPage.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
 
const indexRoutes = [
{ 
    path: "/login", 
    component: Login
},
{ 
    path: "/dashboard", 
    component: Dashboard 
},
{ 
    redirect: true, 
    path: "/", 
    to: "/login"
}
];
 
export default indexRoutes;