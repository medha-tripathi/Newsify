import React, { useState } from 'react';
import "./Signup.scss";
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Signup() {

  const [state, setState] = useState({
    open: true,
    Transition: Fade,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  }
  const history= useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCPassword]=useState("");
  const [error,setError]=useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/signup',{name,email,password,cpassword}).then(res=>{
        if(res.data==='email exists'){
          alert(`Email already exists,
          Redirecting to Login Page`)
          history('/login');
        }
        else if(res.data==='registered'){
          history('/login');
        }
        else if(res.data==='passwords are not matching')
        {
          setError(true)
        }
      });
    }catch(e){
      console.log(e);
    }
    
  }
  return (
    <><div className='maindivsignup'>
    <div className='secondmaindiv'>
    <div className="logintitle w3-animate-zoom">Register to <span>Newsify</span> </div> 
        <div className='login w3-animate-zoom'>
        <div className="name"><i className="fa-solid fa-user fa-2xl mr-3" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow w3-border w3-border-black' type="text" placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}}/></div>
        <div className="name"><i className="fa-solid fa-envelope fa-2xl mr-3" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow w3-border w3-border-black' type="text" placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/></div>
                
            <div className="name"><i className="fa-solid fa-unlock-keyhole fa-2xl mr-3" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow w3-border w3-border-black' type="password" placeholder='Your Password' onChange={(e)=>{setPassword(e.target.value)}}/></div>
                
            <div className="name"><i className="fa-solid fa-key fa-2xl mr-3" style={{color: "#af695c"}}></i>
            <input className='w3-hover-shadow w3-border w3-border-black' type="password" placeholder='Confirm Password' onChange={(e)=>{setCPassword(e.target.value)}}/></div>
            <button onClick={handleSubmit} className='w3-button w3-btn'>Register</button>
            
        </div> <div className="newuser w3-animate-zoom">Already a user??
        <Link to="/login"><button className='signup w3-button w3-btn w3-xlarge'>Login</button></Link>
        </div>
        
    </div>
</div>{
              error && 
              (<>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        
        key={state.Transition.name}
      ><Alert severity="error">Passwords are not matching!!</Alert></Snackbar></>)
            }</>
    
  )
}
