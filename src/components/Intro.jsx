import React from 'react'
import Difficulty from './Difficulty'

export default function Intro({getDifficulty, setDifficulty}) {
    return (
        <div className='intro'>
            <h1>Pokemon Memory Game</h1>
            <h3>Try to not click on the same card twice. {getDifficulty.description} </h3>

            <Difficulty
                        setDifficulty = {setDifficulty}/>
        </div>
    )
}