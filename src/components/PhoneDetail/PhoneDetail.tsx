import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Carousel from '../Сarousel/Carousel';
import styles from './style.module.scss';

interface ProductDetail {
    id: string;
    category: string;
    namespaceId: string;
    name: string;
    capacityAvailable: string[];
    capacity: string;
    priceRegular: number;
    priceDiscount: number;
    colorsAvailable: string[];
    color: string;
    images: string[];
    description: {
        title: string;
        text: string[];
    }[];
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera?: string;
    zoom?: string;
    cell: string[];
}

const PhoneDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const loadProduct = async () => {
            if (!id) return;

            setLoading(true);
            setError(false);

            try {
                const pathParts = location.pathname.split('/');
                const category = pathParts[1];

                const response = await fetch(`/api/${category}.json`);

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const data: ProductDetail[] = await response.json();

                const foundProduct = data.find(item => item.id === id);

                if (foundProduct) {
                    setProduct(foundProduct);
                    setSelectedImage(0);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Error loading product:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id, location.pathname]);

    const handleColorChange = (color: string) => {
        if (!product) return;

        const normalizeColor = (c: string) => c.toLowerCase().replace(/\s+/g, '-');

        const currentColorInUrl = normalizeColor(product.color);
        const newColorInUrl = normalizeColor(color);

        const newId = product.id.replace(currentColorInUrl, newColorInUrl);
        navigate(`/${product.category}/${newId}`);
    };

    const handleCapacityChange = (capacity: string) => {
        if (!product) return;

        const normalizeCapacity = (c: string) => c.toLowerCase().replace(/\s+/g, '');

        const currentCapacity = normalizeCapacity(product.capacity);
        const newCapacity = normalizeCapacity(capacity);

        const newId = product.id.replace(currentCapacity, newCapacity);
        navigate(`/${product.category}/${newId}`);
    };

    const getColorHex = (colorName: string): string => {
        const colorMap: { [key: string]: string } = {
            'black': '#000000',
            'white': '#FFFFFF',
            'gold': '#FFD700',
            'silver': '#C0C0C0',
            'spacegray': '#5F5F5F',
            'space gray': '#5F5F5F',
            'green': '#4CAF50',
            'yellow': '#FFEB3B',
            'purple': '#9C27B0',
            'red': '#F44336',
            'blue': '#2196F3',
            'pink': '#E91E63',
            'midnight': '#191970',
            'starlight': '#F5F5DC',
            'graphite': '#4C4C4C',
            'rose': '#FFB6C1',
            'coral': '#FF7F50',
        };

        const normalized = colorName.toLowerCase().replace(/\s+/g, '');
        return colorMap[normalized] || colorMap[colorName.toLowerCase()] || '#CCCCCC';
    };

    if (loading) {
        return <div className={styles['phone']}>Loading...</div>;
    }

    if (error || !product) {
        return (
            <div className={styles['phone']}>
                <h2>Product was not found</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className='content_grid'>
            <div className={styles['phone']}>
                <div className={styles['top']}>
                    <div className={styles['gallery']}>
                        <div className={styles['gallery_thumbnails']}>
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={`/${image}`}
                                    alt={`${product.name} view ${index + 1}`}
                                    onClick={() => setSelectedImage(index)}
                                    className={selectedImage === index ? styles['thumbnail_active'] : ''}
                                />
                            ))}
                        </div>
                        <div className={styles['gallery_mainImage']}>
                            <img
                                src={`/${product.images[selectedImage]}`}
                                alt={product.name}
                            />
                        </div>
                    </div>

                    <div className={styles['info']}>
                        <div className={styles['options']}>
                            <div className={styles['options_block']}>
                                <div className={styles['options_block_header']}>
                                    <span className={`${styles['options_block_label']} text_small`}>
                                        Available colors
                                    </span>
                                    <span className={`${styles['options_block_idText']} text_small`}>
                                        ID: {product.id}
                                    </span>
                                </div>
                                <div className={styles['options_block_colors']}>
                                    {product.colorsAvailable.map((color) => {
                                        const normalizeForCompare = (c: string) => c.toLowerCase().replace(/\s+/g, '');
                                        const isActive = normalizeForCompare(color) === normalizeForCompare(product.color);

                                        return (
                                            <button
                                                key={color}
                                                className={
                                                    isActive
                                                        ? styles['options_block_colors_btnActive']
                                                        : styles['options_block_colors_btn']
                                                }
                                                onClick={() => handleColorChange(color)}
                                            >
                                                <span
                                                    className={styles['options_block_colors_circle']}
                                                    style={{ backgroundColor: getColorHex(color) }}
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <hr className={styles['divider']} />

                            <div className={styles['options_block']}>
                                <p className={`${styles['options_block_label']} text_small`}>
                                    Select capacity
                                </p>
                                <div className={styles['options_block_capacity']}>
                                    {product.capacityAvailable.map((cap) => (
                                        <button
                                            key={cap}
                                            className={
                                                cap === product.capacity
                                                    ? styles['options_block_capacity_btnActive']
                                                    : styles['options_block_capacity_btn']
                                            }
                                            onClick={() => handleCapacityChange(cap)}
                                        >
                                            {cap}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <hr className={styles['divider']} />
                        </div>

                        <div className={styles['actions']}>
                            <div className={styles['actions_priceBlock']}>
                                <h2 className={styles['actions_priceBlock_current']}>
                                    ${product.priceDiscount}
                                </h2>
                                <span className={styles['actions_priceBlock_old']}>
                                    ${product.priceRegular}
                                </span>
                            </div>
                            <div className={styles['actions_buttons']}>
                                <button className={styles['actions_buttons_add']}>
                                    Add to cart
                                </button>
                                <button className={styles['actions_buttons_favorite']}>
                                    <img
                                        src='/img/icons/Favourites_(Heart_Like).svg'
                                        alt="favorites"
                                    />
                                </button>
                            </div>
                        </div>

                        <div className={styles['specs']}>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Screen</span>
                                <span className='text_body'>{product.screen}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Resolution</span>
                                <span className='text_body'>{product.resolution}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Processor</span>
                                <span className='text_body'>{product.processor}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>RAM</span>
                                <span className='text_body'>{product.ram}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles['bottom']}>
                    <div className={styles['about']}>
                        <h3>About</h3>
                        <hr className={styles['divider_full']} />

                        {product.description.map((section, index) => (
                            <div key={index} className={styles['about_section']}>
                                <h4 className={styles['about_subtitle']}>{section.title}</h4>
                                {section.text.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={styles['about_text']}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className={styles['specs_full']}>
                        <h3>Tech specs</h3>
                        <hr className={styles['divider_full']} />
                        <div className={styles['specs_gap']}>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Screen</span>
                                <span className='text_body'>{product.screen}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Resolution</span>
                                <span className='text_body'>{product.resolution}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Processor</span>
                                <span className='text_body'>{product.processor}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>RAM</span>
                                <span className='text_body'>{product.ram}</span>
                            </div>
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Built in memory</span>
                                <span className='text_body'>{product.capacity}</span>
                            </div>
                            {product.camera && (
                                <div className={styles['specs_row']}>
                                    <span className={`${styles['specs_label']} text_body`}>Camera</span>
                                    <span className='text_body'>{product.camera}</span>
                                </div>
                            )}
                            {product.zoom && (
                                <div className={styles['specs_row']}>
                                    <span className={`${styles['specs_label']} text_body`}>Zoom</span>
                                    <span className='text_body'>{product.zoom}</span>
                                </div>
                            )}
                            <div className={styles['specs_row']}>
                                <span className={`${styles['specs_label']} text_body`}>Cell</span>
                                <span className='text_body'>{product.cell.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                title="You may also like"
                type="recommendations"
                currentProductId={product.id}
                currentCategory={product.category}
            />
        </div>
    );
};

export default PhoneDetail;