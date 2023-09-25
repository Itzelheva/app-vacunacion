import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VaccineTrackerNavigator from "../VaccineTrackerNavigator/VaccineTrackerNavigator";
import StackNavigator from "../StackNavigator/StackNavigator";
import styles from "./BottomTabNavigator.style"
import AntDesign from "@expo/vector-icons/AntDesign"
 

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Esquema de vacunación"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Esquema de vacunación"
        component={StackNavigator} options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="medicinebox" size={24} color={focused ? "#fff" : color="yellow"} />
          )
        }}
      />
      <BottomTab.Screen
        name="Vaccine Tracker"
        component={VaccineTrackerNavigator} options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="idcard" size={24} color={focused ? "#fff" : color="yellow"}  />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;