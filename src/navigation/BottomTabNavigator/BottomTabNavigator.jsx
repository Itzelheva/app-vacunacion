import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "../StackNavigator/StackNavigator";
import VaccineTrackerNavigator from "../VaccineTrackerNavigator/VaccineTrackerNavigator";
import styles from "./BottomTabNavigator.style"
import AntDesign from "@expo/vector-icons/AntDesign"
import { LocationS } from "../../screens";
 

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
            <AntDesign name="medicinebox" size={24} color={focused ? "yellow" : color="white"} />
          )
        }}
      />
      <BottomTab.Screen
        name="Vaccine Tracker Navigator"
        component={VaccineTrackerNavigator} options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="idcard" size={24} color={focused ? "yellow" : color="white"}  />
          )
        }}
      />
      <BottomTab.Screen
        name="Location"
        component={LocationS} options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="pushpin" size={24} color={focused ? "yellow" : color="white"}  />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;