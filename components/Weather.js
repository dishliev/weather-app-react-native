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

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b20804012f604fe0be183fa2719dd840`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const clear = async () => {
    setCity("");
    setWeatherData(null);
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
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View style={{ flex: 1, marginRight: 5 }}>
          <Button
            onPress={fetchWeatherData}
            title="Search"
            color="#77DD77"
            width="30"
          ></Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button onPress={clear} title="Clear" color="#841584"></Button>
        </View>
      </View>
      {weatherData ? <WeatherData weatherData={weatherData} /> : ""}
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
  },
  titleText: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: 400,
  },
  row: {
    marginLeft: 9,
    marginRight: 9,
    alignItems: "flex-start",
    flexDirection: "row",
  },
});

export default Weather;
