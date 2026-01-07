import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PathCategory from "../components/PathCategory/PathCategory"
import Cart from "../components/Cart/Cart"

const CartPage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                <PathCategory />
                <Cart />
            </div>
            <Footer />
        </div>
    )
}

export default CartPage