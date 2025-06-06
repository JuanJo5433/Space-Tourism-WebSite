import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'

function App() {

  return (
    <>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />

        </Routes>

      </div>

    </>
  )
}

export default App
