import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.scss'
import React from 'react';

const BREADCRUMB_LABELS: Record<string, string> = {
    'phones': 'Phones',
    'tablets': 'Tablets',
    'accessories': 'Accessories'
};

const TITLE_LABELS: Record<string, string> = {
    'phones': 'Mobile phones',
    'tablets': 'Tablets',
    'accessories': 'Accessories'
};

const PathCategory = () => {
    const location = useLocation();

    const pathSegments = location.pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const to = '/' + pathSegments.slice(0, index + 1).join('/');

        const label = BREADCRUMB_LABELS[segment.toLowerCase()] ||
            (segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '));

        return { to, label, rawSegment: segment.toLowerCase() };
    });

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

    const lastSegment = breadcrumbs[breadcrumbs.length - 1];
    const h1Title = lastSegment
        ? (TITLE_LABELS[lastSegment.rawSegment] || lastSegment.label)
        : '';

    return (
        <div className='full_width'>
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
            {h1Title && (
                <div className={styles['icons_label']}>
                    <h1>{h1Title}</h1>
                    <span className="text_small">95 models</span>
                </div>
            )}
        </div>
    );
};

export default PathCategory;