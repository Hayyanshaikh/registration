import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';
import { useSelector } from 'react-redux';

const ThemeLayout = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthentic);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
    	navigate('login');
    }else{
	   	navigate('/')
	   }
  }, [isAuthenticated, navigate]);
  return (
    <div className="theme_layout layout">
      {isAuthenticated && <Header />}
      <main>
        <Outlet />
      </main>
      {isAuthenticated && <Footer />}
    </div>
  );
};

export default ThemeLayout;
