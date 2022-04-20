import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";
import { colors } from "../../utils/colors";

const Header = ({ header, noneBack }) => {
  const navigation = useNavigation();
  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {noneBack ? (
        <View style={styles.empty} />
      ) : (
        <TouchableOpacity style={styles.icon} onPress={goBack}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
      )}
      <CustomText h5 title={header} />
      <View style={styles.empty} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1
  },
  empty: {
    padding: 21,
  },
});
