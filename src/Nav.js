import React,{useContext} from "react";
import {MovieContext} from "./MovieContext";

const Nav=()=>{

    const [Movies,SetMovies]=useContext(MovieContext);

    return(<>
        <div style={{background:'black',display:'flex',justifyContent:'space-around',color:"white"}}>
        <h3>Shubham</h3>
        <p>List of Movies : {Movies.length}</p>
        </div>
    </>);
};
export default Nav;