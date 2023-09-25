import { Text, View } from 'react-native'
import styles from "./Header.style"

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header



{/* Este componente header es generíco para que se pueda utilizar en otras partes de código para 
ayudar en la navegación. Se utiliza con la propiedad title */}