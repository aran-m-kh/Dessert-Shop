import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from "./pages/home/Home"
import { ShopingCartProvider } from './contex/shoppingCartContex';
function App() {

  return (
    <ShopingCartProvider>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
    </ShopingCartProvider>
  )
}

export default App
