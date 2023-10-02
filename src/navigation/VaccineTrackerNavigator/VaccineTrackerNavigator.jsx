import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VaccineTracker, ProfileForm } from "../../screens";

const Stack = createNativeStackNavigator();
function VaccineTrackerNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="VaccineTracker"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="VaccineTracker" component={VaccineTracker} />
      <Stack.Screen name="ProfileForm" component={ProfileForm} />
    </Stack.Navigator>
  );
}

export default VaccineTrackerNavigator;