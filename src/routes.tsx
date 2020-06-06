import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Detail from "./pages/Detail";

const ApPStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <ApPStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <ApPStack.Screen name="Home" component={Home} />
        <ApPStack.Screen name="Points" component={Points} />
        <ApPStack.Screen name="Detail" component={Detail} />
      </ApPStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
