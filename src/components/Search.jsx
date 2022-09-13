import { useState } from "react";
import { useGlobalContext } from "../context";

export const Search = () => {
    const [text, setText] = useState('')
    const {setSearchTerm, setPageNumber} = useGlobalContext()
 

    const handleChange = (e)=>{
        setText(e.target.value)
        setPageNumber(1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()     
            setSearchTerm(text)
    
    }
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a comic" value={text} onChange={handleChange} className="form-input"/>
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </header>
  );
};
