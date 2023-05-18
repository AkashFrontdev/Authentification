import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { useContext } from 'react'
import { AuthContext } from './context/auth'

function App() {
const {token} = useContext(AuthContext);
if(token){
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}
else{
  return <Login/>
}
}

export default App
