import { useState } from 'react'
import VideoText from './components/VideoText/VideoText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VideoText />
    </>
  )
}

export default App
