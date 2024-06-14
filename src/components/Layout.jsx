import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './layout.css';
import { useSelector } from 'react-redux';
import { selectImage } from '../redux/imageSlice'; // Adjust the import path as needed

const Layout = () => {
  const image = useSelector(selectImage); // Use the selector to access the image URL

  return (
    <div>
      <Navbar />
      <div className="container">
        <svg className="mockup-phone" xmlns="http://www.w3.org/2000/svg" width="308" height="632" viewBox="0 0 308 632">
          <defs>
            <clipPath id="circleView">
              <circle cx="153.5" cy="112" r="48"/>
            </clipPath>
          </defs>
          <path stroke="#737373" fill="none" d="M1 54.5C1 24.953 24.953 1 54.5 1h199c29.547 0 53.5 23.953 53.5 53.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523z"/>
          <path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24c6.351 0 11.5 5.149 11.5 11.5 0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195c-24.577 0-44.5-19.923-44.5-44.5v-521z"/>
          <circle cx="153.5" cy="112" r="48" fill="#EEE"/>
          {image && (
            <image href={image} x="105.5" y="64" width="96" height="96" clipPath="url(#circleView)"/>
          )}
          <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8"/>
          <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4"/>
          <rect width="237" height="44" x="35" y="278" fill="#333333" rx="8"/>
          <rect width="237" height="44" x="35" y="342" fill="#FF3939" rx="8"/>
          <rect width="237" height="44" x="35" y="406" fill="#633CFF" rx="8"/>
          <rect width="237" height="44" x="35" y="470" fill="#737373" rx="8"/>
          <rect width="237" height="44" x="35" y="534" fill="#BEADFF" rx="8"/>
        </svg>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
