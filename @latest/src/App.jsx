import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'
import LoadMoreData from "./components/load-more-data";
import LightDarkMode from "./components/light-dark-mode";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
   {/* <StarRating noOfStars={10}/>*/}
  {/* <LoadMoreData/> */}
   <LightDarkMode/>
  </div>
  )
}

export default App
