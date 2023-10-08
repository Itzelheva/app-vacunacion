import { View, FlatList } from 'react-native'
import styles from "./Home.style"
import dataCategories from "../../data/dataCategories"
import { CategoryItem } from "./components"
import { Header } from '../../components'

const Home = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <Header title={"Pediatras en Culiacán"} />
      <FlatList 
      data={dataCategories}
      keyExtractor={category => category}
      renderItem={({item}) => (
        <CategoryItem
        category={item}
        navigation={navigation}
        />    
      )} 
      />
    </View>

  )
}

export default Home



{/*

import { View, FlatList, SafeAreaView } from 'react-native'
import styles from "./Home.style"
import { CategoryItem } from "./components"
import { Header } from '../../components'
import { useGetCategoriesQuery } from '../../services/profilesApi'

const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery()
  console.log('Datos de Categorías:', data);

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header title={"Pediatras en Culiacán"} />
      {!isLoading && (
        <FlatList
        data={Array.isArray(data) ? data : []}
        keyExtractor={category => category.title || category.categoryId}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
      />
      )}
    </View>
    </SafeAreaView>
  )
}

export default Home
*/}