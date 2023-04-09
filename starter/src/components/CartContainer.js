import React from 'react'
import CartItem from './CartItem'
import cartItems from '../cartItems'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart);
    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>

            </section>
        )
    }

    return (
        <div>
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>total <span>${total.toFixed(2)}</span> </h4>
                    </div>
                    <button className='btn clear-btn'onClick={()=>{
                        dispatch(openModal())

                    }}>clear Cart</button>
                </footer>
            </section>
        </div>
    )
}

export default CartContainer
