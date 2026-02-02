import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PathCategory from "../components/PathCategory/PathCategory"
import ProductDetails from "../components/ProductDetails/ProductDetails"

const ProductDetailsPage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                <PathCategory />
                <ProductDetails />
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetailsPage