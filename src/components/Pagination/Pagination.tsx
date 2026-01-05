import styles from './style.module.scss'

const Pagination = () => {
    return (
        <div className={styles['pagination']}>
            <div className={styles['pagination_block']}>
                <button><img src='../../../public/img/icons/Arrow_Left.svg' alt="Logo" /></button>
                <div className={styles['pagination_block_numbers']}>
                    <button>1</button>
                    <button className={styles['selected']}>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
                <button><img src='../../../public/img/icons/Arrow_Right.svg' alt="Logo" /></button>
            </div>
        </div>
    )
}

export default Pagination