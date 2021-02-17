import React,{createContext, useState} from "react";

const MovieContext=createContext();


const MovieProvider=(props)=>{
    const [Movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:1233
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:234442
        },
        {
            name:'Inception',
            price:'$10',
            id:23524
        }
    ]);
    return(<>
        <MovieContext.Provider value={[Movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    </>)        
}
export {MovieProvider,MovieContext};