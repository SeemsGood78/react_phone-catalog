import styles from './style.module.scss'

const Cart = () => {
    return (
        <div className={styles['cart']}>
            <div className={styles['cart_cardList']}>
                <div className={styles['cart_Card']}>
                    <div className={styles['cart_Card_info']}>
                        <div className={styles['cart_Card_info_close']}><img src='../../../public/img/icons/XMark(gray).svg' alt="Logo" /></div>
                        <div className={styles['cart_Card_info_image']}><img src='../../../public/img/phones/apple-iphone-14/midnight/00.webp' alt="Logo" /></div>
                        <div>Apple iPhone 14 Pro 128GB Silver (MQ023)</div>
                    </div>
                    <div className={styles['cart_Card_controls']}>
                        <div className={styles['cart_Card_controls_buttons']}>
                            {/* Заменить на свг */}
                            <button>-</button>
                            <div>1</div>
                            {/* Заменить на свг */}
                            <button>+</button>
                        </div>
                        <h3>$999</h3>
                    </div>
                </div>
                <div className={styles['cart_Card']}>
                    <div className={styles['cart_Card_info']}>
                        <div className={styles['cart_Card_info_close']}><img src='../../../public/img/icons/XMark(gray).svg' alt="Logo" /></div>
                        <div className={styles['cart_Card_info_image']}><img src='../../../public/img/phones/apple-iphone-14/midnight/00.webp' alt="Logo" /></div>
                        <div>Apple iPhone 14 Pro 128GB Silver (MQ023)</div>
                    </div>
                    <div className={styles['cart_Card_controls']}>
                        <div className={styles['cart_Card_controls_buttons']}>
                            {/* Заменить на свг */}
                            <button>-</button>
                            <div>1</div>
                            {/* Заменить на свг */}
                            <button>+</button>
                        </div>
                        <h3>$999</h3>
                    </div>
                </div>
                <div className={styles['cart_Card']}>
                    <div className={styles['cart_Card_info']}>
                        <div className={styles['cart_Card_info_close']}><img src='../../../public/img/icons/XMark(gray).svg' alt="Logo" /></div>
                        <div className={styles['cart_Card_info_image']}><img src='../../../public/img/phones/apple-iphone-14/midnight/00.webp' alt="Logo" /></div>
                        <div>Apple iPhone 14 Pro 128GB Silver (MQ023)</div>
                    </div>
                    <div className={styles['cart_Card_controls']}>
                        <div className={styles['cart_Card_controls_buttons']}>
                            {/* Заменить на свг */}
                            <button>-</button>
                            <div>1</div>
                            {/* Заменить на свг */}
                            <button>+</button>
                        </div>
                        <h3>$999</h3>
                    </div>
                </div>
            </div>
            <div className={styles['cart_checkout']}>
                <div className={styles['cart_checkout_price']}>
                    <h2>$2657</h2>
                    <span className='text_body gray'>Total for 3 items</span>
                </div>
                <hr />
                <button className='black_button'>Checkout</button>
            </div>
        </div>
    )
}

export default Cart