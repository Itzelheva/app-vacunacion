import { Pressable, Text } from 'react-native'
import { Card } from "../../../../components"
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable 
      onPress= {() => navigation.navigate("Products", { category })}>
      <Card style={styles.cardContainer}>               
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem



{/* Componente CategoryItem: es el que me va ayudar al estilo de como se va
a renderear cada uno de los elementos de la lista
- Componente pressable con propiedad de ser presionado
- Componente card (children) que a su vez es un texto donde se esta llamando a las categorias
a las que puedo presionar para que me mande a otra pantalla y ver los productos de esa categoria 
 Este componente es el render del flatlist del componente categories 
Se esta recibiendo el item de cada {category} o elementos */}

{/* <Card style={styles.cardContainer}>: aqui vamos a poner propios estilos, no los predet del card */}