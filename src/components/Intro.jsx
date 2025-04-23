import React from 'react'

export default function Intro({getDifficulty}) {
    return (
        <div className='intro'>
            <h2>Pokemon Memory Game</h2>
            <h3>Try to not click on the same card twice. {getDifficulty.description} </h3>
        </div>
    )
}