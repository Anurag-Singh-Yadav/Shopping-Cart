import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
    </div>
  );
}

export default App;
