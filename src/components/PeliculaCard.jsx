import { Link} from "react-router-dom";

export const PeliculaCard = ({peliculaMap}) =>{

    
    const imgURL = "https://image.tmdb.org/t/p/w500"+peliculaMap.poster_path;
    const detalleIdURL =`/pelicula/${peliculaMap.id}`;
        return(
            <>
                <div className="col-md-3 col-lg-2">
                    <div className="card rounded">             
                    <Link to={detalleIdURL}>           
                        <img className="card-img-top" src={imgURL} alt={peliculaMap.title} />
                    </Link>  
                        <div className="card-body">
                            <h2 className="text-dark fw-bold fs-1 card-text text-center"> {peliculaMap.title} </h2>
                        </div>            
                    </div>
                </div>
                
            </>
        );
};