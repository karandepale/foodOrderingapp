import React , { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import { CartContext } from './Menu';
import "./Cart.css";
import { Box } from '@mui/system';

function CardDetail(props) {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')));
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice(cartData);
  }, [cartData]);

  const handleAmountChange = (id, amount) => {
    const updatedCartData = cartData.map(item => {
      if (item.id === id) {
        item.amount = amount;
      }
      return item;
    });
    setCartData(updatedCartData);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    calculateTotalPrice(updatedCartData);
  };
  
  const handleRemove = (id) => {
    const updatedCartData = cartData.filter(item => item.id !== id);
    setCartData(updatedCartData);
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    calculateTotalPrice(updatedCartData);
  };
  
  const calculateTotalPrice = (cartData) => {
    let totalPrice = 0;
    cartData.forEach(item => {
      totalPrice += item.amount * item.price;
    });
    setTotalPrice(totalPrice);
  };
  
  return (
    <React.Fragment>
      <Layout>
        <Box sx={{minHeight:"445px"}} >
          {cartData?.length > 0 && cartData.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <div>
                <button onClick={() => handleAmountChange(item.id, item.amount + 1)}>+</button>
                <button>{item?.amount}</button>
                <button onClick={() => handleAmountChange(item.id, item.amount - 1)}>-</button>
              </div>
              <div>
                <span>{item.price*item.amount}</span>
                <button className='remoevBtn' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
          {totalPrice==0 ?
            <div className='mymaindiv'>
            <Link to="/Menu"  >
                <button className="AddToCartButton"> ORDER  NOW </button>
            </Link>
            </div>
            :
           <h3>Total Price of your Cart: {totalPrice}</h3>
          }
            
          </div>
        </Box>
      </Layout> 
    </React.Fragment>
  )
}

export default CardDetail;
