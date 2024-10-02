import  {NavBar}  from './components/Navbar/Navbar'
import { SideBar } from './components/Sidebar/Sidebar'
import { Footer } from './components/Footer/Footer'
import { ProductFeatured } from './components/ProductFeatured/ProductFeatured'
import { ProductFeaturedView } from './components/ProductFeaturedView/ProductFeaturedView'

import './App.css'

function App() {
  const categories = ["Visores", "Cascos", "Acesorios"]

  return (
    <>
      <NavBar></NavBar>
      <SideBar></SideBar>
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
