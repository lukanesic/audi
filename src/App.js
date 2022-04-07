import { Routes, Route } from 'react-router-dom'

// Pages
import Homepage from './pages/Homepage'
import Q8 from './pages/Q8'

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path='/q8' exact element={<Q8 />} />
    </Routes>
  )
}

export default App
