/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllWidgets from "../screens/AllWidgets";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
               headerShown: false,
            }}>
            <Stack.Screen
               name="AllWidgets"
               component={AllWidgets}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
