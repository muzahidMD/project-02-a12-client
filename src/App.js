import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Navbar from './page/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
