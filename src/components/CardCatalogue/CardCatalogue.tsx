import Card from "../Card/Card"
import styles from './style.module.scss';

const CardCatalogue = () => {
    return (
        <>
            <div className={styles['catalogue']}>
                <Card extraClassName="catalogueCard" />
                <Card extraClassName="catalogueCard" />
                <Card extraClassName="catalogueCard" />
                <Card extraClassName="catalogueCard" />
                <Card extraClassName="catalogueCard" />
                <Card extraClassName="catalogueCard" />
            </div>
        </>
    )
}

export default CardCatalogue