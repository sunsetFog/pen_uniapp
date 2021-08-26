import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		login_user:{
			
		}
	},
    mutations: {
		userAi (state,value) {
			state.login_user = value
		}
	},
	getters: {
		userGet (state) {
			return state.login_user
		}
	},
    actions: {
		
	}
})
export default store