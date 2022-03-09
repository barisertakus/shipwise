import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const StationCard = ({name, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <Icon name="arrow-forward" size={24}></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default StationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    paddingTop: 5,
  },
  icon: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
});
