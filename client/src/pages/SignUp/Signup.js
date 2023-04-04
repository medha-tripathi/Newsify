import React, { useState } from 'react';
import "./Signup.scss";
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

export default function Signup() {
  const history= useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCPassword]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:3000/signup',{name,email,password,cpassword}).then(res=>{
        if(res.data==='email exists'){
          alert(`Email already exists,
          Redirecting to Login Page`)
          history('/login');
        }
        else if(res.data==='registered'){
          history('/');
        }
        else if(res.data==='passwords are not matching')
        {
          alert('both passwords are not matching')
        }
      });
    }catch(e){
      console.log(e);
    }
    
  }
  return (
    <div><div className='maindivsignup'>
    <div className='secondmaindiv'>
    <div className="logintitle w3-animate-zoom">Register to <span>Newsify</span> </div> 
        <div className='login w3-animate-zoom'>
        <div className="name"><i className="fa-solid fa-user fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="text" placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}}/></div>
        <div className="name"><i className="fa-solid fa-envelope fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="text" placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/></div>
                
            <div className="name"><i className="fa-solid fa-unlock-keyhole fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="password" placeholder='Your Password' onChange={(e)=>{setPassword(e.target.value)}}/></div>
                
            <div className="name"><i className="fa-solid fa-key fa-2xl" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow' type="text" placeholder='Confirm Password' onChange={(e)=>{setCPassword(e.target.value)}}/></div>
            <button onClick={handleSubmit} className='w3-button w3-btn'>Register</button>
            
        </div> <div className="newuser w3-animate-zoom">Already a user??
        <a href="/login"><button className='signup w3-button w3-btn'>Login</button></a>
        </div>
        
    </div>
</div></div>
  )
}
