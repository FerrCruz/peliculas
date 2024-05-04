const API = "https://api.themoviedb.org/3";


export const get = (path) =>{
   
    //llamado de la api de forma dinamica con diferentes endpoints de data
    return fetch(API+path,{
        //autorizacion de credenciales que solicita fetch (api key secret token)
        headers :{
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmY0Mzk5MDczOGYzMmYyYjUzMjg5MjhhNWFhZDFjZCIsInN1YiI6IjY2MjA2ZGEyMzJjYzJiMDE3YzBjNjNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-dRhh0vosJO02cuTMXGDHRPYzeuJL_j5AxsN1_mewQU",
            "Content-type":"application/json;charset=utf-8"
            
        }
    //Conversion del objeto en formato json (texto plano)
    }).then((results)=>results.json())
}


