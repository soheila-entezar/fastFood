import React, { useState } from 'react';  
import { BsSearch } from 'react-icons/bs';  

export default function SearchBar({ search }) {  
    const [value, setValue] = useState('');  

    const handleOnSubmit = (e) => {  
        e.preventDefault(); // Preventing the default form submission  
        search(value); // Call the passed search function with the current value  
        setValue(''); // Clear the input after submission  
      
    };  

    return (  
        <form onSubmit={handleOnSubmit} className='search flex-fill d-flex align-items-center'>  
            <div className='input-group'>  
                <input   
                    type='text'   
                    value={value}   
                    onChange={(e) => setValue(e.target.value)}   
                    className='form-control rounded-end pe-5 border-success'   
                    placeholder='جستجوی فست فود...'   
                />  
                <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3' />  
            </div>  
        </form>  
    );  
}