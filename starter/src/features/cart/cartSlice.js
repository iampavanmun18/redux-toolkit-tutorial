import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

//we can use Redux dev tool for visual representation in devtool
const initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: true,
}

// createSlice is for creating features e.g counter, cart, calculator

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => itemId !== item.id)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },

        calculateCart: (state, action) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount
            state.total= total



        }


    }
})

//cartlice(Object) includes properties like actions, caseReducer,getinitialState, name, "reducer".
console.log('cartSlice', cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateCart } = cartSlice.actions


//here  we can get reducer out of cartSlice object.
export default cartSlice.reducer
