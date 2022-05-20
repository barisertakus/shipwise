import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { stationSelector } from "../../features/StationSlice";
import { Image } from "native-base";
import Header from "../../components/core/Header";
import styled from "styled-components";
import { hp } from "../../utils/responsiveScreen";
import CustomText from "../core/CustomText";

const IMAGE_URL = "../../../assets/images/charge1.jpeg";

const StationHeader = () => {
  const station = useSelector(stationSelector);
  return (
    <View>
      <Header header={station.name} />
      <ImageContainer>
        <StyledImage alt="station-header" source={require(IMAGE_URL)} />
      </ImageContainer>

      <Headers>
        <CustomText title={station.name} h4 bold />
        <LocationText title={station.location} h5 />
      </Headers>
    </View>
  );
};

export default StationHeader;

const StyledImage = styled(Image)`
  width: ${hp(30)}px;
  height: ${hp(30)}px;
  border-radius: ${hp(3)}px;
`;
const ImageContainer = styled.View`
  align-items: center;
`;
const Headers = styled.View`
  padding-top: 20px;
  align-items: center;
`;

const LocationText = styled(CustomText)`
  padding-top: ${hp(1)}px;
`;
