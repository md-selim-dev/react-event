

import React from "react";
const Button = () => {
    function handleClick() {
        console.log("You Clicked Me")
    }
    return (
        <button onClick={handleClick} className="bg-purple-600 text-white p-1 cursor-pointer rounded text-lg font-bold">Click Me</button>
    )
}

export default Button;