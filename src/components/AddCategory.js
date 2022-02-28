import React, {useState} from 'react'

export const AddCategory = () => {
  
    const [inputValue, setInputValue] = useState ( 'Hola mundo');
  
    const handelInputChange = (e) => {
        setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Submit hecho');
    }

    return (
    <form onSubmit = {handleSubmit} >
        <input 
            type="text"
            value = { inputValue }
            onChange = { handelInputChange }
        />
    </form>
  )
}
