const Child=(props)=>{
    const {cartItems}=props;
    const{setCartItems}=props;
    function handleRemove(index){
       const updatedCart=cartItems.filter((_,idx)=> index!=idx)
       setCartItems(updatedCart)
    }   
    return(
        <div className="child">
            <h2>Child Component</h2>
            <ul>
            {
               cartItems.map((obj,index)=>{
                return(
                    <li>
                       <div style={{display:"inline"}}>{obj.Name} -  ₹{obj.Price}</div>
                       <button onClick={()=>{handleRemove(index)}}>Remove</button>
                    </li>
                )
               })
            }
            </ul>
        </div>
    )
}
export default Child;