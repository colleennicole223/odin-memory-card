import React from 'react'

export default function Difficulty({setDifficulty, getDifficulty}){

    const updateDifficulty = (diff, cards, description) => {
        setDifficulty({
            level: diff,
            cardQuantity: cards,
            description: description,
          })
    }

    return (
        <div className='difficulty'>
            <div>
              <h3>Select Difficultly:</h3>
              <button onClick={ () => updateDifficulty("easy", 5, "Easy mode displays five cards to keep track of.")}>Easy</button>
              <button onClick={() => updateDifficulty("normal", 10, "Normal mode displays ten cards to keep track of.")}>Normal</button>
              <button onClick={() => updateDifficulty("hard", 15, "Hard mode displays fifteen cards to keep track of.")}>Hard</button>
            </div>
        </div>
    )
} 