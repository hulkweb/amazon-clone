import React ,{useState}from 'react'
// import { db } from './firebase';
import './AddProduct.css';
import db from './firebase';
function AddProduct() {
    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [imgUrl, setimgUrl] = useState("");
    const [price, setprice] = useState(0);
    const [rating, setrating] = useState(0);
  const addProduct=(e)=>{
      e.preventDefault();
      if(name!==""){
        db.collection("products").add({
            name:name,
            price:price,
            description:description,
            img:imgUrl,
            rating:rating
        });
      }

  }
    return (
        <div className="AddProduct">
          <form>
              <h1 style={{textAlign:"center"}}>Add Product</h1>
              <input type="text" placeholder="Product Name" value={name} onChange={(e)=>{setname(e.target.value)}} />
              <textarea  value={description} onChange={(e)=>{setdescription(e.target.value)}} >Description</textarea>
              <input type="text" placeholder="Paste image url" value={imgUrl} onChange={(e)=>{setimgUrl(e.target.value)}} />
              price<input type="number" placeholder="enter price" value={price} onChange={(e)=>{setprice(e.target.value)}} />
              <input type="number" placeholder="enter rating" value={rating} onChange={(e)=>{setrating(e.target.value)}} />
              <button onClick={addProduct} type="submit" >Add</button>
          </form>
        </div>
    )
}

export default AddProduct
