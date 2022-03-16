import React from 'react';
import './main';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='about' id='about'>
      <h1 className='heading'>
        {' '}
        <span>about</span> us{' '}
      </h1>

      <div className='row'>
        <div className='image'>
          <Image src={`/images/about-img.jpeg`} layout='fill' alt='' />
        </div>

        <div className='content'>
          <h3>what makes our coffee special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
            ratione a officiis id temporibus autem? Quod nemo facilis
            cupiditate. Ex, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
          </p>
          <a href='#!' className='btn'>
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
