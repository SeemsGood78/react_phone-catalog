import PathCategory from "../PathCategory/PathCategory"
import styles from './style.module.scss'

const CatalogueOptions = () => {
    return (
        <div className={styles['options']}>
                <PathCategory />
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
                        <select name="" id="" className={styles['options_select_block_variants']}>
                            <option value="value1" selected>16</option>
                            <option value="value2">2</option>
                            <option value="value3">3</option>
                        </select>
                    </div>
                </div>
            </div>
    )
}

export default CatalogueOptions