import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Product from './Component/Product';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Tanaman1 from './Component/Tanaman1';
import Tanaman2 from './Component/Tanaman2';
import Tanaman3 from './Component/Tanaman3';
import Tanaman4 from './Component/Tanaman4';
import Tanaman5 from './Component/Tanaman5';
import Tanaman6 from './Component/Tanaman6';
import Tanaman7 from './Component/Tanaman7';
import Tanaman8 from './Component/Tanaman8';
import Tanaman9 from './Component/Tanaman9';
import Tanaman10 from './Component/Tanaman10';
import Tanaman11 from './Component/Tanaman11';
import Tanaman12 from './Component/Tanaman12';
import Cart from './Component/Cart';


const App = ()=> {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/tanaman1' element={<Tanaman1/>} />
          <Route path='/tanaman2' element={<Tanaman2/>} />
          <Route path='/tanaman3' element={<Tanaman3/>} />
          <Route path='/tanaman4' element={<Tanaman4/>} />
          <Route path='/tanaman5' element={<Tanaman5/>} />
          <Route path='/tanaman6' element={<Tanaman6/>} />
          <Route path='/tanaman7' element={<Tanaman7/>} />
          <Route path='/tanaman8' element={<Tanaman8/>} />
          <Route path='/tanaman8' element={<Tanaman9/>} />
          <Route path='/tanaman10' element={<Tanaman10/>} />
          <Route path='/tanaman11' element={<Tanaman11/>} />
          <Route path='/tanaman12' element={<Tanaman12/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
