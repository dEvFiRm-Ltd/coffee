import React from 'react';
import './main';
import Image from 'next/image';

const Team = () => {
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>
        {' '}
        our <span>menu</span>{' '}
      </h1>

      <div className='box-container'>
        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-1.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-2.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-3.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-4.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-5.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <div
            style={{
              height: '10rem',
              width: '10rem',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            {' '}
            <Image layout='fill' src={`/images/menu-6.png`} alt='' />
          </div>
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
