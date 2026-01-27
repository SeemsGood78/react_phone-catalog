import styles from './style.module.scss'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className={styles['pagination']}>
            <div className={styles['pagination_block']}>

                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <img
                        src='../../../public/img/icons/Arrow_Left.svg'
                        alt="Previous"
                    />
                </button>


                <div className={styles['pagination_block_numbers']}>
                    {pageNumbers.map(pageNum => (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={currentPage === pageNum ? styles['selected'] : ''}
                            aria-label={`Page ${pageNum}`}
                            aria-current={currentPage === pageNum ? 'page' : undefined}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>


                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    <img
                        src='../../../public/img/icons/Arrow_Right.svg'
                        alt="Next"
                    />
                </button>
            </div>
        </div>
    )
}

export default Pagination