import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../../db'
import { setUser } from '../../features/auth/authSlice'
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator"
import AuthStackNavigator from "../AuthStackNavigator/AuthStackNavigator"

const MainNavigator = () => {
  //const [user, setuser] = useState(null)
  const { user, localId } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const session = await fetchSession()
        console.log('Esta es la sesion', session)
        if (session.rows.length) {
          console.log(session.rows._array[0])
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator

