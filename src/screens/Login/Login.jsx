import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from "./Login.styles"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'
import { setUser } from '../../features/auth/authSlice'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [triggerLogin, result] = useLoginMutation()
  const dispatch = useDispatch

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerLogin({
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
        <Text>Login to start</Text>
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
        <Pressable style={styles.loginButton} onPress={onSubmit} >
        <Text style={styles.textButtons} >Login</Text>
        </Pressable>
        <Pressable>
        <Text>Already have an account?</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate("SignUp") } >
        <Text style={styles.textButtons} >Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
