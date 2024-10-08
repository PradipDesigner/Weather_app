import React, { useRef, useState } from "react";

const Searchbar = ({searchvalue}) => {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef()
    const handleInput = (event) =>{
        setInputValue(event.target.value)
       
    }
    const formsubmit =(e)=>{
        e.preventDefault();
        const newValue = inputRef.current.value
        searchvalue(newValue)

        // Reset the input value after submission
    setInputValue("");
    inputRef.current.value = "";
    }
  return (
    <>
      <form onSubmit={formsubmit} className="custom-form">
        <input type="search" value={inputValue} placeholder="Search city" ref={inputRef} onChange={handleInput}/>
      </form>
    </>
  );
};

export default Searchbar;
