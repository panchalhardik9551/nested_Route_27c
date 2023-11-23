import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Hardik from './components/Hardik'
import Pavan from './components/Pavan'
import Error from './components/Error'
import Login from './components/Login'
import Protected from './components/Protected'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<Protected Component={About} />} />
          <Route path='/contact' element={<Protected Component={Contact} />} >
            <Route path='hardik' element={<Hardik/>}/>
            <Route path='pavan' element={<Pavan/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
