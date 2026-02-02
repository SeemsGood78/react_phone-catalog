import Favorites from '../components/Favorites/Favorites';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import PathCategory from '../components/PathCategory/PathCategory';
import { useFavoritesStore } from '../store/Favoritesstore';

const FavoritesPage = () => {
  const totalItems = useFavoritesStore((state) => state.getTotalItems());

  return (
    <div className="layout">
      <Header />
      <div className="container">
        <PathCategory totalProducts={totalItems} />
        <Favorites />
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;