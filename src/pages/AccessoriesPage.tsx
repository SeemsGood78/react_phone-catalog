import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PathCategory from "../components/PathCategory/PathCategory"

const AccessoriesPage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="content_grid">
                <PathCategory />
                <div>AccessoriesPage</div>
            </div>
            <Footer />
        </div>
    )
}

export default AccessoriesPage