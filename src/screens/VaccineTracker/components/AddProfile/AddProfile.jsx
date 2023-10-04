import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./AddProfile.style";


const AddProfile = () => {
  const navigation = useNavigation();

  const onSubmit = (form) => {
    //Enviar formulario
    navigation.goBack();
  };

  return 
  <ProfileForm onSubmit={onSubmit} />;
};

export default AddProfile;

