import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  //user state is created so chat children will get acces to all data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider