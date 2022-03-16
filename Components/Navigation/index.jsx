import React from 'react';
import './main';
import Image from 'next/image';

const Navigation = () => {
  return (
    <header className='header'>
      <a href='#!' className='logo' style={{ position: 'relative' }}>
        <Image src={`/images/logo.png`} layout='fill' alt='' />
      </a>

      <nav className='navbar'>
        <a href='#home' className='nav-items'>
          home
        </a>
        <a href='#about' className='nav-items'>
          about
        </a>
        <a href='#menu' className='nav-items'>
          menu
        </a>
        <a href='#products' className='nav-items'>
          products
        </a>
        <a href='#review' className='nav-items'>
          review
        </a>
        <a href='#contact' className='nav-items'>
          contact
        </a>
        <a href='#blogs' className='nav-items'>
          blogs
        </a>
      </nav>

      <div className='icons'>
        {/* <div className="fas fa-search" id="search-btn" /> */}
        <div className='fas fa-shopping-cart' id='cart-btn' />
        <div className='fas fa-bars' id='menu-btn' />
      </div>

      <div className='search-form'>
        <input type='search' id='search-box' placeholder='search here...' />
        <label htmlFor='search-box' className='fas fa-search'>
          {' '}
        </label>
      </div>

      <div className='cart-items-container'>
        <div className='cart-item'>
          <span className='fas fa-times' />
          <div style={{ height: '7rem', width: '7rem', position: 'relative' }}>
            <Image src={`/images/cart-item-1.png`} alt='' layout='fill' />
          </div>
          <div className='content'>
            <h3>cart item 01</h3>
            <div className='price'>$15.99/-</div>
          </div>
        </div>
        <div className='cart-item'>
          <span className='fas fa-times' />
          <div style={{ height: '7rem', width: '7rem', position: 'relative' }}>
            <Image src={`/images/cart-item-2.png`} alt='' layout='fill' />
          </div>
          <div className='content'>
            <h3>cart item 02</h3>
            <div className='price'>$15.99/-</div>
          </div>
        </div>
        <div className='cart-item'>
          <span className='fas fa-times' />
          <div style={{ height: '7rem', width: '7rem', position: 'relative' }}>
            <Image src={`/images/cart-item-3.png`} alt='' layout='fill' />
          </div>
          <div className='content'>
            <h3>cart item 03</h3>
            <div className='price'>$15.99/-</div>
          </div>
        </div>
        <div className='cart-item'>
          <span className='fas fa-times' />
          <div style={{ height: '7rem', width: '7rem', position: 'relative' }}>
            <Image src={`/images/cart-item-4.png`} alt='' layout='fill' />
          </div>
          <div className='content'>
            <h3>cart item 04</h3>
            <div className='price'>$15.99/-</div>
          </div>
        </div>
        <a href='#!' className='btn'>
          checkout now
        </a>
      </div>
    </header>
  );
};

export default Navigation;
