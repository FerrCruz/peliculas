import { useEffect, useState } from "react"
import { get } from "../utils/conexionAPI"
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";


export const DetallePelicula = () => {

    const [pelicula, setPelicula] = useState(null);
    const [video,setVideos] = useState(null);
    const { peliculaId } = useParams();
    
    useEffect(() => {
        get(`/movie/${peliculaId}`).then((data) => {
          setPelicula(data);
        })

        get(`/movie/${peliculaId}/videos`).then((data)=>{
            setVideos(data)
        })
    
      }, [peliculaId]);

//al parecer de alguna manera se ocasiona un guardado de pelicula tipo undefined por lo que se controla esa situación
    if(!pelicula || !video){
        return null;
    }
    
    console.log(video)
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
    const videoSRC = `https://www.youtube.com/embed/${video.results[0].key}?si=WeDAf1qEWq4LoGp0`;

    

    return (       
        <>
            <div className=" mt-5 mb-5 text-center container border border-dark col-md-3">    
                <div className="card border-0">
                    <div className="card-body">  
                        <h1>{pelicula.title} </h1>
                        <p className="fs-4" >{pelicula.overview} </p>
                        <p className="fs-5" > 
                            {pelicula.genres.map((genre)=>genre.name).join(" & ")} 
                        </p>
                        <img className="card-img-top" src= {imgURL}  alt= {pelicula.title} />
                        
                        <p>Release Date: {pelicula.release_date} </p>
                        <p>Popularity {pelicula.popularity} </p>
                        <Button className="w-100 fw-bold text-uppercase">Ver más</Button>
                    </div>
                    <iframe width="420" height="315" src={videoSRC}title="YouTube video player"></iframe>
                </div>                
            </div>                                                 
        </>
    )
}


/*

*/