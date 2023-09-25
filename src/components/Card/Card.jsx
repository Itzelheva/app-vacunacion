import { View } from 'react-native'
import styles from "./Card.style"

const Card = ({children, style}) => {
  return (
    <View style={[styles.container, style]}> 
      {children}
    </View>
  )
}

export default Card




{/* Componente card es generico con ciertos estilos ya predefinidos para renderizar lo que llegue a necesitar 
(cualquier tipo de componente como hijo) p/e: un texto,una imagen y como todavía no sabemos, lo hacemos mediante un children 
(hijo de view) y hay que destructurar para poderlo utilizar en el resto de componentes.
- En la destructuración también agregamos un style, porque el card ya va a tener estilos predefinidos
pero es probable que queramos modificar más o menos estilos de los que ya tiene. style ayuda
a sobrreescribir los estilos en caso de que así lo necesitemos */}


{/* <View style={[styles.container, style]}>: asi se agrega el estilo extra al children */}