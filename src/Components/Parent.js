import React, { useState } from "react";
import Child from "./Child";
const Parent=()=>{
    const[cartItems,setCartItems]=useState([])
    const[item,setItem]=useState({Name:"",Price:""})
   function handleClick(){
     setCartItems([...cartItems,item])
     console.log(cartItems)
     setItem({Name:"",Price:""})
   }
    return(
        <div className="parent">
        <h1>Parent Component</h1>
          <label>Item Name : </label>
          <input type="text" name="Name" value={item.Name} onChange={(e)=>(setItem({...item,[e.target.name]:e.target.value}))}></input>
          <label>Item Price : </label>
          <input type="text" name="Price" value={item.Price} onChange={(e)=>(setItem({...item,[e.target.name]:e.target.value}))}></input>
          <button onClick={handleClick}>Add Item</button>
          <Child cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
    )
}
export default Parent;