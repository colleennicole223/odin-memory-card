import React, { useEffect, useState } from 'react'

export default function Score({getCurrentScore, setHighScore, getHighScore, getDifficulty}){

    // Track score
    const [score, setScore] = useState(0);

    useEffect(() => {
        updateHighScore();
        updateScorePercentage();
    }, [getCurrentScore])

    const updateHighScore = () => {
        if(getCurrentScore > getHighScore){
            setHighScore(prev => getCurrentScore)
        }
    }

    const updateScorePercentage = () => {
        setScore((getCurrentScore/getDifficulty.cardQuantity)*100)
    }

    return (
        <div>

            <div className='score'>
                <div className='percentage'>{score.toFixed(0)}%</div>
                <h3>Your current progress is {getCurrentScore} out of {getDifficulty.cardQuantity} cards.
                    The most cards you have correctly memorized in this session is {getHighScore}.</h3>
            </div>
        </div>
        
    )
}