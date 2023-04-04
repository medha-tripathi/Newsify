import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:3000/',{email,password}).then(res=>{
      if(res.data==='matched')
      {
        history('/');
      }
      else if(res.data==='not exists'){
        alert('REgister first')
        history('/signup');
      }
      else if(res.data==='wrong password'){
        alert('Wrong password!');
      }
      })
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className='maindivlogin backdrop-brightness-125'>
        <div className='secondmaindiv'>
        <div className="logintitle w3-animate-zoom">Login To <span> Newsify</span></div> 
            <div className='login w3-animate-zoom'>
            <div className="name"><i className="fa-solid fa-envelope fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="text" placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/></div>
                
            <div className="name"><i className="fa-solid fa-unlock-keyhole fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="password" placeholder='Your Password' onChange={(e)=>{setPassword(e.target.value)}}/></div>
                            
                <button className='w3-button w3-btn w3-animate-zoom' onClick={handleSubmit}>Login</button>
                OR
                <div className='loginicons '>
                    <button className='w3-button w3-btn w3-animate-zoom'><i className="fa-brands fa-google"></i></button>
                    <button className='w3-button w3-btn w3-animate-zoom'><i className="fa-brands fa-twitter"></i></button>
                    <button className='w3-button w3-btn w3-animate-zoom'><i className="fa-brands fa-facebook-f"></i></button>
                </div>
            </div> <div className="newuser w3-animate-zoom">New To Newsify??
            <a href="/signup"><button className='signup w3-button w3-btn'>SignUp</button></a>
            
            </div>
            
        </div>
    </div>
  )
}
