import { Text, View } from 'react-native'
import styles from "./Header.style"
import Feather from '@expo/vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'

const Header = ({title}) => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(clearUser())
    deleteSession()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Feather name="log-out" size={24} onPress={logOut} />
    </View>
  )
}

export default Header



{/* Este componente header es genérico para que se pueda utilizar en otras partes de código para 
ayudar en la navegación. Se utiliza con la propiedad title */}