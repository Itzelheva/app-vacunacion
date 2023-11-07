import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from "./Login.styles"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    console.log('Login button');
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        console.log('Resultado del inicio de sesión:', result);
        if (result && result.email) {
          dispatch(setUser(result));
          insertSession({
            localId: result.localId,
            email: result.email,
            token: result.idToken,
          })
            .then((dbResult) => console.log('Resultado de la inserción en la base de datos:', dbResult))
            .catch((dbError) => console.log('Error al insertar en la base de datos:', dbError.message));
        } else {
          console.log('Respuesta de inicio de sesión no válida:', result);
        }
      })
      .catch((err) => console.log('Error en el inicio de sesión:', err));
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
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit} >
        <Text style={styles.textButtons} >Login</Text>
        </Pressable>
        <Pressable>
        <Text>No have an account?</Text>
        </Pressable>
        <Pressable 
          style={styles.signUpButton} 
          onPress={() => navigation.navigate("SignUp") } 
        >
        <Text style={styles.textButtons} >Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login
