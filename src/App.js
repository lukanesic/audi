import { Routes, Route } from 'react-router-dom'

// Pages
import Homepage from './pages/Homepage'
import Q8 from './pages/Q8'
import A3 from './pages/A3'
import CreateModelPage from './pages/CreateModelPage'
import Paymentpage from './pages/Paymentpage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path='/q8' exact element={<Q8 />} />
      <Route path='/a3' exact element={<A3 />} />
      <Route path='/design/:model' exact element={<CreateModelPage />} />
      <Route path='/design/payment' exact element={<Paymentpage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
