
import './App.css'
// import Log_in from './Website/Login/Log_in'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Website/Home'
import Pcart from './Website/Pages/Pcart'
import { Shop } from './Website/Shop_Page/Shop'
import Feedinsta from './Website/Pages/Feedinsta'
import Footer from './Website/Footer'

function App() {
  return (
    <>
      {/* <Log_in/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Pcart />}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Shop/> */}
      {/* <Feedinsta/> */}
      <Footer/>
    </>
  )
}

export default App