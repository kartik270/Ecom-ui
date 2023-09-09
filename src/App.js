
import Cart from './components/cart/Cart';
import DetailView from './components/details/DetailView';
import Header from './components/header/Header'
import Home from './components/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
     


    <BrowserRouter>

      <Header/>
    <div style={{marginTop:55}}>
      <Routes>
    <Route path='/' element =  { <Home/>}/>
    <Route path='/product/:id' element =  { <DetailView  />}/>
    <Route path='/cart' element =  { <Cart  />}/>
   
      </Routes>
    </div>
    </BrowserRouter>
    

    
    </div>
  );
}

export default App;
