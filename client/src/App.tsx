import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/hero' element={<Main />} />
      </Routes>
    </>
  )
}

export default App
