import Vue from 'vue'
import Router from 'vue-router'

import login from  '@/components/Login'
import home from  '@/components/Home'
import listFuncionarios from  '@/components/funcionario/List'
import editFuncionario   from  '@/components/funcionario/Edit'
import novoFuncionario   from  '@/components/funcionario/Add'


Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/funcionarios',
      name: 'funcionarios-list',
      component: listFuncionarios    
    },
    {
      path: '/funcionario/:cpf',
      name: "funcionario-edit",
      component: editFuncionario
    },
    {
      path: '/addFuncionario',
      name: "funcionario-add",
      component: novoFuncionario
    }
  ]
})

router.beforeEach((to, from, next) => {
    
  if (to.name !== 'login' && !localStorage.getItem('authUser')){
     next({name: 'login'})
  } else {
     next()
  }
  
})

export default router;