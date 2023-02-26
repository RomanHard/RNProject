import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleAppleLogin = () => {
    // Handle Apple login
  };

  const handleLogin = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setRegisterModalVisible(false);
  };

  const handleLoginPress = () => {
    // Handle login
    // Navigate to new page
  };

  const handleRegister = () => {
    setRegisterModalVisible(true);
  };

  const handleRegisterPress = () => {
    // Handle registration
    // Navigate to new page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Екран входу</Text>

      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Text style={styles.buttonText}>Увійти через Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAppleLogin}>
        <Text style={styles.buttonText}>Увійти через Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Зареєструватися</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ім'я користувача"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Увійти" onPress={handleLoginPress} />
          <Button title="Скасувати" onPress={handleCancel} color="gray" />
        </View>
      </Modal>

      <Modal visible={registerModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ім'я користувача"
            value={registerUsername}
            onChangeText={(text) => setRegisterUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            value={registerPassword}
            onChangeText={(text) => setRegisterPassword(text)}
          />
          <Button title="Зареєструватися" onPress={handleRegisterPress} />
          <Button title="Скасувати" onPress={handleCancel} color="gray" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    width: 200,
    height: 50,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginScreen;
