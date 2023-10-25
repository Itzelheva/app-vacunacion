import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from "./Login.styles"

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Login to start</Text>
        <TextInput style={styles.inputEmail} />
        <TextInput style={styles.inputPassword} />
        <Pressable style={styles.loginButton} >
        <Text style={styles.textButtons} >Login</Text>
        </Pressable>
        <Pressable>
        <Text>No have an account?</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} >
        <Text style={styles.textButtons} >Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
