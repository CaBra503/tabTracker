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
		token: null,
		user: null,
		isUserLoggedIn: false
	},
	//mutations
	// setting username and token states
	mutations: {
		setToken (state, token) {
			//tests curent states token against token for the user, if the users token = the token we have in db the user is logged in, otherwise they are not.
			state.token = token;
			if(token) {
				state.isUserLoggedIn = true;
			} else {
				state.isUserLoggedIn = false;
			}
		},
		//user state
		setUser (state, user) {
			state.user = user;
		}

	},
	//actions
	// inside actions is where you do async logic
	actions: {
		//explicitly commiting token
		setToken ({commit}, token) {
			commit('setToken', token);
		},
		//explicitly commiting username.
		setUser({commit}, user){
			commit('setUser', user);
		}
	}
});