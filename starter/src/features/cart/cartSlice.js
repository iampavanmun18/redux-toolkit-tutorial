import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = `https://course-api.com/react-useReducer-cart-project`;

//we can use Redux dev tool for visual representation in devtool
const initialState = {
    cartItems: [],
    amount: 5,
    total: 0,
    isLoading: true,
}


//getCartItems accepts two params 1st is action and 2nd is callback function
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    // return fetch(url).then(res => res.json()).catch((err) => console.log(err));
    try {
        console.log("Name from App component", name); // App component can pass argument to getCartItems(name) function
        //console.log(thunkAPI); we can access multiple properties from thunkAPI like state of app,dispatch an action, intercept an action.
        const resp = await axios(url);
        return resp.data

    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong")
    }



})

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
            state.total = total



        }


    },

    //ExtraReducers will give us access to 3 states of promise given by api(getCartItems i.e pending, fulfilled, rejected)
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log("action response", action);
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        }
    }
})

//cartlice(Object) includes properties like actions, caseReducer,getinitialState, name, "reducer".
console.log('cartSlice', cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateCart } = cartSlice.actions


//here  we can get reducer out of cartSlice object.
export default cartSlice.reducer
