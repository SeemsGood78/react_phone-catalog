import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PathCategory from "../components/PathCategory/PathCategory"
import PhoneDetail from "../components/PhoneDetail/PhoneDetail"

const PhonePage = () => {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                <PathCategory />
                <PhoneDetail />
            </div>
            <Footer />
        </div>
    )
}

export default PhonePage