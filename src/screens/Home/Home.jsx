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

