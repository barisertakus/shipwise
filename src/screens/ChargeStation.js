import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StationHeader from "../components/chargeStation/StationHeader";
import StationDetail from "../components/chargeStation/StationDetail";
import SafeLayout from "../components/core/SafeLayout";
import { colors } from "../utils/colors";
import CustomText from "../components/core/CustomText";

const ChargeStation = ({navigation}) => {

  const navigateToAppointment = () => {
    navigation.navigate("Appointment");
  }

  return (
    <SafeLayout style={styles.container}>
      <StationHeader />
      <View style={styles.stations}>
        <StationDetail header="About Station" content="It works!!" />
        <StationDetail
          header="Working Time"
          content="Mon - Sat (08:30 AM - 09:00 PM)"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToAppointment}>
        <CustomText title="Book Appointment" style={styles.btnText} bold />
      </TouchableOpacity>
    </SafeLayout>
  );
};

export default ChargeStation;

const styles = StyleSheet.create({
  stations: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.button,
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
