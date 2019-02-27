import Vue from 'vue'
import Vuex from 'vuex'
import * as request from '@/api/requests';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    csr_rid: window.localStorage.getItem('csa_rid') || null,
    userData: null,
    requests: {
      new: {
        value: [],
        loading: false,
        isEmpty: false,
        error: null
      },
      processing: {
        value: [],
        loading: false,
        isEmpty: false,
        error: null
      },
      completed: {
        value: [],
        loading: false,
        isEmpty: false,
        error: null
      },
      cancelled: {
        value: [],
        loading: false,
        isEmpty: false,
        error: null
      }
    },
    loading: false
  },
  mutations: {
    SET_LOADING(state, payload){
      state.loading = payload;
    },
    SET_USER_DATA(state, payload){
      state.userData = payload;
    },
    UPDATE_REQUEST_TYPE(state, payload){
      if(payload.requests.length === 0){
        state.requests[payload.type].isEmpty = true;
      } else{
        state.requests[payload.type].isEmpty = false
      }
      state.requests[payload.type].value = Object.values(payload.requests);
    }
  },
  actions: {
    //action to login a user
    getLogin({commit}, payload){
      commit('SET_LOADING', true);
      const formData = new FormData();
      Object.keys(payload).forEach((key)=>{
        formData.set(key, payload[key]);
      });
      return request.login(formData).then(res=>{
        commit('SET_LOADING', false);
        if(res.status === 'success'){
          commit('SET_USER_DATA', res.result);
          window.localStorage.setItem('csa_rid',res.result.csa_info.csa_rid);
          return res.request;
        } else {
          throw new Error('Could not login', res);
        }
      }).catch(err=>{
        commit('SET_LOADING', false);
        throw new Error('Could not login', err);
      })
    },
    getRequests({commit}, payload){
      request.getRequests(payload).then(res=>{
        commit('UPDATE_REQUEST_TYPE',{
          type: payload,
          requests: res.result
        })
      })
    }
  }
})
