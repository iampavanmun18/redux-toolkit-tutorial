import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems :[],
    amount:5,
    total:0,
    isLoading:true,

}

// createSlice is for creating features e.g counter, cart, calculator

const cartSlice = createSlice({
name: 'cart',
initialState,
})

//cartlice(Object) includes properties like actions, caseReducer,getinitialState, name, "reducer".
console.log(cartSlice);



//here  we can get reducer out of cartSlice object.
export default cartSlice.reducer
