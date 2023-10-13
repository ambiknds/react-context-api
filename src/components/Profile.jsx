import UserContext from '../context/UserContext'
import { useContext } from 'react'

export default function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <h2  className="text-xl font-bold">Please login to view your profile</h2>
  return (
    <div>
      <h2
        className="text-xl font-bold"
        >Profile: {user.username}</h2>
    </div>
  )
}