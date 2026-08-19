import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'
import LoadMoreData from "./components/load-more-data";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
   {/* <StarRating noOfStars={10}/>*/}
  {/* <LoadMoreData/> */}
   {/*LightDarkMode/>  */}
   <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
  </div>
  )
}

export default App
