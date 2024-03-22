import Main from './Screens/Main'
import Users from './Screens/Users'
import { useState } from 'react'

const App = () => {

  const [number, setNumber] = useState(0)

  console.log(number);

  return (
    <div className='flex w-full flex-col md:flex-row'>
      <Users Active={setNumber}/>
      <Main number={number}/>
    </div>
  )
}

export default App