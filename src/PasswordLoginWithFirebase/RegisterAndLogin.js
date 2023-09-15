import React, { useState } from "react";
import {database} from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import style from './Designpage.module.css'

function RegisterAndLogin(){
    
    const[login,setLogin]=useState(false)

    const history=useNavigate()


    const handleSubmit=(e,type)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value

        if(type=='signup'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData");
            history('/home')
        }).catch(err=>{
            alert(err.code)
            setLogin(true)
           })
    }
    else
    {
       signInWithEmailAndPassword(database,email,password).then(data=>{
        console.log(data,"authData")
        history('/home')
       }).catch(err=>{
        alert(err.code)
       })
    }
}
    return(
        
        <div id={style.App}>
            <h1 style={{textAlign:"center"}}>Admin Login Page</h1>
            <div id={style.row}>
                
                <div id={login==false?'activeColor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
                <div id={login==true?'activeColor':'pointer'} onClick={()=>setLogin(true)}>SignIn</div>
            </div>
            {/* registration and login Screen */}
            
            <h1 style={{textAlign:"center"}}>{login?'SigIn':'SignUp'}</h1>
            <form style={{textAlign:"center"}}onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}> 
               <input name="email" placeholder="Email" /><br/>
               <input name="password" type="password" placeholder="Password" /><br/>
               <button>{login?'SignIn':'SignUp'}</button>
            </form>
        </div>
    )
}
export default RegisterAndLogin