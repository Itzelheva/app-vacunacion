import { View, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ProfileForm.style";
import AddProfile from "../../features/profile/profileSlice";

const ProfileForm = ({ onSubmit, navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthState, setBirthState] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = () => {
    const data = {
      name,
      lastName1,
      lastName2,
      nationality,
      birthState,
      gender,
      birthDate: {
        day: birthDate.day,
        month: birthDate.month,
        year: birthDate.year,
      },
    };
    dispatch(AddProfile(data));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido paterno"
        value={lastName1}
        onChangeText={setLastName1}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido materno"
        value={lastName2}
        onChangeText={setLastName2}
      />

      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        value={nationality}
        onChangeText={setNationality}
      />

      <TextInput
        style={styles.input}
        placeholder="Estado de nacimiento"
        value={birthState}
        onChangeText={setBirthState}
      />

      <TextInput
        style={styles.input}
        placeholder="Género"
        value={gender}
        onChangeText={setGender}
      />

      <TextInput
        style={styles.input}
        placeholder="Día de nacimiento (dd)"
        keyboardType="numeric"
        value={birthDate.day}
        onChangeText={(day) => setBirthDate({ ...birthDate, day })}
      />

      <TextInput
        style={styles.input}
        placeholder="Mes de nacimiento (mm)"
        keyboardType="numeric"
        value={birthDate.month}
        onChangeText={(month) => setBirthDate({ ...birthDate, month })}
      />

      <TextInput
        style={styles.input}
        placeholder="Año de nacimiento (aaaa)"
        keyboardType="numeric"
        value={birthDate.year}
        onChangeText={(year) => setBirthDate({ ...birthDate, year })}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar Perfil</Text>
      </Pressable>
    </View>
  );
};

export default ProfileForm;

{
  /* código para firebase

import { View, TextInput, Pressable, Text } from 'react-native';
import { useState } from 'react';
import styles from "./ProfileForm.style"

const ProfileForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthState, setBirthState] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: '' 
  });

  const handleSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}  
        placeholder="Apellido paterno"
        value={lastName1}
        onChangeText={setLastName1} 
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido materno"
        value={lastName2}
        onChangeText={setLastName2}
      />

      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        value={nationality}
        onChangeText={setNationality} 
      />

      <TextInput
        style={styles.input}
        placeholder="Estado de nacimiento"
        value={birthState}
        onChangeText={setBirthState}
      />

      <TextInput
        style={styles.input}
        placeholder="Género"
        value={gender}
        onChangeText={setGender}
      />

      <TextInput
        style={styles.input}
        placeholder="Día de nacimiento (dd)"
        keyboardType="numeric"
        value={birthDate.day}
        onChangeText={day => setBirthDate({...birthDate, day})}
      />

      <TextInput
        style={styles.input}
        placeholder="Mes de nacimiento (mm)"
        keyboardType="numeric" 
        value={birthDate.month}
        onChangeText={month => setBirthDate({...birthDate, month})}
      />    

      <TextInput
        style={styles.input}
        placeholder="Año de nacimiento (aaaa)"
        keyboardType="numeric"
        value={birthDate.year}
        onChangeText={year => setBirthDate({...birthDate, year})}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar Perfil</Text>
      </Pressable>

    </View>
  );

}

export default ProfileForm;

*/
}
