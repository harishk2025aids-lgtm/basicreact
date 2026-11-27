import { useContext } from 'react'
import UserContext from '../UserContext'

function Profile() {
  const { username, age } = useContext(UserContext)

  return (
    <>
      <h1>name: {username}</h1>
      <h1>age: {age}</h1>
    </>
  )
}

export default Profile