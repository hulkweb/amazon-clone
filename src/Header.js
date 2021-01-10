import { Search, ShoppingBasket } from '@material-ui/icons';
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import house from './amazon-logo.jpg';
import { auth } from './firebase';
import './Header.css';
import { actiontypes } from './reducer';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const searchHandle=()=>{

    }
   useEffect(() => {
       
       auth.onAuthStateChanged((authUser)=>{
           console.log(authUser);
           dispatch({type:actiontypes.SET_USER,
        user:authUser});
       })
   }, []);
   const signout= ()=>{
       auth.signOut().then((res)=>{
        dispatch({type:actiontypes.SET_USER,
            user:null});
       })
   }
    return (
        <div className="Header">
            <div className="header_left">
               <Link to="/">
               <img src={house}/>
               </Link> 
                <div className="header_option">
                  
                  <p> {user?.email}</p>
                </div>
            </div>
        
            <div className="header_center">
               {/* <form> */}
                   <input placeholder="" type="text"  />
                
                   <button onClick={searchHandle} ><Search/></button>
               {/* </form> */}
            </div>
            <div className="header_right">
               <div className="header_option">
                   <span>Hello ,{user?<span onClick={signout} >Logout</span>:<Link to="/login">Sign In</Link>}</span>
                   <p>Accounts & lists</p>
               </div>
               <div className="header_option">
                   <span>Returns</span>
                   <p> & Orders</p>
               </div>
               <div className="header_option">
               <span>{basket?basket.length : 0 }</span>
               <Link to="/checkout">
               <ShoppingBasket/>
               </Link>
                  
                
               </div>
            </div>
        </div>
    )
}

export default Header
