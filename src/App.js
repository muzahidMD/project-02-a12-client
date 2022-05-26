import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Navbar from './page/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
