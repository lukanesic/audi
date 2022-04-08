import { Routes, Route } from 'react-router-dom'
import A3 from './pages/A3'

// Pages
import Homepage from './pages/Homepage'
import Q8 from './pages/Q8'
import CreateModelPage from './pages/CreateModelPage'

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path='/q8' exact element={<Q8 />} />
      <Route path='/a3' exact element={<A3 />} />
      <Route path='/design/:model' exact element={<CreateModelPage />} />
    </Routes>
  )
}

export default App
