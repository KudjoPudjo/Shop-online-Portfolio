import { ADD_TO_CARD, ADD_QUALITY, REMOVE_FROM_CART } from "../actions/actions"
import {initialState} from "../state/state"
import {pick_state} from "../state/picState"
const InitState = {
    state:initialState,
    cartState:[],
    pick_state
}

function reducer (state = InitState,action){
    switch(action.type){
        case ADD_TO_CARD:{
            const arr = state.cartState.concat()
            arr.push(action.content)
            return {...state,cartState:arr}
        }
        case ADD_QUALITY:{
            const arr = state.cartState.concat()
            let index = arr.indexOf(elem=>elem.id===action.content.id) 
            arr.splice(index,1,action.content)        
            return {...state,cartState:arr}
        }
        case REMOVE_FROM_CART:{
            const arr = state.cartState.concat()
            let new_arr = arr.filter(elem=>elem.id!==action.content)                                
            return {...state,cartState:new_arr }
        }
        default:return state
    }
}

export default reducer