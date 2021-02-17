import React,{useContext,useState} from "react";
import {MovieContext} from "./MovieContext";

const AddMovie=()=>{

const [name,setname]=useState('');
const [price,setprice]=useState('')

const [Movies,SetMovies]=useContext(MovieContext)

const UpdateName=(event)=>{
    setname(event.target.value);
}

const UpdatePrice=(event)=>{
    setprice(event.target.value);
}

const addMovie=(event)=>{
    event.preventDefault();
    SetMovies((prevValue)=>(
        [...prevValue,{name:name,price:price}]
    ))
}
    return(<>
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={UpdateName}/>
            <input type="text" name="price" value={price} onChange={UpdatePrice}/>
            <button type="submit">Submit</button>
        </form>    
    </>)    
};
export default AddMovie;