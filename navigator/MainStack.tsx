/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllWidgets from "../screens/AllWidgets";
import AddNewMailClip from "../screens/AddNewMailClip";

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
            <Stack.Screen
               name="AddNewMailClip"
               component={AddNewMailClip}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
