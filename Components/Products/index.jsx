import React from 'react';
import './main';
import Image from 'next/image';

const Products = () => {
  return (
    <section className='products' id='products'>
      <h1 className='heading'>
        {' '}
        our <span>products</span>{' '}
      </h1>

      <div className='box-container'>
        <div className='box'>
          <div className='icons'>
            <a href='!#' className='fas fa-shopping-cart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-heart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-eye'>
              {' '}
            </a>
          </div>
          <div className='image'>
            <div
              style={{
                height: '25rem',
                width: '16rem',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              {' '}
              <Image layout='fill' src={`/images/product-1.png`} alt='' />
            </div>
          </div>
          <div className='content'>
            <h3>fresh coffee</h3>
            <div className='stars'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star-half-alt' />
            </div>
            <div className='price'>
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='icons'>
            <a href='!#' className='fas fa-shopping-cart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-heart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-eye'>
              {' '}
            </a>
          </div>
          <div className='image'>
            <div
              style={{
                height: '25rem',
                width: '16rem',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              {' '}
              <Image layout='fill' src={`/images/product-2.png`} alt='' />
            </div>
          </div>
          <div className='content'>
            <h3>fresh coffee</h3>
            <div className='stars'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star-half-alt' />
            </div>
            <div className='price'>
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>

        <div className='box'>
          <div className='icons'>
            <a href='!#' className='fas fa-shopping-cart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-heart'>
              {' '}
            </a>
            <a href='!#' className='fas fa-eye'>
              {' '}
            </a>
          </div>
          <div className='image'>
            <div
              style={{
                height: '25rem',
                width: '16rem',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              {' '}
              <Image layout='fill' src={`/images/product-3.png`} alt='' />
            </div>
          </div>
          <div className='content'>
            <h3>fresh coffee</h3>
            <div className='stars'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star-half-alt' />
            </div>
            <div className='price'>
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
