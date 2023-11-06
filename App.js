import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator/MainNavigator";
import { useFonts } from "expo-font"
import fonts from "./src/global/fonts"
import { Provider } from "react-redux";
import { store } from "./src/store";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} >
    <Provider store={store} >
     <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
    </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  },
})

