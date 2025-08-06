

import React, { useState } from 'react'


const Register = () => {

    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
        setQuery("")
    };
    return (
        <div onClick={() => console.log("Bubbling...")}>
            <form onSubmit={handleSubmit} className='my-6'>
                <input
                    className='outline p-1 rounded mr-1'
                    type="text"
                    value={query}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => (setQuery(e.target.value))}
                    placeholder='Enter something...'
                />
                <button onClick={(e) => e.stopPropagation()} className='bg-emerald-600 p-1 rounded' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register