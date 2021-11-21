import './App.css';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile/:username" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
