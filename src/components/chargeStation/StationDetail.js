import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StationDetail = ({header, content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.about}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.location}>{content}</Text>
      </View>
    </View>
  );
};

export default StationDetail;

const styles = StyleSheet.create({
  container:{
    margin: 20,
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
