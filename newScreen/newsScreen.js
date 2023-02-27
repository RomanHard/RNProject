import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Нехай це буде головна сторінка</Text>
    </View>
  );
};

const ScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
    </View>
  );
};

const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="NewScreen" component={NewScreen} />
        <Tab.Screen name="ScreenOne" component={ScreenOne} />
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
