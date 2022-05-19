import { Box } from "native-base";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import DayCards from "../components/appointment/DayCards";
import TimeCards from "../components/appointment/TimeCards";
import CustomText from "../components/core/CustomText";
import DropdownList from "../components/core/Dropdown";
import Header from "../components/core/Header";
import Input from "../components/core/Input";
import SafeLayout from "../components/core/SafeLayout";
import { colors } from "../utils/colors";
import { getToday } from "../utils/dateUtils";
import { hp, wp } from "../utils/responsiveScreen";

const list = [
  { label: "30 Minutes", value: "30min" },
  { label: "60 Minutes", value: "60min" },
  { label: "90 Minutes", value: "90min" },
  { label: "120 Minutes", value: "120min" },
];

const formatter = new Intl.DateTimeFormat('en', { month: 'long' });

const Appointment = () => {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const today = getToday();

  const handlePressDay = (day, title) => {
    setSelectedDate(day+title);
  }

  const handlePressTime = (time) => {
    setSelectedTime(time);
  }

  const month = formatter.format(today);

  return (
    <SafeLayout>
      <KeyboardAvoidingView behavior="position">
        <Header header="New Appointment" />
        <Container>
          <Days>
            <CustomText title={`${month}, ${today.getFullYear()}`} h3 bold />
            <DayCards handlePress={handlePressDay} selectedDate={selectedDate} />
          </Days>
          <Times>
            <CustomText title="Available Time" h3 bold />
            <TimeCards handlePress={handlePressTime} selectedTime={selectedTime} />
          </Times>
          <CustomText title="Details" h3 bold />

          <Details>
            <MarginText title="Full name" p />
            <Input />
            <CustomText title="Duration" p />
            <Box w="full">
              <DropdownList list={list} />
            </Box>

            <MarginText title="Description" p />
            <Input borderRadius={10} />

            <Button>
              <WhiteText title="Set Appointment" h5 bold />
            </Button>
          </Details>
        </Container>
      </KeyboardAvoidingView>
    </SafeLayout>
  );
};

export default Appointment;

const Container = styled.View`
  margin: 0 ${wp(5)}px;
`;

const Days = styled.View`
  margin: ${hp(0.3)}px 0;
`;

const Times = styled.View``;

const Details = styled.View`
  margin: ${hp(1)}px 0;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.button};
  padding: ${hp(2.3)}px;
  align-items: center;
  margin: ${hp(1)}px 0;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const WhiteText = styled(CustomText)`
  color: white;
`;

const MarginText = styled(CustomText)`
  margin-bottom: ${hp(1)}px;
`;
