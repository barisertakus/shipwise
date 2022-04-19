import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StationHeader from "../components/chargeStation/StationHeader";
import StationDetail from "../components/chargeStation/StationDetail";

const ChargeStation = ({navigation}) => {

  const navigateToAppointment = () => {
    navigation.navigate("Appointment");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StationHeader />
      <View style={styles.stations}>
        <StationDetail header="About Station" content="It works!!" />
        <StationDetail
          header="Working Time"
          content="Mon - Sat (08:30 AM - 09:00 PM)"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToAppointment}>
        <Text style={styles.btnText}>Book Appointment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChargeStation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stations: {
    flex: 1,
  },
  button: {
    backgroundColor: "#3E64FF",
    padding: 20,
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
});
