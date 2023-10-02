import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centra los elementos horizontalmente
    backgroundColor: 'white', // Cambia el color de fondo según tus preferencias
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    minWidth: 90,
    width: "85%",
    height:50,
    minHeight: 30,
  },
  input: {
    height: 40,
    width: "90%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 4,
    paddingVertical: 10, 
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})