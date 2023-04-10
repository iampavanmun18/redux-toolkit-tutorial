import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateCart, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const { isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch();

  console.log("isMOdal", isOpen)

  useEffect(() => {
    dispatch(calculateCart())
  })

  useEffect(() => {
    dispatch(getCartItems("Pavan"))
  })

  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
