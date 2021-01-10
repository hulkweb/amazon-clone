import React from 'react'
import  CurrencyFormat from 'react-currency-format';
import "./Product.css";
import { actiontypes } from './reducer';
import { useStateValue } from './StateProvider';
function Product({id,price,rating,description,img,name}) {
    const [state,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({type:actiontypes.ADD_TO_CART,
            item:{
                id:id,
                name:name,
                price:price,
                rating:rating,
                description:description,
                img:img
            }
        });
    }
    return (
        <div className="Product">
            <p style={{fontWeight:500,fontSize:"20px"}}>{name}</p>
            <p style={{fontWeight:400}}>{description}</p>
            <h4><b> <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></b></h4>
            <div className="rating">
                {rating && Array(rating).fill().map((index,i)=>(
                     <span>&#9734;</span>
                )) }
            
            </div>
           
             <div className="img_container">
               <img src={img} />
             </div>
             <div className="button">
             <button onClick={addToBasket} >Add to cart</button>
             </div>
             
             
        </div>
    )
}

export default Product;
