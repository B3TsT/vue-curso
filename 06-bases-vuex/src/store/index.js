import { createStore } from "vuex";
import getRandomInt from '../helpers/getRandomInt'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment(state ){
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val){
            state.count += val
            state.lastMutation = 'increment by ' + val
            state.lastRandomInt = val
        },
        setLoading(){

        }
    },
    actions: {
        async incrementRandomInt({commit}){
            const randomInt = await getRandomInt()

            commit('incrementBy', randomInt)
        }
    },
});