//Importing Vue and vuex modules
import Vue from 'vue';
import Vuex from 'vuex';

//tells vue to use vuex so we can store our components.
Vue.use(Vuex);

//create the store

export default new Vuex.Store({
	//strict can not modify unless mutation
	strict: true,
	//state are the states of our app we want to track.
	state: {
		token: null
		// user: null,
		// isUserLoggedIn: false
	},
	//mutations
	// inside mutations we take a state then pass it a token
	mutations: {
		setToken (state, token) {
			state.token = token;
		}
	},
	//vue ex
	//actions mutations and your state
	// inside actions is where you do async logic
	actions: {
		setToken ({commit}, token) {
			commit('setToken', token);
		}

	}
});