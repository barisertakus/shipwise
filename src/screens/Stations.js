import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import StationCard from "../components/stations/StationCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/core/Header";

const Stations = ({ navigation }) => {
 

  return (
    <SafeAreaView>
      <Header header="Stations" noneBack />
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

const styles = StyleSheet.create({});
