import React, { useState} from "react"; 

 function Filter() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    
       <form className="search"> 
        <input 
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
          
        /> 
    
      </form> 
    ); 
  

     
}
export default Filter; 

