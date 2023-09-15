import React, { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

       let navigate=useNavigate()

    let nameData=(e)=>{
        console.log("E data"+e)
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload = {name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("Data Has Been Uploaded")
        }).catch(()=>{
            console.log("Something went worng")
        })
        navigate("/user")
    }

    return(
        <div id={style.myForm}>
          <form action="">
              <label htmlFor="">Name:</label>
              <input type="text" value={name} onChange={nameData} /> <br />
              <label htmlFor="">Salary:</label>
              <input type="number"  value={salary} onChange={salaryData}/> <br />
              <label htmlFor="">Company</label>
              <input type="text" value={company} onChange={companyData}/> <br />
              <button onClick={formHandle}>Submit</button>
          </form>
        </div>
    )
}
export default CreateUser