
import './App.css';
import Amazon from './components/Amazon/Amazon';
import Cart from './components/Cart/Cart';
import './components/Amazon/amazon.css'
import { useSelector } from 'react-redux'
import { Route,Routes } from 'react-router-dom';
import Storage from './components/Storage';
function App() {
  const {cart}=useSelector(state=>state.shopSlice)
  const {warning}=useSelector(state=>state.shopSlice)
  return (
    <>
    <Routes>
      <Route path="/" element={<Amazon />}/>
      <Route path="/cart" element={<Cart cart={cart}/>} />
      <Route path="/storage" element={<Storage/>}/>
    </Routes>
     {
      warning&&<div className='warning'>Bu narsa allaqachon savatga qo'shilgan</div>
     }
    </>
  );
}

export default App;
