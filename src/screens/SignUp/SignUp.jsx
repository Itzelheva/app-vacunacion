import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from "./SignUp.styles"

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput style={styles.inputEmail} />
        <TextInput style={styles.inputPassword} />
        <TextInput style={styles.inputPassword} />
        <Pressable style={styles.loginButton} >
        <Text style={styles.textButtons} >Sign up</Text>
        </Pressable>
        <Pressable>
        <Text>Already have an account?</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} >
        <Text style={styles.textButtons} >Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUp