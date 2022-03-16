import React from 'react';
import './main';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section className='review' id='review'>
      <h1 className='heading'>
        {' '}
        customer&apos;s <span>review</span>{' '}
      </h1>

      <div className='box-container'>
        <div className='box' style={{ position: 'relative' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <div className='user' style={{ position: 'relative' }}>
            <Image src={`/images/pic-1.png`} layout='fill' alt='' />
          </div>
          <h3>john deo</h3>
          <div className='stars'>
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star-half-alt' />
          </div>
        </div>

        <div className='box' style={{ position: 'relative' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <div className='user' style={{ position: 'relative' }}>
            <Image src={`/images/pic-2.png`} layout='fill' alt='' />
          </div>
          <h3>john deo</h3>
          <div className='stars'>
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star-half-alt' />
          </div>
        </div>

        <div className='box' style={{ position: 'relative' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <div className='user' style={{ position: 'relative' }}>
            <Image src={`/images/pic-3.png`} layout='fill' alt='' />
          </div>
          <h3>john deo</h3>
          <div className='stars'>
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star-half-alt' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
