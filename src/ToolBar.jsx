

import PropTypes from 'prop-types';
import React from 'react';

function Button({ onClick, children }) {
    return (
        <button
            className='bg-green-700 mr-2 text-white p-1 rounded cursor-pointer'
            onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}

function PlayButton({ movieName }) {

    function handlePlayClick() {
        console.log(`Playing ${movieName}`)
    }

    return (
        <Button onClick={handlePlayClick}>Play {movieName}</Button>
    )
}

PlayButton.propTypes = {
    movieName: PropTypes.string.isRequired,
};

function UploadButton() {
    return (
        <Button onClick={() => console.log('Uploading...')}>Upload</Button>
    )
}



const ToolBar = () => {
    return (
        <div>
            <PlayButton movieName="Kumfu Panda"></PlayButton>
            <UploadButton></UploadButton>
        </div>
    )
}

export default ToolBar