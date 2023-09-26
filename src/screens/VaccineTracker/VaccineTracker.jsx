import { View } from 'react-native'
import React from 'react'
import { ProfileForm } from "./components"
import styles from "./VaccineTracker.style"


const VaccineTracker = () => {

  return (
    <View style={styles.container}>
      <ProfileForm />
    </View>
  )
}

export default VaccineTracker
