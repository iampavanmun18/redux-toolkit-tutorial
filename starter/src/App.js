import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateCart } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  console.log("isMOdal", isOpen)

  useEffect(() => {
    dispatch(calculateCart())
  }, [cartItems])
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
    ;
}
export default App;
