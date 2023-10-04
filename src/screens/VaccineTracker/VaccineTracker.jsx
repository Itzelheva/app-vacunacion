import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProfile } from "./components"
import styles from "./VaccineTracker.style"


const VaccineTracker = ({navigation}) => {

  const profiles = useSelector(state => state.profiles.list);

  const dispatch = useDispatch();

  const onAddProfile = (profile) => {
    dispatch(AddProfile(profile));
  }

  return (

    <View style={styles.container}>
      <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('ProfileForm')}>
      <Text style={styles.buttonText}>Crear Nuevo Perfil</Text>
      </Pressable>

      <FlatList
        data={profiles}
        renderItem={({item}) => (
          <Text>{item.name}</Text>  
        )}
      />
    </View>
  )
}

export default VaccineTracker


