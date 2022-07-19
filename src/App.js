import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/login'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
