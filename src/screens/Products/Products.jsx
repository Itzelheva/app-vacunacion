import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from "./Products.style"
import { useEffect, useState } from 'react'
import allProducts from "../../data/products"
import { Header, SearchInput } from "../../components"

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const { category } = route.params

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        product => product.category === category
      )
      const productsFiltered = products.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product =>
        product.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    }
  }, [category, keyword])
  

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword}/>
      <View style={styles.listContainer}>
        <FlatList
        data={arrProducts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", { vaccine: item})}>
          <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        />
      </View>
    </View>

  )
}

export default Products




{/* Vamos a tener un estado que va a identificar si ya hay una categoria seleccionada previamente
y en caso de que no sea asi, ira a buscar a todos los productos (vacunas).

Hay 2 estados:
1. guardar el arrreglo de los productos: const [arrProd, setArrProd] = useState([])
2. guardar el keyword de lo que este buscando el usuario: const [keyword, setKeyword] = useState("")

Hook useEfect: hook que desencadena eventos o efectos secundarios en la primera vez que se renderice el componente
, en este caso la renderizacion products en la pantalla. Se le colocan dependencias para que cuando hay un cambio
o una nueva busqueda, el useEffect vuelva a renderizar con la nueva info solicitada

Explicación del hook:
useEffect nos permite ejecutar algo cuando cambie algún dato dentro de nuestro componente.

1. Se hace una primera validación con la constante products donde products es igual a todos los productos de la data 
products que tenemos (cambiamos el nombre a allproducts)
Es decir, por cada producto donde la categoria de ese producto sea igual a la categoria que ya se le paso como propiedad
(se estan filtrando todos los productos que por categoria sean por ejemplo "lapts, smartphones, etc")
Se filtra por categoria

useEffect(() => {                                       
    if (category) {                                             
      const products = allProducts.filter(
        product => product.category === category
        )

2. Ahora se va a filtrar lo que ya se filtro en la primera parte (constante de arriba)
Es decir, por cada producto, filtre dependiendo lo que escriba el usuario.
Por cada producto, en su titulo, me incluya lo que escribe el usuario que es el "keyword"
Se filtra por lo que este buscando el usuario (cuando el usuario empieza a escribir mac, aparece lo relacionado a mac)

      const productsFiltered = products.filter(product =>
          product.title.includes(keyword)
        )
        setArrProducts(productsFiltered) ---> una vez que se haya filtrado, se setea el estado con los productos filttrados
y servirá para cuando el flatlist renderice y se puedan mostrar los productos filtrados

3. En caso de que no hayan categorias, solamente se hará el filtrado de todos los productos

      } else {
      const productsFiltered = allProducts.filter(product =>
        product.title.includes(keyword)
        )
        setArrProducts(productsFiltered) ---> una vez que se haya filtrado, se setea el estado con los productos filttrados
y servirá para cuando el flatlist renderice y se puedan mostrar los productos filtrados

Y todo el hook SE VA EJECUTAR cada vez que cambiemos de categoria o cuando el keyword de lo que escribe el usuario cambie

En cuanto al return del componente:
- se inserta el componente searchInput y con el onSearch y se envia el metodo setKeyword se setea en el estado keyword
*/}