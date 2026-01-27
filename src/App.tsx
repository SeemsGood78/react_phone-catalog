import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import AccessoriesPage from './pages/AccessoriesPage';
import PhonesPage from './pages/PhonesPage';
import TabletsPage from './pages/TabletsPage';
import NotFoundPage from './pages/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import PhonePage from './pages/PhonePage';

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/phones/:id" element={<PhonePage />} />
        <Route path="/tablets/:id" element={<PhonePage />} />
        <Route path="/accessories/:id" element={<PhonePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
