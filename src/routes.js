// import {
//     Home, Mall, Detail, Cart, Mine, Login
// } from './pages' //导入页面
import FormPage from './component/Form/FormPage'
import HomePage from './component/homePage/HomePage'
import DetailPage from './component/Detail/DetailPage'
//通过组件配置路由
const routes = [{
    path: '/form',
    component: FormPage
},{
    path:'/',
    component: HomePage
},{
    path:'detail',
    component: DetailPage
}
];
export default routes
