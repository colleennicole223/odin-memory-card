import React from 'react'

export default function Difficulty({setDifficulty, getDifficulty}){

    return (
        <div className='difficulty'>
            <div>
              <h3>Select Difficultly:</h3>
              <button>Easy</button>
              <button>Normal</button>
              <button>Hard</button>
            </div>
        </div>
    )
} 