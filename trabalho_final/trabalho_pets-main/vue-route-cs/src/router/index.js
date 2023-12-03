import Vue from 'vue'
import Router from 'vue-router'

import login from  '@/components/Login'
import home from  '@/components/Home'

import novoFuncionario   from  '@/components/funcionario/Add'
import listFuncionarios from  '@/components/funcionario/List'
import editFuncionario   from  '@/components/funcionario/Edit'

import novoCliente from '@/components/cliente/Add'
import listClientes from '@/components/cliente/List'
import editCliente from '@/components/cliente/Edit'

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
      path: '/listFuncionarios',
      name: 'funcionarios-list',
      component: listFuncionarios    
    },
    {
      path: '/updatefuncionario',
      name: "funcionario-edit",
      component: editFuncionario
    }, 
    {
      path: '/addfuncionario',
      name: "funcionario-add",
      component: novoFuncionario
    },


    {
      path: '/listClientes',
      name: 'clientes-list',
      component: listClientes    
    },
    {
      path: '/updatecliente',
      name: "cliente-edit",
      component: editCliente
    }, 
    {
      path: '/addcliente',
      name: "cliente-add",
      component: novoCliente
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