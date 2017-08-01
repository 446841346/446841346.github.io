import * as type from '../mutations_type'

const state = {
    	currentState : 'home'
    };
const getters = {
	getCurrentState : state => state.currentState
};
const mutations = {
	[type.CHANGE_CURRENT_STATE] (state,{currentState}){
		state.currentState = currentState;
	}
};
const actions = {
	changeState({commit},currentState){
		commit(type.CHANGE_CURRENT_STATE,{currentState});
	}
};

export default {
  state,
  getters,
  actions,
  mutations
}