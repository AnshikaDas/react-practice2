import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
    <StarRating noOfStars={10}/>
  </div>
  )
}

export default App
