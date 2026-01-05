import Card from '../Card/Card';
import styles from './style.module.scss';

const Carousel = () => {

    return (
        <section className={styles['modelCatalog']}>
            <div className={styles['modelCatalog_label']}>
                <div><h2>Brand new models</h2></div>
                <div className={styles['modelCatalog_label_buttons']}>
                    <button className={styles['modelCatalog_label_buttons_arrow']}><img src='../../../public/img/icons/Arrow_Left.svg' alt="Logo" /></button>
                    <button className={styles['modelCatalog_label_buttons_arrow']}><img src='../../../public/img/icons/Arrow_Right.svg' alt="Logo" /></button>
                </div>
            </div>
            <div className={styles['modelCatalog_carousel']}>
                <div className={styles['modelCatalog_carousel_list']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Carousel