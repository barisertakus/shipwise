import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { selectStation } from "../../features/StationSlice";
import styled from "styled-components";
import CustomText from "../core/CustomText";
import { hp, wp } from "../../utils/responsiveScreen";

const StationCard = ({ name, location, navigation }) => {
  const dispatch = useDispatch();
  const handleClickStation = () => {
    dispatch(selectStation({ name, location }));
    navigation.navigate("ChargeStation");
  };

  return (
    <Container>
      <View>
        <CustomText title={name} h5 bold />
        <LocationText title={location} h6 />
      </View>

      <StyledButton onPress={handleClickStation}>
        <Icon name="arrow-forward" size={24} />
      </StyledButton>
    </Container>
  );
};

export default StationCard;

const Container = styled.View`
  background-color: lightgray;
  padding: ${hp(2.3)}px ${wp(5)}px;
  margin: ${hp(1)}px 0;
  border-radius: ${hp(2)}px;
  flex-direction: row;
  justify-content: space-between;
`;
const LocationText = styled(CustomText)`
  padding-top: ${hp(0.3)}px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: white;
  justify-content: center;
  padding: ${hp(1)}px ${hp(1.2)}px;
  border-radius: ${hp(1)}px;
`;
