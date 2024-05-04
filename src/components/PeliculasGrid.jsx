import {get} from "../utils/conexionAPI";
import {useState, useEffect} from "react";
import { PeliculaCard } from "./PeliculaCard";

export const PeliculasGrid = () =>{
    const [peliculas,setPeliculas] = useState([]);

    //accion a efectuar cada vez que se renderize el componente local donde se situa
    useEffect(()=>{

        //obtencion de data mediante el endpoint pasado por parametro a la funcion get();
        get("/discover/movie").then((data)=>{         
             //actualizar o setear el array de objetos de variable de estado peliculas 
            setPeliculas(data.results);
            console.log(data.results)
        })
    }, [])

    return (
        <>
            <ul>
                <div className="row mt-4">
                {
                    //mapeo del array peliculas para iterar cada posicion de ella y renderizar componentes
                    peliculas.map((pelicula)=>(
                        <PeliculaCard key={pelicula.id}  peliculaMap = {pelicula} />                    
                    ))
                }
                </div>
            </ul>
       </>
    );
}