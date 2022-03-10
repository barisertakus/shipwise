import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { stationSelector } from "../../features/StationSlice";
import { Image } from "react-native-elements";
import Header from "../../components/core/Header";

const IMAGE_URL = "../../../assets/images/charge1.jpeg";

const StationHeader = () => {
  const station = useSelector(stationSelector);
  return (
    <View>
      <Header header={station.name} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require(IMAGE_URL)} />
      </View>

      <View style={styles.headers}>
        <Text style={styles.header}>{station.name}</Text>
        <Text style={styles.location}>{station.location}</Text>
      </View>
    </View>
  );
};

export default StationHeader;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  headers: {
    paddingTop: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  location: {
    fontSize: 16,
  },
});
