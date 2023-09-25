import { Pressable, TextInput, View } from 'react-native'
import styles from "./SearchInput.style"
import { useState } from 'react'
import AntDesign from "@expo/vector-icons/AntDesign"  

const SearchInput = ({onSearch}) => {

  const [value, setValue] = useState("") //estado salvar lo que el usuario escribe

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue("");
    onSearch("");
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input} 
      value={value}
      onChangeText={setValue}
      placeholder='Buscar vacuna'
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color={"black"} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircleo" size={25} color={"black"} />
      </Pressable>
    </View>
  )
}

export default SearchInput



{/* <aqui hay 2 funciones: 
1. funcion search donde el usuario va a buscar dentro de las vacunas y va ejecutar onsearch del value (estado) y onsearch
se va a recibir por medio de props porque es un componente generico y se va a ejecutar en el componente
en el que lo deseemos utilizar.

2. funcion para limpiar las busqueda (input), dentro se pone "setValue("")" para que se borre lo que se busca y buscar
otra cosa y también se coloca "onSearch("")" para que la busqueda se reinicie

Dentro de textInput, se coloca value(que es el estado de arriba) de lo que buscará el usuario,
onchangeText: capta y escucha lo que escribe el usario y se setea en setvalue y placeholder: ayuda al usuario.

Se agregan dos iconos en un pressable (el de buscar y borrar) y a cada icono se agrega la funcion de search para que al 
hacer click ejecute la funcion onsearch (de buscar) y al presionar el otro icono ejecute la funcion de clearinput (limpiar) 

*/}