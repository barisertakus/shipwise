import React from "react";
import StationHeader from "../components/chargeStation/StationHeader";
import StationDetail from "../components/chargeStation/StationDetail";
import SafeLayout from "../components/core/SafeLayout";
import Button from "../components/core/Button";
import styled from "styled-components";
import { wp } from "../utils/responsiveScreen";
import { useSelector } from "react-redux";
import { stationSelector } from "../features/StationSlice";

const ChargeStation = ({ navigation }) => {

  const station = useSelector(stationSelector);

  const navigateToAppointment = () => {
    navigation.navigate("Appointment");
  };

  return (
    <SafeLayout>
      <Container>
        <StationHeader />
        <Stations>
          <StationDetail header="About Station" content={station.about} />
          <StationDetail
            header="Working Hours"
            content={station.shift}
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
