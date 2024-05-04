import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {LandingPage} from "./pages/LandingPage"
import { DetallePelicula } from "./pages/DetallePelicula"


export const App = () =>{


  //definicion de rutas segun ruta definida en el prop llamado "path" y el elemento a renderizar vinculado a un componente
  return (


   <BrowserRouter>
    <header>
      <Link to ="/" className="text-decoration-none">
        <h1 className="text-center text-uppercase ">Peliculas</h1>
      </Link>

      
      
    </header>

    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/pelicula/:peliculaId" element={<DetallePelicula />} />
    </Routes>

   </BrowserRouter>
  )
}


