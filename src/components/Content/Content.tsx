import styles from './style.module.scss';
import Carousel from '../Сarousel/Carousel';

const Content = () => {
  return (
    <div className={styles['content_grid']}>
      <section>
        <h1 className={styles['welcome']}>Welcome to Nice Gadgets store!</h1>
      </section>
      <section className={styles['slider']}>
        <button className={styles['slider_left']}>
          <img src='../../../public/img/icons/Arrow_Left.svg' alt="Logo" />
        </button>
        <div className={styles['slider_main']}>
          <picture>
            <source srcSet='../../../public/img/banner_nowAviable.png' media="(min-width: 640px)" />
            <img src='../../../public/img/mobileBanner_nowAviable.png' alt="Aviable" className={styles['slider_main_content']} />
          </picture>
        </div>
        <button className={styles['slider_right']}>
          <img src='../../../public/img/icons/Arrow_Right.svg' alt="Logo" />
        </button>
        <div className={styles['slider_menu']}>
          <div className={styles['slider_menu_item']}><span className={`${styles.slider_menu_item_dash} ${styles.is_active}`}></span></div>
          <div className={styles['slider_menu_item']}><span className={styles['slider_menu_item_dash']}></span></div>
          <div className={styles['slider_menu_item']}><span className={styles['slider_menu_item_dash']}></span></div>
        </div>
      </section>
      <Carousel />
      <section className={styles['category']}>
        <div className={styles['category_label']}><h2>Shop by category</h2></div>
        <div className={styles['category_card']}>
          <div className={styles['category_card_image']}>
            <img src='../../../public/img/Phones.png' alt="Logo" />
          </div>
          <div>
            <div><h4 className={styles['category_card_name']}>Mobile phones</h4></div>
            <div className={styles['category_card_count']}>95 models</div>
          </div>
        </div>
        <div className={styles['category_card']}>
          <div className={styles['category_card_image']}>
            <img src='../../../public/img/Phones.png' alt="Logo" />
          </div>
          <div>
            <div><h4 className={styles['category_card_name']}>Mobile phones</h4></div>
            <div className={styles['category_card_count']}>95 models</div>
          </div>
        </div>
        <div className={styles['category_card']}>
          <div className={styles['category_card_image']}>
            <img src='../../../public/img/Phones.png' alt="Logo" />
          </div>
          <div>
            <div><h4 className={styles['category_card_name']}>Mobile phones</h4></div>
            <div className={styles['category_card_count']}>95 models</div>
          </div>
        </div>
      </section>
      <Carousel />
    </div>
  );
}

export default Content