import { useState, useContext } from 'react'

import UserContext from '../context/UserContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <div className='flex flex-col border border-black m-1 p-1 rounded-md'>
      <h2>Login</h2>
      <input
        className='border border-black rounded-md m-1 p-1'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        className='border border-black rounded-md m-1 p-1'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button 
        className='border bg-blue-400 border-black rounded-md m-2 px-5 py-1'
        onClick={handleSubmit}
      >Submit</button>
    </div>

  )
}
