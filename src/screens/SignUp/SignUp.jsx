import { Pressable, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import styles from "./SignUp.styles"
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignUp({
      email,
      password,
    })
    console.log(result)
    if(result.isSuccess) {
      dispatch(setUser (result))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Sign up to start</Text>
        <TextInput 
          style={styles.inputEmail} 
          value={email} 
          onChangeText={setEmail} 
        />
        <TextInput 
          style={styles.inputPassword} 
          value={password} 
          onChangeText={setPassword} 
        />
        <TextInput 
          style={styles.inputPassword} 
          value={confirmPass} 
          onChangeText={setConfirmPass} 
        />
        <Pressable style={styles.loginButton} onPress={onSubmit} >
          <Text style={styles.textButtons} >Sign up</Text>
        </Pressable>
        <Pressable>
        <Text>No have an account?</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate("Login")} >
          <Text style={styles.textButtons} >Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUp