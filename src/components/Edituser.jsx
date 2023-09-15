import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Edituser=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")


    let{index}=useParams()
       console.log(index);

       let abc=useNavigate()

      useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        }).catch(()=>{
            console.log("Went Wrong")
        })
      },[]) 

     let nameData=(e)=>{
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
        let payload ={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{console.log("Data Has Been Updated");})
        .catch(()=>{console.log("Data not updated");})
        abc("/user")
     }

     
    return(

   <div id={style.myForm}>
        <form action="">
            <h1>UPDATE USER</h1>
                 <label htmlFor="">Name:</label>
                 <input type="text" value={name} onChange={nameData}/> <br />
                 <label htmlFor="">Salary</label>
                 <input type="number" value={salary} onChange={salaryData} /> <br/>
                 <label htmlFor="">Company</label>
                 <input type="text" value={company}  onChange={companyData}/> <br />
                 <button onClick={formHandle}>Submit</button>


        </form>
   </div>

    )
}
export default Edituser