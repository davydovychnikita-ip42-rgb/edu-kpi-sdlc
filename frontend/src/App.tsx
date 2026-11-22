import { Outlet, useNavigate } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useEffect } from 'react'
import { useAppSelector } from './app/hooks'

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }
    navigate('/login');
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
