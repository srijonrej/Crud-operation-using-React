import React from 'react'
import Style from "./home.module.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
    let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let[company,setCompany]=useState("");

    let navigate=useNavigate()

    let formHandle=(e)=>{
        e.preventDefault()
        // console.log(name,salary,company);
        let payload={name,salary,company}

        //post the data
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("Data Added");
            alert("Data Added Sucessfully")
        })
        .catch(()=>{
            console.log("something is wrong");
        })

        navigate("/Users")

    }
  return (
    <section id={Style.mainform}>
        <form action="">
        <table>
            <tr>
                <th colSpan="2"><h1>Employee Details</h1></th>
            </tr>
            <tr>
                <td><label >Name</label></td>
                <td>:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /></td>
            </tr>
            <tr>
                <td><label >Salary</label></td>
                <td>:<input type="tel" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /></td>
            </tr>
            <tr>
                <td><label >Company</label></td>
                <td>:<input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button id={Style.btn} onClick={formHandle}>Submit</button></th>
                
            </tr>
        </table>
        </form>

    </section>
  )
}
export default CreateUsers
