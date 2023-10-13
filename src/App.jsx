import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    <UserContextProvider className='bg-blue-100'>
      <h1>React context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>

  )
}
