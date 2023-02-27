import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// import WebView from "react-native-webview";
// import YouTube from "react-native-youtube-iframe";

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNewScreen}>
        <Text style={styles.message}>
          Для початку роботи, потрібно надати доступ до ютуб акаунта
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Надати доступ</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  containerNewScreen: {
    width: "80%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#000",
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#000",
  },
  addButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: "red",
    fontSize: 18,
  },
});

export default App;
