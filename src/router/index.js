import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/jonathanbinot/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Jonathan Binot - Web Developer',
      metaTags: [
        {
          name: 'description',
          content: 'Je suis Jonathan Binot, Développeur web. Bienvenue sur mon site web. Vous y trouverez mon CV ainsi que mon portfolio.'
        },
        {
          property: 'og:description',
          content: 'Je suis Jonathan Binot, Développeur web. Bienvenue sur mon site web. Vous y trouverez mon CV ainsi que mon portfolio.'
        }
      ]
    }
  },
  {
    path: '/jonathanbinot/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'CV | Jonathan Binot',
      metaTags: [
        {
          name: 'description',
          content: 'Voici la page contenant mon CV. Vous avez accès ici à diverses informations me concernant, allant de mes expériences à mes centres d\'intérêts.'
        },
        {
          property: 'og:description',
          content: 'Voici la page contenant mon CV. Vous avez accès ici à diverses informations me concernant, allant de mes expériences à mes centres d\'intérêts.'
        }
      ]
    }
  },
  {
    path: '/jonathanbinot/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio | Jonathan Binot',
      metaTags: [
        {
          name: 'description',
          content: 'Cette page contient mes différentes réalisations.'
        },
        {
          property: 'og:description',
          content: 'Cette page contient mes différentes réalisations.'
        }
      ]
    }
  },
  {
    path: '*',
    name: 'catchAll',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
