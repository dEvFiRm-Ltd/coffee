import React from 'react';
import './hero.css';
import './main';

const Hero = () => {
    return (
        <section
            className="home"
            id="home"
            style={{
                background: `url(${process.env.PUBLIC_URL}/images/home-img.jpeg) no-repeat`,
            }}
        >
            <div className="content">
                <h3>fresh coffee in the morning</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint
                    cupiditate distinctio tempora reiciendis.
                </p>
                <a href="#!" className="btn">
                    get yours now
                </a>
            </div>
        </section>
    );
};

export default Hero;
