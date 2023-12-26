import React from 'react';
import restaurant from "../../images/restaurant.jpg";

const About = () => {
  return (
    <div className='about_main'>
        <div className='about_container'>
            <div className='about_container_item1'>
                <h2>Welcome to Little Lemon</h2>
                <p>
                    A cozy and charming restaurant featuring delicious Italian-inspired
                    dishes. Our menu includes a variety of pasta, seafood, and meat dishes,
                    as well as an extensive wine list. We also offer online ordering and
                    reservations for your convenience. Come visit us and experience the
                    taste of Italy at Little Lemon.
                </p>
            </div>
            <div className='about_container_item2'>
                <img
                    src={restaurant}
                    alt="restaurant image"
                    className='restaurant_img'
                />
            </div>
        </div>
    </div>
  )
}

export default About