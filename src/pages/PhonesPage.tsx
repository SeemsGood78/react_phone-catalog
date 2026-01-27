import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ProductList from "../components/ProductList/ProductList"

const PhonesPage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}

export default PhonesPage