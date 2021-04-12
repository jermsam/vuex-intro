import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // data accessible to any component (global data)
    counter:0,
    color:'grey'
  },
  getters:{
// could help us filter data in some way before 
// making it available to our components
counterSquared(state){
  return state.counter * state.counter
}
  },
  mutations: { 
    // can't get data from external sources (synchronous)
  // we commit mutations
  incrementCounter(state){
state.counter++
  },
  decrementCounter(state){
    state.counter--
      },
      incrementCounterMutation(state,payload){
        state.counter +=payload
          },
          setColorCode(state,payload){
state.color=payload
          }
  },
  actions: {
    // can't access data direct from state ()
    // u do so through committing mutations
    // allows access to asynchronous data (external data)
    // we dispatch actions
   async incrementCounter({commit}){
     const {data} = await axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    console.log('dispatched action: ',data)
    commit('incrementCounterMutation',data)
        },
        setColorCode({commit},payload){
          commit('setColorCode',payload)
          }
       
  },
  modules: {
    // allow us to breakdown our store in different modules
    // each having its own state, getters, mutations & actions

  }
})
