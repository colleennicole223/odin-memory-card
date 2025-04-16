import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/style.css'

function App() {

  return (
    <>
      <div id='main'>
        
        <div id='header'>
          <div className='intro'>.intro</div>
          <div className='difficulty'>.difficulty</div>
          <div className='score'>.score</div>
        </div>

        <div id='collection'>
          <div className='card'>.card</div>
          <div className='card'>.card</div>
          <div className='card'>.card</div>
          <div className='card'>.card</div>
          <div className='card'>.card</div>
          <div className='card'>.card</div>
          <div className='card'>.card</div>

        </div>
      </div>      
    </>
  )
}

export default App
