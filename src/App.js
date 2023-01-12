
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Appointment from './components/Appointment';

import Navbar from './Nav/Navbar';
import Test from './components/Test';

function App() {

  return (
   <BrowserRouter >
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Appointment' element={<Appointment />}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Register' element={<Register />}></Route>
    <Route path='/Test' element={<Test />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
