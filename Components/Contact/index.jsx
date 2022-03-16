import React from 'react';
import './main';

const ContactUs = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='heading'>
        {' '}
        <span>contact</span> us{' '}
      </h1>

      <div className='row'>
        <iframe
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.6665783959916!2d90.46224261382645!3d23.759564096382565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7e243e4a519%3A0xe5e1d8a8d210d8fa!2sTrimohini%20Bazar!5e0!3m2!1sen!2sbd!4v1647427229084!5m2!1sen!2sbd'
          allowFullScreen=''
          loading='lazy'
          title='maps'
        />

        <form action=''>
          <h3>get in touch</h3>
          <div className='inputBox'>
            <span className='fas fa-user' />
            <input type='text' placeholder='name' />
          </div>
          <div className='inputBox'>
            <span className='fas fa-envelope' />
            <input type='email' placeholder='email' />
          </div>
          <div className='inputBox'>
            <span className='fas fa-phone' />
            <input type='number' placeholder='number' />
          </div>
          <input type='submit' value='contact now' className='btn' />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
