import Vuex from 'vuex'
import {getUserFromCookie, getUserFromSession} from '@/helpers'
import Cookies from 'js-cookie'
import {auth, db} from '~/plugins/firebase'

const mainStore = () => {
	return new Vuex.Store({
		state: {
			user: {},
			uid: '',
      showHeader: true,
			sections: [{
				id: 0,
				title: 'About me',
				desc: 'My name is Alexander Kimaev and I am a front-end developer. My primary type of employment is freelance. Below you can learn about the technologies and skills I have, as well as what types of projects I can implement.',
				headerButton: 'My skills',
				colors: {
					bg: '#000',
					text: '#fff'
				},
        path: 'aboutme'
			},
      {
        id: 1,
        title: 'Portfolio',
        desc: "Here are the projects I've finished. Some of them I've made as an example of how the project can look like (for example, Vue.js Single Page Application). You also can click on the project and see how it works in a browser.",
        headerButton: 'See projects',
        colors: {
          bg: '#fff',
          text: '#000'
        },
        path: 'portfolio'
      },
      {
        id: 2,
        title: 'Reviews',
        desc: '',
        headerButton: '',
        colors: {
          bg: '#fff',
          text: '#000'
        },
        path: 'reviews'
      },
      {
        id: 3,
        title: 'Contact',
        desc: '',
        headerButton: '',
        colors: {
          bg: '#000',
          text: '#fff'
        },
        path: 'contact'
      }],
			currentSection: null
		},
		getters: {
			getSection: state => {
				return state.sections.find((e) => {
					return e.id === state.currentSection
				})
			},
      getSectionId: state => name => {
				let result = state.sections.find((e) => {
					return e.path === name
				})
          return (result) ? result.id : null
			},
			uid(state) {
        if (state.user && state.user.uid) return state.user.uid
        else return null
      },
      user(state) {
        return state.user
      },
      isAuthenticated(state) {
        return !!state.user && !!state.user.uid
      }
		},
		actions: {
			async nuxtServerInit ({ dispatch, commit, state }, { req }) {
        const user = getUserFromCookie(req)
        if (user) {
          await commit('setUSER', { name: user.name, email: user.email, avatar: user.picture, uid: user.user_id})
        }
      },
			async checkUserUpdated({commit, state}, user) {
				let cookies = Cookies.get('access_token')
				if (!cookies)
					return null

				if(!user || cookies !== user.qa) {
					Cookies.remove('access_token')
					commit('setUSER', null)
				}

				// compare CurrentUser.token and token from cookies

			},
      async login({dispatch, state}, user) {
        const token = await auth.currentUser.getIdToken(true)
        user = user.user
        const userInfo = {
        	name: user.displayName,
        	email: user.email,
        	uid: user.uid
        }

        Cookies.set('access_token', token) // saving token in cookie for server rendering
        await dispatch('setUSER', userInfo)
        await dispatch('saveUID', userInfo.uid)
      },

      async logout({commit, dispatch}) {
        await auth.signOut()

        Cookies.remove('access_token');
        commit('setUSER', null)
        commit('saveUID', null)
      },

      saveUID({commit}, uid) {
        commit('saveUID', uid)
      },

      setUSER({commit}, user) {
        commit('setUSER', user)

      }
		},
		mutations: {
      setSection(state, id) {
        state.currentSection = id
      },
      toggleHeader(state) {
        state.showHeader = (state.showHeader) ? false : true
        state.currentSection = null
      },
			saveUID (state, uid) {
        state.uid = uid
      },
      setUSER (state, user) {
        state.user = user
      }
		},
	})
}

export default mainStore
