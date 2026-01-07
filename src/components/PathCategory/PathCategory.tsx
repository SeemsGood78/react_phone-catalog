import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss'
import React from 'react';

const TITLE_LABELS: Record<string, string> = {
    'phones': 'Mobile phones',
};

const PathCategory = () => {
    const location = useLocation();

    const pathSegments = location.pathname.split('/').filter(segment => segment);

    const isCart = pathSegments[0] === 'cart';
    const isProductPage = pathSegments.length >= 2;
    const showModelsCount = pathSegments.length === 1 && !isCart;
    const showBackButton = isCart || isProductPage;
    const showBreadcrumbs = !isCart;

    const breadcrumbs = pathSegments.map((segment, index) => {
        const to = '/' + pathSegments.slice(0, index + 1).join('/');
        const label = (segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '));
        return { to, label, rawSegment: segment.toLowerCase() };
    });

    const lastSegment = breadcrumbs[breadcrumbs.length - 1];
    const h1Title = lastSegment
        ? (TITLE_LABELS[lastSegment.rawSegment] || lastSegment.label)
        : '';

    const HomeIcon = (
        <Link to="/" className={styles.homeLink}>
            <img
                src='./../..//public/img/icons/Home.svg'
                alt="Home"
            />
        </Link>
    );

    const Separator = (
        <img
            src='./../..//public/img/icons/Arrow_Right(Gray).svg'
            alt="Arrow_Right"
        />
    );

    return (
        <div className='full_width'>
            {showBreadcrumbs && (
                <div className={styles['icons']}>
                    {HomeIcon}
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={breadcrumb.to}>
                            {Separator}
                            {index === breadcrumbs.length - 1 ? (
                                <span className='text_small'>{breadcrumb.label}</span>
                            ) : (
                                <Link to={breadcrumb.to} className='text_small'>
                                    {breadcrumb.label}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}

            {showBackButton && (
                <div className={styles['icons_back']}>
                    <img src='/img/icons/Arrow_Left.svg' alt="Back" />
                    <span className='text_small'>Back</span>
                </div>
            )}

            {h1Title && (
                <div className={styles['icons_label']}>
                    {pathSegments.length >= 2 ? (
                        <h2>{h1Title}</h2>
                    ) : (
                        <h1>{h1Title}</h1>
                    )}
                    {showModelsCount && (
                        <span className="text_small">95 models</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default PathCategory;