import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <>
        <div className='card_main'>
            <img
                src={props.image}
                alt="food image"
                className='card_img'
            />
            <div className='card_desc_row1'>
                <div className='card_col1'>
                    <h2>{props.title}</h2>
                </div>
                <div className='card_col2'>
                    <h3>${props.price}</h3>
                </div>
            </div>
            <div className='card_desc_row2'>
                <p>{props.ingredients}</p>
            </div>
        </div>
    </>
  )
}

export default Card