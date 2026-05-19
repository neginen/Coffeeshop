

import Signup from "./Components/sign/SignUp";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/Signin/Signup' element={<Signup />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
     

    </>
  )
}

export default App
