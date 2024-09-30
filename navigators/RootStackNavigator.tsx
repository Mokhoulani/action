import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

type RootstackPramaList = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootstackPramaList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
}
