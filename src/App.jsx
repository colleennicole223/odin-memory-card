import { React, useState } from 'react'
import './styles/style.css'
import Difficulty from './components/Difficulty';
import Score from './components/Score';
import Card from './components/Card';

function App() {

  // Set up some hooks for some variables we want to track 📃
  const [getDifficulty, setDifficulty] = useState();
  const [getCurrentScore, setCurrentScore] = useState();
  const [getHighScore, setHighScore] = useState();
  const [getCardCollection, setCardCollection] = useState({
    name: "",
    type: "",
    clicked: false,
  })

  return (
    <>
      <div id='main'>

        <div id='header'>
          <div className='intro'>
            <h2>Pokemon Memory Game</h2>
            <h3>Try to not click on the same card twice.</h3>
          </div>
          <Difficulty
            setDifficulty = {setDifficulty}
            getDifficulty = {getDifficulty}/>
          <Score
            setCurrentScore = {setCurrentScore}
            getCurrentScore = {getCurrentScore}
            setHighScore = {setHighScore}
            getHighScore = {getHighScore}/>
        </div>

        <div id='collection'>
          <Card
            getCardCollection = {getCardCollection}
            setCardCollection = {setCardCollection}/>
        </div>
      </div>      
    </>
  )
}

export default App
