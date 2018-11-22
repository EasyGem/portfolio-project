import Vue from 'vue'
import Router from 'vue-router'

const _367c34a2 = () => import('../pages/reviews.vue' /* webpackChunkName: "pages/reviews" */).then(m => m.default || m)
const _05e7030e = () => import('../pages/aboutme.vue' /* webpackChunkName: "pages/aboutme" */).then(m => m.default || m)
const _d5d0e998 = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _c30d2d48 = () => import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */).then(m => m.default || m)
const _79a4d5e6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/reviews",
			component: _367c34a2,
			name: "reviews"
		},
		{
			path: "/aboutme",
			component: _05e7030e,
			name: "aboutme"
		},
		{
			path: "/contact",
			component: _d5d0e998,
			name: "contact"
		},
		{
			path: "/portfolio",
			component: _c30d2d48,
			name: "portfolio"
		},
		{
			path: "/",
			component: _79a4d5e6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
