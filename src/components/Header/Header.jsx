import React from 'react';
import {ReactComponent as Logo} from '../../assets/new logo.svg';
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='menu'>
        <Link className='navLink' to='/'>
          <div className='navLinkText active'>
            Главная
          </div>
        </Link>
        <Link className='navLink' to='/analytics'>
          <div className='navLinkText'>
            Аналитика
          </div>
        </Link>
      </div>
      <div className='user'>
        <img className='userPic' alt='user' src='https://i.imgur.com/5SQ91i8.png' />
      </div>
    </header>
  );
};

export default Header;
