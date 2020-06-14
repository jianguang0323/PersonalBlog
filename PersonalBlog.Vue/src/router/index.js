import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from "@/pages/Test/Test.vue"
import Login from "@/pages/Login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld', 
    //   component: HelloWorld
    // },
    {
      path: "/Test",
      name:"Test",
      component: Test,
      title:"测试",
      ImageLink:"",
      formType:"0",
    },
    {
      path: "/",
      name:"Login",
      component: Login,
      title:"登录",
      ImageLink:"",
      formType:"0",
    }
  ],
})
