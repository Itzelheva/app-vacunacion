import { View, TextInput, Pressable, Text, Picker } from 'react-native';
import { useState } from 'react';
//import DateTimePicker from '@react-native-community/datetimepicker';

const ProfileForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthState, setBirthState] = useState('');
  const [birthDate, setBirthDate] = useState(null);

  const handleSubmit = () => {
    const formData = {
      name,
      lastName1,
      lastName2,
      nationality,
      birthState,
      birthDate,
    };
    onSubmit(formData);
  };

  return (
    <View>

      <TextInput
        placeholder="Nombre(s)"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Primer apellido"
        value={lastName1}
        onChangeText={setLastName1} 
      />

      <TextInput
        placeholder="Segundo apellido"
        value={lastName2}
        onChangeText={setLastName2}
      />

      <TextInput
        placeholder="Nacionalidad"
        value={nationality}
        onChangeText={setNationality} 
      />

      <TextInput
        placeholder="Estado de nacimiento"
        value={birthState}
        onChangeText={setBirthState}
      />
       {/* 
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}  
      >
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Femenino" value="female" />
      </Picker>

      <DatePicker
        date={birthDate}
        onDateChange={setBirthDate}
      />
      */}

    </View>
  );

}

export default ProfileForm;