import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "../StackNavigator/StackNavigator";
import styles from "./BottomTabNavigator.style"
import AntDesign from "@expo/vector-icons/AntDesign"
import { LocationS, VaccineTracker } from "../../screens";
 

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
        name="Vaccine Tracker"
        component={VaccineTracker} options={{
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