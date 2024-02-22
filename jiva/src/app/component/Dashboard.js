import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import GoogleSignInButton from "./google";
import logo from './61802.jpg'
import { FaHeartbeat } from 'react-icons/fa';

function FirstPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="text-center rounded" style={{backgroundColor :'rgb(7, 59, 26)', padding : 35}}>
      <div>
          <FaHeartbeat size={38} color='#f50'  />
        </div>
  
        <h2 style={{ fontSize: '25px', padding :'5px', fontStyle : 'italic', color :'rgb(210, 232, 35)' }}>Svastha!</h2>
        <p style={{ fontSize: '20px', fontStyle : 'italic', color :'rgb(210, 232, 35)' }}> Welcome to our app</p>
        
        
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text " style={{color :'wheat',fontSize :'12px'}}>We'll use this email to send information about your Health.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div style = {{paddingBottom : 8,paddingTop : 10}}>
          <button style={{
    backgroundColor: 'orange', 
    border: 'none',
    color: 'black',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '25px',
    padding: '10px 24px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
}}>
    Sign Up
</button>

          </div>
        </form>
        <h6 style = {{color :'white'}}> Or</h6>

        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default FirstPage;
