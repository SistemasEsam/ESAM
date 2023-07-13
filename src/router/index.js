import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import InicioView from '../views/InicioView.vue'
import Form2View from '../views/Form2View'
import Form3View from '../views/Form3View'
import Form4View from '../views/Form4View'
import Form5View from '../views/Form5View'
import pdfView from '../views/PDFFileView'
import home2 from '../views/Home2View'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/form',
    name:'form',
    component : FormView

  },
  {
    path:'/form2',
    name:'form2',
    component:Form2View
      },
      {
        path:'/form3',
        name:'form3',
        component:Form3View
          },
          {
            path:'/form4',
            name:'form4',
            component:Form4View
              },
              {
                path:'/form5',
                name:'form5',
                component:Form5View
                  },



                  {path:'/h2',
                name:'h2',
              component:home2},

  {
path:'/inicio',
name:'inicio',
component:InicioView
  },
  {
    path:'/pdffile',
    name:'pdf',
    component:pdfView
      }
 
]

const router = new VueRouter({
  routes
})

export default router
