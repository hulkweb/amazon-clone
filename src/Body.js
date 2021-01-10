// import { Carousel } from 'bootstrap'
import { Carousel } from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import Product from './Product'
import './Body.css';
import chair from './images/chair.jpg';
import p1 from './images/p1.jpg'
import  db  from './firebase';

function Body() {


  const [products, setproducts] = useState([]);
  useEffect(() => {
    db.collection("products").onSnapshot((spapshot)=>setproducts(spapshot.docs.map((doc)=>(doc.data()))));

  
  
  }, [])
  console.log(products);
    return (
        <div className="Body">
           <div className="crousel">
 

           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_np._CB411102619_.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02s/PriceUnveil/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600_3._CB411536580_.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>  
            <div className="item_slider">
            <div className="product_slider">
              
              {products?.map((product,i)=>(<Product
              key={i}
                 price={product.price}
                 rating={product.rating} 
                 description={product.description}
                 img={product.img}
                 name={product.name}
                 id={i}
              />))}
            </div>
            <div className="product_slider">
           
            </div>
            </div>
            
        </div>
     
    )
}

export default Body
