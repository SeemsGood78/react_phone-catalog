import styles from './style.module.scss'

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer_blocks']}>
                <div className={styles['footer_blocks_image']}><img src='../../../public/img/icons/Logo.svg' alt="Logo" /></div>
                <div className={`${styles.footer_blocks_info} text_uppercase`}>
                    <span>Github</span>
                    <span>Contacts</span>
                    <span>rights</span>
                </div>
                <div className={styles['footer_blocks_buttons']}>
                    <span className='text_small'>Back to top</span>
                    <button><img src='../../../public/img/icons/Arrow(top).svg' alt="ArrowTop" /></button>
                </div>
            </div>
        </footer>
    )
}

export default Footer