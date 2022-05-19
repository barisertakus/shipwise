import React from "react";
import StationHeader from "../components/chargeStation/StationHeader";
import StationDetail from "../components/chargeStation/StationDetail";
import SafeLayout from "../components/core/SafeLayout";
import Button from "../components/core/Button";
import styled from "styled-components";
import { wp } from "../utils/responsiveScreen";

const ChargeStation = ({ navigation }) => {
  const navigateToAppointment = () => {
    navigation.navigate("Appointment");
  };

  return (
    <SafeLayout>
      <Container>
        <StationHeader />
        <Stations>
          <StationDetail header="About Station" content="It works!!" />
          <StationDetail
            header="Working Time"
            content="Mon - Sat (08:30 AM - 09:00 PM)"
          />
        </Stations>
        <Button title="Book Appointment" handlePress={navigateToAppointment} />
      </Container>
    </SafeLayout>
  );
};

export default ChargeStation;

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const Stations = styled.View`
  flex: 1;
`;
