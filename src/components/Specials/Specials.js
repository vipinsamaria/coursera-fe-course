import React from 'react';
import img1 from "./../../images/greek salad.jpg";
import img2 from "./../../images/bruchetta.svg";
import img3 from "./../../images/lemon dessert.jpg";
import Card from '../Card/Card';
import Button from '../Button/Button';
import "./Specials.css";


const card_data = [
    {
      title: "Greek Salad",
      ingredients:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
      price: "12.99",
      image: img1,
    },
    {
      title: "Burchetta",
      ingredients:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
      price: "5.99",
      image: img2,
    },
    {
      title: "Lemon Desert",
      ingredients:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit architecto molestias error ullam similique rem neque ipsa obcaecati inventore explicabo.",
      price: "5.00",
      image: img3,
    },
];

const Specials = () => {
  return (
    <>
        <div className='specials_container'>
            <div className='specials_row1'>
                <div>
                    <h1 className='specials_title'>This weeks specials!</h1>
                </div>
                <div>
                    <Button title="Online Menu" link="/orderonline" />
                </div>
            </div>
            <div className='specials_row2'>
                {card_data.map((data,idx) => {
                    return (
                        <div key={idx} className='specials_card'>
                            <Card  
                                title={data.title}
                                image={data.image}
                                price={data.price}
                                ingredients={data.ingredients}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    </>
  )
}

export default Specials
