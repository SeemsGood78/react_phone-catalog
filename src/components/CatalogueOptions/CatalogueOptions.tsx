import PathCategory from "../PathCategory/PathCategory"
import styles from './style.module.scss'

interface CatalogueOptionsProps {
    totalProducts: number;
    itemsPerPage: number;
    onItemsPerPageChange: (value: number) => void;
}


const CatalogueOptions = ({ totalProducts, itemsPerPage, onItemsPerPageChange }: CatalogueOptionsProps) => {

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        if (value === 'all') {
            onItemsPerPageChange(totalProducts);
        } else {
            onItemsPerPageChange(Number(value));
        }
    };



    return (
        <div className={styles['options']}>
            <PathCategory totalProducts={totalProducts} />
            <div className={styles['options_select']}>

                <div className={styles['options_select_block']}>
                    <span className="text_small gray">Sort by</span>
                    <select name="" id="" className={styles['options_select_block_variants']}>
                        <option value="value1" selected>Newest</option>
                        <option value="value2">2</option>
                        <option value="value3">3</option>
                    </select>
                </div>

                <div className={styles['options_select_block']}>
                    <span className="text_small gray">Items on page</span>
                    <select
                        name="itemsPerPage"
                        id="itemsPerPage"
                        className={styles['options_select_block_variants']}
                        value={itemsPerPage >= totalProducts ? 'all' : itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value="8">8</option>
                        <option value="16">16</option>
                        <option value="32">32</option>
                        <option value="all">All</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default CatalogueOptions