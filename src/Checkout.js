import React, {useState}from 'react'
import './Checkout.css';
import chair from './images/chair.jpg';
import p1 from './images/p1.jpg'
import Product from './Product';
import { actiontypes } from './reducer';
import { useStateValue } from './StateProvider';
import  CurrencyFormat from 'react-currency-format';
function Checkout() {
    
    let price=0;
  
    const [{basket,user},dispatch]=useStateValue();
    const removeCart=(id)=>{
        

    //    dispatch({
    //        type:actiontypes.REMOVE_FROM_CART,
    //        id:id
    //    }) ;
    }
    let total=0;
     
     for (let index = 0; index < basket.length; index++) {
        total =total+ basket[index].price;
          
      }
    return (
        <div className="Checkout">

            <div className="Checkout_left">
                <div className="checkout_header">
                  <h1>Shopping Cart</h1>
                  <p>price</p>
                </div>
                {basket? basket.map((item)=>(
                  
                     <div className="Checkout_product">
                     <div className="Checkout_product_img">
                        <img  src={item.img}/>
                     </div>
                     <div className="Checkout_product_info">
                         <h3 style={{textAlign:"left"}} >{item.name}</h3>
                        <p style={{textAlign:"left"}}>{ item.description}</p>
                        <button  style={{float:"left"}} onClick={()=>{dispatch({type:actiontypes.REMOVE_FROM_CART,id:item.id})}}>Remove from cart</button>
                     </div>
                     <h2> <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></h2>
                </div>
                )

                ):<h1>Cart is Empty</h1>}
              
            </div>

            <div className="Checkout_right">
               
                 <p>Total ({basket?.length} Items)  : <b>
                 <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                     </b></p>
                 <p><input type="checkbox" />This order contains gift</p>
                 <button>Proceed to Buy</button>
                 
               
            </div>
        </div>
    )
}

export default Checkout
