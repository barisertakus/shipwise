import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import StationCard from "../components/stations/StationCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Stations = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, []);

  return (
    <SafeAreaView>
      <StationCard name="Station #1" location="Istanbul, Turkey" />
      <StationCard name="Station #2" location="Sakarya, Turkey" />
      <StationCard name="Station #3" location="Ankara, Turkey" />
    </SafeAreaView>
  );
};

export default Stations;

const styles = StyleSheet.create({});
