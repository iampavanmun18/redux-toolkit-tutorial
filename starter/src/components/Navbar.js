import React from 'react'
import { useSelector } from 'react-redux'
import { Bar, CartIcon } from '../icons'
const Navbar = () => {

    //we can destructure amount from  store(whole state of the app )
    const { amount } = useSelector((store) => store.cart)
    console.log("amount", amount);
    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <Bar/>
                    <CartIcon />
                    <div className="amount-container">
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
