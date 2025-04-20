import React from 'react'

export default function Score({setCurrentScore, getCurrentScore, setHighScore, getHighScore}){
    return (
        <div className='score'>
            <h3>Current Score: </h3>
            <h3>Best Score: </h3>
        </div>
    )
}