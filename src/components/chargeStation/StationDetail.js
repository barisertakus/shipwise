import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import CustomText from "../core/CustomText";
import { hp } from "../../utils/responsiveScreen";

const StationDetail = ({header, content}) => {
  return (
    <Container>
      <View>
        <CustomText title={header} h4 bold />
        <LocationText title={content} h5 />
      </View>
    </Container>
  );
};

export default StationDetail;

const Container = styled.View`
  margin: ${hp(3)}px 0;
`

const LocationText = styled(CustomText)`
  padding-top: ${hp(0.5)}px;
`
