import React from 'react'
import Style from "./home.module.css"
import {Link} from 'react-router-dom'
const Homecrud = () => {
  return (
    <section id={Style.nav}>
        <Link to='/'>Create-Users</Link>
        <Link to='/Users'>Users</Link>
    </section> 
  )
}

export default Homecrud
