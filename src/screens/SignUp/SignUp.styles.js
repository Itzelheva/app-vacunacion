import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    paddingHorizontal: 15,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    width: "95%",
    backgroundColor: colors.primary,
    height: 30,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPassword: {
    width: "95%",
    backgroundColor: colors.primary,
    height: 30,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton:{
    backgroundColor: colors.primary,
    width: "50%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: colors.primary,
    width: "50%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtons: {
    color: "white",
  },
})