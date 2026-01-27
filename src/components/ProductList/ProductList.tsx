import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import CatalogueOptions from '../CatalogueOptions/CatalogueOptions';
import Pagination from '../Pagination/Pagination';
import styles from './style.module.scss';

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

const ProductList = () => {
    const location = useLocation();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);

    const category = location.pathname.slice(1);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('/api/products.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const allProducts: Product[] = await response.json();

                const filteredProducts = allProducts.filter(
                    product => product.category === category
                );

                setProducts(filteredProducts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);


    if (loading) {
        return (
            <div className="container">
                <p>Loading {category}...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>
                    Try again
                </button>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="container">
                <p>No {category} available yet</p>
            </div>
        );
    }

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    return (
        <div>
            <CatalogueOptions 
                totalProducts={products.length}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={(newValue) => {
                    setItemsPerPage(newValue);
                    setCurrentPage(1);
                }}
            />

            <div className={styles['catalogue']}>
                {currentProducts.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                        extraClassName="catalogueCard"
                        showDiscount={true}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ProductList;