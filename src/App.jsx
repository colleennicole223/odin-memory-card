import { React, useState } from 'react'
import './styles/style.css'
import Difficulty from './components/Difficulty';
import Score from './components/Score';
import Card from './components/Card';
import Intro from './components/Intro';
import Collection from './components/Collection';

function App() {

  // Set up some hooks for some variables we want to track 📃
  const [getDifficulty, setDifficulty] = useState({
    level: "easy",
    cardQuantity: 5,
    description: "Easy mode displays five cards to keep track of.",
  });
  const [getCurrentScore, setCurrentScore] = useState();
  const [getHighScore, setHighScore] = useState();


  return (
    <>
      <div id='main'>

        <div id='header'>
          <Intro
            getDifficulty = {getDifficulty}
          />
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
          <Collection
            getDifficulty = {getDifficulty}/>
        </div>

      </div>      
    </>
  )
}

export default App
