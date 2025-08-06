


import React from 'react'

const TextBox = () => {
    function handleChange(e) {
        console.log("Text Change", e.target.valueAsNumber)
    }
    return (
        <input onChange={handleChange} type="number" className='border-2 border-gray-300 rounded-lg p-1 outline-0' />
    )
}

export default TextBox