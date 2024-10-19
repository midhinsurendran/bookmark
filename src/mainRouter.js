import React from "react"
import { Route , Routes } from "react-router-dom"
import Login from "./components/auth/login"
import Signin from "./components/auth/signIn"
import Home from "./components/home"
import Read from "./components/read"
import Create from "./components/create"
import No from "./components/No"
const MainRouter = () => {
    return (
      <div>
          <Routes>
               <Route path='*' element={<No />} /> 
              <Route path='/' element={<Home/>}/>
              <Route path="login/" element={<Login />}/>
              <Route path="sinup/" element={<Signin />}/>
              <Route path="read/" element={<Read />}/>
              <Route path="create/" element={<Create />}/>


              



          </Routes>
        
      </div>
    )
  }
  
  export default MainRouter