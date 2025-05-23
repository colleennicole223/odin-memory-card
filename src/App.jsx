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
  const [getCurrentScore, setCurrentScore] = useState(0);
  const [getHighScore, setHighScore] = useState(0);


  return (
    <>
      <div id='main'>

        <div id='header'>
          <Intro
            getDifficulty = {getDifficulty}
            setDifficulty = {setDifficulty}
          />
          <Score
            getCurrentScore = {getCurrentScore}
            setHighScore = {setHighScore}
            getHighScore = {getHighScore}
            getDifficulty={getDifficulty}/>
        </div>

        <Collection
            getDifficulty = {getDifficulty}
            setCurrentScore = {setCurrentScore}
            getCurrentScore = {getCurrentScore}/>
      </div>      
    </>
  )
}

export default App
