import React, { useEffect } from 'react'
import Style from "./home.module.css"
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUsers = () => {
  let [name,setName]=useState("");
    let [salary,setSalary]=useState("");
    let[company,setCompany]=useState("");

    let {index}=useParams()
    console.log(index);
    
    useEffect(()=>{
      axios.get(`http://localhost:3000/content/${index}`)
      .then((response)=>{
        setName(response.data.name)
        setSalary(response.data.salary)
        setCompany(response.data.company)

      })
    },[])//

    let navigate=useNavigate()

    let formhandel=(e)=>{
      e.preventDefault();
      let payload={name,salary,company};
      axios.put(`http://localhost:3000/content/${index}`, payload)
      .then(()=>{
        console.log("Data Updated");
        alert("Data has been Updated")
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
                <th colSpan="2"><button id={Style.btn} onClick={formhandel}>Update</button></th>
                
            </tr>
        </table>
        </form>

    </section>
  )
}

export default EditUsers
