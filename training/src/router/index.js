import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Register = () => import('../views/register/Register')
const Login = () => import('../views/login/Login')
const Topic = () => import('../views/topic/Topic')
const Center = () => import('../views/center/Center')
const Community = () => import('../views/community/Community')
const About = () => import('../views/about/About')
const CommunityItem = () => import('../views/communityitem/CommunityItem')
const Update = () => import('../views/update/Update')



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/topic',
    component:Topic
  },
  {
    path:'/center',
    component:Center
  },
  {
    path:'/community',
    component:Community
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/item',
    component:CommunityItem
  },
  {
    path:'/update',
    component:Update
  }

]


const router = new VueRouter({
  routes,
  mode:'history'
})


router.beforeEach((to,from,next) => {
  const isToken = localStorage.token ? true : false
  if( to.path == '/login' || to.path == '/register' || to.path == '/home' || to.path == '/about'){
    next()
  } else {
    if(isToken)
    {next()}
    else {
   
      next('/login')
    }
    
  }
})

export default router