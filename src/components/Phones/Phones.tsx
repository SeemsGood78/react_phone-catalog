import CardCatalogue from '../CardCatalogue/CardCatalogue'
import CatalogueOptions from '../CatalogueOptions/CatalogueOptions'
import Pagination from '../Pagination/Pagination'

const Phones = () => {
    return (
        <div className="content_grid">
            <CatalogueOptions />
            <CardCatalogue />
            <Pagination />
        </div>
    )
}

export default Phones