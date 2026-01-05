import { Link } from 'react-router-dom';
import styles from './style.module.scss'

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu}) => {

    const iconPaths = {
        heart: '../../public/img/icons/Favourites_(Heart_Like).svg',
        cart: '../../public/img/icons/Shopping_bag_(Cart).svg',
    };

    return (
        <div className={`${styles['mobileMenu']} ${isOpen ? styles['is-open'] : ''}`}>
            <div className={styles['mobileMenu_content']}>
                <div className={styles['mobileMenu_content_links']}>
                    <Link to='/' className={`${styles['active']} ${'text_uppercase'}`} onClick={() => {toggleMenu}}>home</Link>
                    <Link to='/phones' className='text_uppercase' onClick={() => {toggleMenu}}>Phones</Link>
                    <Link to='/tablets' className='text_uppercase' onClick={() => {toggleMenu}}>tablets</Link>
                    <Link to='/accessories' className='text_uppercase' onClick={() => {toggleMenu}}>accessories</Link>
                </div>
            </div>
            <div className={styles['mobileMenu_icons']}>
                <div className={`${styles['mobileMenu_icons_block']} ${styles['active']}`}><img src={iconPaths.heart} alt="favorites" /></div>
                <div className={styles['mobileMenu_icons_block']}><img src={iconPaths.cart} alt="Cart" /></div>
            </div>
        </div>
    );
}