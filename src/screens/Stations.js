import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import StationCard from "../components/stations/StationCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/core/Header";
import { Image } from "react-native-elements";

const IMAGE_URL = "../../assets/images/logo.png";

const Stations = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header header="Stations" noneBack />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Welcome to</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require(IMAGE_URL)} />
      </View>
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
    </SafeAreaView>
  );
};

export default Stations;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: "bold",
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
});
