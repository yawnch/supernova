import { Root } from 'app/components'
import { Home, Faq, Privacy, Terms, NotFound } from 'app/pages'
import adminRoutes from './adminRoutes'

export default [
  ...adminRoutes, {
    component: Root,
    routes: [{
      path: '/',
      exact: true,
      component: Home,
      meta: {
        title: 'Yawnch - React, Firebase, SSR',
        description: 'An opinionated starting point for web applications.'
      }
    }, {
      path: '/faq',
      exact: true,
      component: Faq,
      meta: {
        title: 'Yawnch - FAQ',
        description: 'Frequently asked questions'
      }
    }, {
      path: '/privacy',
      exact: true,
      component: Privacy,
      meta: {
        title: 'Yawnch - Privacy Policy',
        description: 'Privacy policy'
      }
    }, {
      path: '/terms',
      exact: true,
      component: Terms,
      meta: {
        title: 'Yawnch - Terms',
        description: 'Terms of service'
      }
    }, {
      path: '*',
      component: NotFound,
      meta: {
        title: 'Yawnch - Not found',
        description: 'An opinionated starting point for web applications.'
      }
    }]
  }]
