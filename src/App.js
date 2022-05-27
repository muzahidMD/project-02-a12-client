import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Navbar from './page/Shared/Navbar';
import Register from './page/Login/Register';
import Blog from './page/Blog/Blog';
import ProductDetail from './page/Home/ProductDetail';
import NotFound from './page/NotFound/NotFound';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/product/:productId' element={<ProductDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
