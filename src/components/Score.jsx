import React, { useEffect } from 'react'

export default function Score({setCurrentScore, getCurrentScore, setHighScore, getHighScore}){

    useEffect(() => {
        updateHighScore();
    }, [getCurrentScore])

    const updateHighScore = () => {
        if(getCurrentScore > getHighScore){
            setHighScore(prev => getCurrentScore)
        }
    }

    return (
        <div className='score'>
            <h3>Current Score: {getCurrentScore}</h3>
            <h3>Best Score: {getHighScore}</h3>
        </div>
    )
}