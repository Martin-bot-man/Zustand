import React from 'react'
import { useBearStore } from '../stores/store'

const BearBox = () => {
  const bears = useBearStore(state => state.bears)
  const increasePopulation = useBearStore(state=> state.increasePopulation)
  const removeAllBears = useBearStore(state=> state.removeAllBears)
  return (
    <>
     <div className='box'>
      <h1>Bear Box</h1>
      <p>Bear:{bears}</p>
    </div>
    <div>
      <button onClick={increasePopulation}>add bear</button>
      <button onClick={removeAllBears}>remove all bears</button>
    </div>
    </>
   
  )
}

export default BearBox