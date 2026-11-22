import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import Catalog from './features/Catalog/Catalog.tsx';
import Cart from './features/Cart/Cart.tsx';
import Profile from './features/Profile/Profile.tsx';
import Layout from './features/Auth/Layout.tsx';
import Register from './features/Auth/Register/Register.tsx';
import Login from './features/Auth/Login/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
