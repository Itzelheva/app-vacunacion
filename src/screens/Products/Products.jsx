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


