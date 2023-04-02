import React from 'react'
import Homecrud from './Component/Homecrud'
import CreateUsers from './Component/CreateUsers'
import Users from './Component/Users'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUsers from './Component/EditUsers'
const App = () => {
  return (
    <div>
        <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route path='/' element={<CreateUsers/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/edit/:index' element={<EditUsers/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
