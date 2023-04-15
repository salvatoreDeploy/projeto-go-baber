import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { AuthRoutes } from "./src/routes";
import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto-slab";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: "#312e38" }}>
        <AuthRoutes />
      </View>
    </NavigationContainer>
  );
}
