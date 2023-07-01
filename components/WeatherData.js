import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const WeatherData = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          {weatherData.name}, {weatherData.sys.country}
        </Text>
      </View>
      <View style={styles.weatherContainer}>
        {weatherData && weatherData.weather && weatherData.weather[0] && (
          <View style={styles.weatherInfo}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
              }}
              style={styles.weatherImage}
            />
            <View style={styles.weatherText}>
              <Text style={styles.weatherMain}>
                {weatherData.weather[0].main}
              </Text>
              <Text style={styles.weatherDescription}>
                {weatherData.weather[0].description}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.weatherDataContainer}>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Temperature:</Text>
            <Text
              style={styles.weatherDataValue}
            >{`${weatherData.main.temp}°C`}</Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Feels Like:</Text>
            <Text
              style={styles.weatherDataValue}
            >{`${weatherData.main.feels_like}°C`}</Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Humidity:</Text>
            <Text style={styles.weatherDataValue}>
              {weatherData.main.humidity}
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Visibility:</Text>
            <Text style={styles.weatherDataValue}>
              {weatherData.visibility}
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Pressure:</Text>
            <Text style={styles.weatherDataValue}>
              {weatherData.main.pressure} hPa
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Wind Speed:</Text>
            <Text style={styles.weatherDataValue}>
              {weatherData.wind.speed} m/s
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Wind Direction:</Text>
            <Text style={styles.weatherDataValue}>{weatherData.wind.deg}°</Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Cloudiness:</Text>
            <Text style={styles.weatherDataValue}>
              {weatherData.clouds.all}%
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Sunrise:</Text>
            <Text style={styles.weatherDataValue}>
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </Text>
          </View>
          <View style={styles.weatherDataItem}>
            <Text style={styles.weatherDataLabel}>Sunset:</Text>
            <Text style={styles.weatherDataValue}>
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#77DD77",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#77DD77",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  weatherContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  weatherInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  weatherImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  weatherText: {
    flexDirection: "column",
  },
  weatherMain: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  weatherDescription: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666666",
  },
  weatherDataContainer: {
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: "#77DD77",
  },
  weatherDataItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  weatherDataLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginRight: 10,
  },
  weatherDataValue: {
    fontSize: 16,
    color: "#666666",
  },
});

export default WeatherData;
