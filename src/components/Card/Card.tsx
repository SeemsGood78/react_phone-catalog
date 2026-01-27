import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface CardProps {
    extraClassName?: 'catalogueCard';
    product?: Product;
    showDiscount?: boolean;
}

interface Product {
    id: number;
    category: string;
    itemId: string;
    name: string;
    fullPrice: number;
    price: number;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    year: number;
    image: string;
}

const Card: React.FC<CardProps> = ({ extraClassName, product, showDiscount = false }) => {
    if (!product) {
        return null;
    }

    const imagePath = product.image.startsWith('/') 
        ? product.image 
        : `/${product.image}`;

    const extraClass = extraClassName ? styles.catalogueCard : '';
    const cardClasses = `${styles.card} ${extraClass}`;
    const productLink = `/${product.category}/${product.itemId}`;

    return (
        <>
            <Link to={productLink}>
                <div className={cardClasses}>
                    <div className={styles['card_image']}>
                        <img src={imagePath} alt={product.name} />
                    </div>
                    <div className={styles['card_name']}>{product.name}</div>

                    <div className={styles['card_price']}>
                    {showDiscount ? (
                        <>
                            <h3 className={styles['card_price_current']}>${product.price}</h3>
                            <span className={styles['card_price_full']}>${product.fullPrice}</span>
                        </>
                    ) : (
                        <h3 className={styles['card_price_current']}>${product.fullPrice}</h3>
                    )}
                </div>

                    <hr className={styles['card_separator']} />

                    <div className={styles['card_chars']}>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>Screen</span>
                            <span className='text_small'>{product.screen}</span>
                        </div>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>Capacity</span>
                            <span className='text_small'>{product.capacity}</span>
                        </div>
                        <div className={styles['card_chars_between']}>
                            <span className={styles['card_chars_gray']}>RAM</span>
                            <span className='text_small'>{product.ram}</span>
                        </div>
                    </div>

                    <div>
                        <div className={styles['card_buttons']}>
                            <button className={`${styles.card_buttons_add} black_button`}>
                                Add to cart
                            </button>
                            <button className={styles['card_buttons_fav']}>
                                <img src='/img/icons/Favourites_(Heart_Like).svg' alt="Favorite" />
                            </button>
                        </div>
                    </div>

                </div >
            </Link>
        </>
    )
}

export default Card