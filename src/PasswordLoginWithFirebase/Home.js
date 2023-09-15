import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {database} from './FirebaseConfig'
import { useNavigate } from "react-router-dom";
import {db} from "./FirebaseConfig"
import { collection, getDocs, query } from "firebase/firestore";

function Home(){
  const[users,setUsers]=useState([])


    const history=useNavigate()
  
           
    
    
      const getStudents=async()=>{
     // const student={firstName,lastName,email}
        const q=query(collection(db,'users'));
        const querySnapshot=await getDocs(q);
        let users=[]
        querySnapshot.forEach((doc)=>{
          users.push({...doc.data(),id:doc._id})
        });
        setUsers(users)
    }
     useEffect(()=>{
      getStudents();
    },[])
  
    const handleClick=()=>{
      signOut(database).then(val=>{
          console.log(val,"val")
        history('/')
      })

   }  
  
    return(
           <div>
           <h1 style={{textAlign:"center"}}>Welome To The Admin Pannel</h1> 
           <h1 style={{textAlign:"center"}}>User Details</h1>
              <form style={{textAlign:"center"}}>
                <label for="">Name:</label>
                <input type="text" name="" value="" placeholder="Enter your name"/><br></br>
                <label for="">Email:</label>
                 <input type="email" name="" value="" placeholder="Enter your email"/><br/>
                 <label>Send :</label> 
                 <input type="textbox" name="" value=""placeholder="Enter your message"/><br/><br/>
                  <button onKeyDown={handleClick}>submit</button>
              </form>

             <h1 style={{textAlign:"center"}}><button onClick={handleClick}>SignOut</button></h1> 
           </div>
    )
  }
export default Home
