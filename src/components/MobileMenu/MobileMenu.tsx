import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss'

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu}) => {
    const location = useLocation();

    const iconPaths = {
        heart: '../../public/img/icons/Favourites_(Heart_Like).svg',
        cart: '../../public/img/icons/Shopping_bag_(Cart).svg',
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        
        return location.pathname.startsWith(path);
    };

    return (
        <div className={`${styles['mobileMenu']} ${isOpen ? styles['is-open'] : ''}`}>
            <div className={styles['mobileMenu_content']}>
                <div className={styles['mobileMenu_content_links']}>
                    
                     <Link 
                        to='/' 
                        className={`text_uppercase ${isActive('/') ? styles['active'] : ''}`}
                        onClick={toggleMenu}
                    >
                        home
                    </Link>
                    
                    <Link 
                        to='/phones' 
                        className={`text_uppercase ${isActive('/phones') ? styles['active'] : ''}`}
                        onClick={toggleMenu}
                    >
                        Phones
                    </Link>
                    
                    <Link 
                        to='/tablets' 
                        className={`text_uppercase ${isActive('/tablets') ? styles['active'] : ''}`}
                        onClick={toggleMenu}
                    >
                        tablets
                    </Link>
                    
                    <Link 
                        to='/accessories' 
                        className={`text_uppercase ${isActive('/accessories') ? styles['active'] : ''}`}
                        onClick={toggleMenu}
                    >
                        accessories
                    </Link>

                </div>
            </div>
            <div className={styles['mobileMenu_icons']}>

                <Link 
                    to='/favorites'
                    className={`${styles['mobileMenu_icons_block']} ${isActive('/favorites') ? styles['active'] : ''}`}
                    onClick={toggleMenu}
                >
                    <img src={iconPaths.heart} alt="favorites" />
                </Link>
                
                <Link 
                    to='/cart'
                    className={`${styles['mobileMenu_icons_block']} ${isActive('/cart') ? styles['active'] : ''}`}
                    onClick={toggleMenu}
                >
                    <img src={iconPaths.cart} alt="Cart" />
                </Link>

            </div>
        </div>
    );
}