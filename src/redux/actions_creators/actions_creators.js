import {ADD_QUALITY, ADD_TO_CARD, REMOVE_FROM_CART} from "../actions/actions"

export const add_to_card  = (content)=>{
    return {
        type:ADD_TO_CARD,
        content: content
    }
}
export const add_quality  = (content)=>{
    return {
        type:ADD_QUALITY,
        content: content
    }
}
export const remove_from_cart  = (content)=>{
    return {
        type:REMOVE_FROM_CART,
        content: content
    }
}