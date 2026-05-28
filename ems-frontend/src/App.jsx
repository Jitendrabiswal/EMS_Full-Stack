import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Helloworld from './Helloworld'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import BackendComponent from './Component/BackendComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Employeecomponent from './Component/Employeecomponent'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
     
     <Routes>
      <Route path='/' element={<ListEmployeeComponent />} />

<Route path='/add-empl' element={<Employeecomponent />} />
      

     </Routes>
     
     <BackendComponent/>
     </BrowserRouter>
     
    </>
  )
}

export default App
