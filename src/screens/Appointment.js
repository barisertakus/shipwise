import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/core/CustomText";
import { wp } from "../utils/responsiveScreen";
import Header from "../components/core/Header";
import DayCards from "../components/appointment/DayCards";
import TimeCards from "../components/appointment/TimeCards";
import { Input } from "react-native-elements";

const Appointment = () => {
  return (
    <SafeAreaView>
      <Header header="New Appointment" />
      <Container>
        <Days>
          <CustomText h5 bold title="April, 2022" />
          <DayCards />
        </Days>
        <Times>
          <CustomText h5 bold title="Available Time" />
          <TimeCards />
        </Times>
        <Details>
        <CustomText p title="Full name" />
        <Input />
        <CustomText p title="Duration" />
        <Input />
        <CustomText p title="Description" />
        <Input />
        <TouchableOpacity><CustomText title="Set Appointment" /></TouchableOpacity>
        </Details>
      </Container>
    </SafeAreaView>
  );
};

export default Appointment;

const Container = styled.View`
  margin: 0 ${wp("5%")}px;
`;

const Days = styled.View``;

const Times = styled.View``;

const Details = styled.View``;
