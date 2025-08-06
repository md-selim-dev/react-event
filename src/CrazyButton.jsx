


import React from 'react'
import PropTypes from 'prop-types';

function Button({ message, children }) {

    function handleClick(message, event) {
        console.log(message, event.target)
    }

    return (
        <button onClick={(event) => handleClick(message, event)} className='bg-gray-700 text-white p-1 rounded cursor-pointer'>
            {children}
        </button>
    )
}



const CrazyButton = () => {

    return (
        <div className='my-4 font-semibold flex gap-1.5'>
            <Button message="Dancing!">
                Dance
            </Button>
            <Button message="Jumping">
                Jump
            </Button>
        </div>
    )
}

Button.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default CrazyButton