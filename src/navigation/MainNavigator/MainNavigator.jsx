import React from 'react'
import { useState } from 'react'
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator"
import AuthStackNavigator from "../AuthStackNavigator/AuthStackNavigator"
import { useSelector } from 'react-redux'


const MainNavigator = () => {
  const user = useSelector(state => state.auth.user)

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator

