import React from "react";
import { Text, View, StyleSheet } from "react-native";

const WeatherData = ({ weatherData }) => {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.row}>
          <Text style={styles.textH}>
            {weatherData.name}, {weatherData.sys.country}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{`Temperature: `}</Text>
          <Text style={styles.textBold}>{`${weatherData.main.temp}°C`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{`Feels Like: `}</Text>
          <Text
            style={styles.textBold}
          >{`${weatherData.main.feels_like}°C`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{`Humidity: `}</Text>
          <Text style={styles.textBold}>{weatherData.main.humidity}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{`Visibility: `}</Text>
          <Text style={styles.textBold}>{weatherData.visibility}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginLeft: 9,
    marginRight: 9,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  col: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#77DD77",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#737373",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textH: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WeatherData;
