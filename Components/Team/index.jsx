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
          <Image src={`${process.env.PUBLIC_URL}/images/menu-1.png`} alt='' />
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <Image src={`${process.env.PUBLIC_URL}/images/menu-2.png`} alt='' />
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <Image src={`${process.env.PUBLIC_URL}/images/menu-3.png`} alt='' />
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <Image src={`${process.env.PUBLIC_URL}/images/menu-4.png`} alt='' />
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <Image src={`${process.env.PUBLIC_URL}/images/menu-5.png`} alt='' />
          <h3>tasty and healty</h3>
          <div className='price'>
            $15.99 <span>20.99</span>
          </div>
          <a href='#!' className='btn'>
            add to cart
          </a>
        </div>

        <div className='box'>
          <Image src={`${process.env.PUBLIC_URL}/images/menu-6.png`} alt='' />
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
