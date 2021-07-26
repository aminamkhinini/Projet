import React from "react"; 
 function Filter({searchTerm, handleChange}) {

  const handleChangeterm = event => {
    handleChange(event.target.value);
  };
  return (
    
       <form className="search"> 
        <input 
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChangeterm}
          
        /> 
    
      </form> 
    ); 
  

     
}
export default Filter; 
