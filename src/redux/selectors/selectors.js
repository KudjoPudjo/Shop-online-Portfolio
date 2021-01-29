export const getAllState = (state)=>state.state;

export const getMansCloth = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="man")
    return arr.filter((item)=>item.type === "clothets")
}
export const getMansSneak = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="man")
    return arr.filter((item)=>item.type === "sneakers")
}
export const getMansPants = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="man")
    return arr.filter((item)=>item.type === "pants")
}
export const getMansJakets = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="man")
    return arr.filter((item)=>item.type === "jackets")
}
export const getGirlCloth = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="woman")
    return arr.filter((item)=>item.type === "clothets")
}
export const getGirlSneak = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="woman")
    return arr.filter((item)=>item.type === "sneakers")
}
export const getGrilJakets = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="woman")
    return arr.filter((item)=>item.type === "jackets")
}
export const getGirlPants = (state)=>{
    let arr = state.state.filter((item)=>item.sex ==="woman")
    return arr.filter((item)=>item.type === "pants")
}
export const getProductInf = (state,id)=>{
    return state.state.find((item)=>item.id === id)
}
export const getProductPic = (state,type)=>{
    return state.pick_state.find((item)=>item.type === type)
}
export const getCartState = (state)=>{
    return state.cartState
}