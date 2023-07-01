import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Platform,
} from "react-native";
import axios from "axios";
import WeatherData from "./WeatherData";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const fetchWeatherData = async () => {
    if (location === "") {
      showAlert("Search", "Please enter a location.");
    } else {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b20804012f604fe0be183fa2719dd840`
        );
        setWeatherData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          showAlert("Error", "Location not found.");
        } else {
          console.error("Error fetching weather data:", error);
        }
      }
    }
  };

  const clear = async () => {
    setLocation("");
    setWeatherData(null);
  };

  const showAlert = (title, msg) => {
    setAlertTitle(title);
    setAlertMessage(msg);
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name="partly-sunny-outline" size={30} />
        <Text style={styles.titleText}>Weather</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={{ flex: 1, flexBasis: 130 }}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Button
            onPress={fetchWeatherData}
            title="Search"
            color="#77DD77"
            width="30"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button onPress={clear} title="Clear" color="#841584" />
        </View>
      </View>
      {weatherData ? <WeatherData weatherData={weatherData} /> : null}

      <Modal isVisible={isAlertVisible} onBackdropPress={hideAlert}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{alertTitle}</Text>
          <Text style={styles.modalMessage}>{alertMessage}</Text>
          <Button title="OK" onPress={hideAlert} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS == "android" ? 30 : 0,
  },
  searchContainer: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#77DD77",
    paddingHorizontal: 10,
    marginRight: 5,
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#F4F4F4",
    color: "#333333",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titleText: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#333333",
    textShadowColor: "#CCCCCC",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  row: {
    marginLeft: 9,
    marginRight: 9,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Weather;
