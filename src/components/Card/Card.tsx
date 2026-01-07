import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface CardProps {
    extraClassName?: 'catalogueCard';
}

const Card: React.FC<CardProps> = ({ extraClassName }) => {

    const phone = {
        id: 'Apple-iPhone-11-Pro-Max-64GB-Gold-(iMT9G2FS/A)',
    }

    const extraClass = extraClassName ? styles.catalogueCard : '';

    const cardClasses = `${styles.card} ${extraClass}`;

    return (
        <>
            <Link to={`/phones/${encodeURIComponent(phone.id)}`}>
                <div className={cardClasses}>
                    <div className={styles['card_image']}>
                        <img src='../../../public/img/phones/apple-iphone-14/midnight/00.webp' alt="Logo" />
                    </div>
                    <div className={styles['card_name']}>Apple iPhone 14 Pro 128GB Silver (MQ023)</div>
                    <div className={styles['card_price']}><h3>$999</h3></div>
                    <hr className={styles['card_separator']} />
                    <div className={styles['card_chars']}>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>Screen</span>
                            <span className='text_small'>6.1” OLED</span>
                        </div>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>Capacity</span>
                            <span className='text_small'>128 GB</span>
                        </div>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>RAM</span>
                            <span className='text_small'>6 GB</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles['card_buttons']}>
                            <button className={`${styles.card_buttons_add} black_button`}>Add to cart</button>
                            <button className={styles['card_buttons_fav']} >
                                <img src='../../../public/img/icons/Favourites_(Heart_Like).svg' alt="Logo" />
                            </button>
                        </div>
                    </div>
                </div >
            </Link>
        </>
    )
}

export default Card