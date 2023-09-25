import { View, Button } from 'react-native'
import React from 'react'
import { ProfileForm } from "./components"
import { useState } from 'react'

const VaccineTracker = () => {

  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles([...profiles , profile]);
  }

  return (
    <View>
      < ProfileForm onSubmit={addProfile} />
      <Button title="Agregar Perfil" onPress={addProfile} />
    </View>
  )
}

export default VaccineTracker
