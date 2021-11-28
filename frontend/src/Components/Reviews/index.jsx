import React from 'react';
import './main';
import './reviews.css';

const Reviews = () => {
    return (
        <section className="review" id="review">
            <h1 className="heading">
                {' '}
                customer&apos;s <span>review</span>{' '}
            </h1>

            <div className="box-container">
                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/quote-img.png`}
                        alt=""
                        className="quote"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit
                        libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque
                        laudantium consequuntur iste ex aliquam minus vel? Nemo.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pic-1.png`}
                        className="user"
                        alt=""
                    />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                </div>

                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/quote-img.png`}
                        alt=""
                        className="quote"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit
                        libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque
                        laudantium consequuntur iste ex aliquam minus vel? Nemo.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pic-2.png`}
                        className="user"
                        alt=""
                    />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                </div>

                <div className="box">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/quote-img.png`}
                        alt=""
                        className="quote"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit
                        libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque
                        laudantium consequuntur iste ex aliquam minus vel? Nemo.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/pic-3.png`}
                        className="user"
                        alt=""
                    />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
