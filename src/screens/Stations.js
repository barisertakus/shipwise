import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import StationCard from "../components/stations/StationCard";
import Header from "../components/core/Header";
import { Image } from "native-base";
import SafeLayout from "../components/core/SafeLayout";


const IMAGE_URL = "../../assets/images/logo.png";

const Stations = ({ navigation }) => {
  return (
    <SafeLayout>
      <Header header="Stations" noneBack />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Welcome to</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image alt="station" style={styles.image} source={require(IMAGE_URL)} />
      </View>

      <View style={styles.stations}>
      <StationCard
        name="Station #1"
        location="Istanbul, Turkey"
        navigation={navigation}
      />
      <StationCard
        name="Station #2"
        location="Sakarya, Turkey"
        navigation={navigation}
      />
      <StationCard
        name="Station #3"
        location="Ankara, Turkey"
        navigation={navigation}
      />
      </View>
 
    </SafeLayout>
  );
};

export default Stations;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  headerTxt: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  stations:{
    marginBottom: 10
  },
});
