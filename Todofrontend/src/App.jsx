import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Task from './pages/Task'
import Alltask from './pages/Alltask'
import Edit from './pages/Edit'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
    <Routes>
    
      <Route path='/' element={<Task/>}></Route>
      <Route path='/Alltask' element={<Alltask/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}/>
      </Routes></BrowserRouter>
    </>
  )
}

export default App
