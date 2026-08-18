import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'
import LoadMoreData from "./components/load-more-data";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
   {/* <StarRating noOfStars={10}/>*/}
   <LoadMoreData/>
  </div>
  )
}

export default App
