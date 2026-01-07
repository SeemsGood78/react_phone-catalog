import CardCatalogue from "../components/CardCatalogue/CardCatalogue"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PathCategory from "../components/PathCategory/PathCategory"


const FavoritesPage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                <PathCategory />
                <CardCatalogue />
            </div>
            <Footer />
        </div>
    )
}

export default FavoritesPage