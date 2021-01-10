import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";
function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history =useHistory();

    const login=()=>{auth.signInWithEmailAndPassword(email,password).then((user)=>{
        if(user){
            history.push("/")
    
         }
    }).catch((Err)=>{
        alert(Err.message);
    })
    };
  const create= ()=>{
 auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
     console.log(auth)
     if(auth){
        history.push("/")

     }
 }).catch((err)=>{
     alert(err.message);
 })
  }
  
    
    return (
        <div className="Login">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDYcT9m8NNawZhW6bm8QJzwZcUmNNDtRxdg&usqp=CAU"/>
            <div className="container">
         
                 <h1 style={{margin:0,textAlign:"center"}}>Login</h1>
                 <input type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                 <input type="password" placeholder="Password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                 <button className="submit" onClick={login}>Log In</button>
                
                 <button onClick={create}>Create New Account</button>
            </div>
           

        </div>
    )
}

export default Login
