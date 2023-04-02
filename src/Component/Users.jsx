import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Style from "./home.module.css"
import { Link } from 'react-router-dom'
const Users = () => {
  let[data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((response)=>{
      // console.log(response)
      console.log(response.data);
      setData(response.data)
    })
  },[])

  let deleteData=(index)=>{
    axios.delete(`http://localhost:3000/content/${index}`)
    window.location.assign("/Users")
    alert("Data has been Deleted!!!")
  }
  return (
    <div id={Style.users}>
      {data.map((x)=>{
        return(
          <section id={Style.card}>
            <table>
              <tr>
                <th colSpan="2"><h3>Employee {x.id}</h3></th>
              </tr>
              <tr>
                <td>Name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>:{x.salary}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:{x.company}</td>
              </tr>
              <tr>
                <td>
                  <button><Link to={`/edit/${x.id}`}>Edit</Link></button>
                </td>
                <td>
                  <button onClick={()=>{deleteData(x.id)}}>Delete</button>
                </td>
              </tr>
            </table>
            
          </section>
        )

      })}
    </div>
  )
}

export default Users
