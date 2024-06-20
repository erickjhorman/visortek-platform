import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {NavBar}  from './components/Navbar/Navbar'
import { SideBar } from './components/Sidebar/Sidebar'
import { Footer } from './components/Footer/Footer'
import { ProductFeatured } from './components/ProductFeatured/ProductFeatured'
import { ProductFeaturedView } from './components/ProductFeaturedView/ProductFeaturedView'

function App() {
  const [count, setCount] = useState(0)
  const categories = ["Visores", "Cascos", "Acesorios"]

  return (
    <>
      <NavBar></NavBar>
      <SideBar></SideBar>
      {/* <div className='space'></div> */}
      <h2 className='text-center '>Nuestros productos</h2>    
      <div class="d-flex justify-content-center align-items-center"> 
      <ol class="list-unstyled row">
        {categories.map(category => <li class="col" ><h1>{category}</h1></li>)}
      </ol>

      </div>
      <ProductFeatured/>
      <ProductFeaturedView/>
      <Footer/>
    </>
  )
}

export default App
