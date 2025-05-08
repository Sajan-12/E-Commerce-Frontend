import React, { useState } from "react";
import "./CSS/SignupLogin.css";
const SignupLogin=function(){
   const [state,setState]=useState('Login');
   const [formData,setFormData]=useState({
     username:"",email:"",password:""
   });
   function onChangeHandler(e){
      setFormData({...formData,[e.target.name]:e.target.value})
   }
   const login=async()=>{
      console.log(formData);
     
      const response=await fetch('http://localhost:4000/login',{
         method:'POST',
         headers:{
            Accept:'Application/json',
            'Content-Type':'Application/json'
         },
         body:JSON.stringify(formData)
      });
      const responseData=await response.json();
      if(responseData.success){
         localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
      }
      else{
         alert(responseData.msg||'Login Failed');
      }
      
   }
   const signup=async()=>{
      console.log(formData);
      let responseData;
      await fetch('http://localhost:4000/signup',{
         method:'POST',
         headers:{
            Accept:'Application/json',
            'Content-Type':'Application/json'
         },
         body:JSON.stringify(formData)
      }).then((resp)=>resp.json()).then((data)=>responseData=data);
      if(responseData.success){
         setState('Login');
      }
      else{
         alert(responseData.msg||'Signup Failed');
      }
   }
 return (
    <div className="loginsignup">
      <div className="loginsignup-container">
         <h1>{state}</h1>
         <div className="loginsignup-fields">
            {(state==='Sign Up')? <input name="username" value={formData.username} onChange={onChangeHandler} type="text" placeholder="Your Name" />:<></>}
            <input name='email' value={formData.email} onChange={onChangeHandler} type="email" placeholder="Your Email" />
            <input name='password' value={formData.password} onChange={onChangeHandler} type="password" placeholder="Password" /> 
         </div>

         <button onClick={()=>{(state=='Login')?login():signup()}}>Continue</button>
            {
               (state==='Login')? <p className="loginsignup-login">Create an account? 
               <span onClick={()=>setState('Sign Up')}>Login here</span></p>:
               <p className="loginsignup-login">Already have an account?
                <span onClick={()=>setState('Login')}>Click here</span></p>
            }
         <div className="loginsignup-agree">
            <input type="checkbox"/>
            <p>By continuing, i agree to the term of use and privacy policy.</p>
         </div>

      </div>
    </div>
 )
}
export default SignupLogin;