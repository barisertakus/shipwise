import { Box } from "native-base";
import { useState } from "react";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import DayCards from "../components/appointment/DayCards";
import TimeCards from "../components/appointment/TimeCards";
import Button from "../components/core/Button";
import CustomText from "../components/core/CustomText";
import Divider from "../components/core/Divider";
import DropdownList from "../components/core/Dropdown";
import Header from "../components/core/Header";
import Input from "../components/core/Input";
import SafeLayout from "../components/core/SafeLayout";
import { hp, wp } from "../utils/responsiveScreen";
import Icon from "@expo/vector-icons/AntDesign";
import api from "../utils/api";
import {
  isFirstMonth,
  isLastMonth,
  getFirstMonth,
  getNextMonth,
  getLastMonth,
  getPrevMonth,
  isThisMonth,
  getMonthIndex,
  getToday,
  getMonth,
} from "../utils/dateUtils";
import WarnPopup from "../components/appointment/WarnPopup";
import { useEffect } from "react";

const list = [
  { label: "30 Minutes", value: 30 },
  { label: "60 Minutes", value: 60 },
  { label: "90 Minutes", value: 90 },
  { label: "120 Minutes", value: 120 },
];

// new Date(year,getMonthIndex(month),selectedDate).toISOString().split("T")[0]

const Appointment = ({ navigation }) => {
  const today = new Date();
  const [month, setMonth] = useState(getMonth(today.getMonth()));
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [fullSlots, setFullSlots] = useState([]);

  // modal
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  const handlePressDay = (day) => {
    setSelectedDate(day);
    setSelectedTime("");
  };

  const handlePressTime = (time) => {
    setSelectedTime(time);
  };

  const handleNextMonth = () => {
    if (isLastMonth(month)) {
      setMonth(getFirstMonth());
      setYear(year + 1);
      setSelectedDate(1);
    } else {
      const nextMonth = getNextMonth(month);
      setMonth(nextMonth);
      let checkThisMonth = isThisMonth(getMonthIndex(nextMonth), year);
      let dateWillStart = checkThisMonth ? getToday().getDate() : 1;
      setSelectedDate(dateWillStart);
    }
  };

  const handlePrevMonth = () => {
    if (!isThisMonth(getMonthIndex(month), year)) {
      if (isFirstMonth(month)) {
        const prevMonth = getLastMonth();
        setMonth(prevMonth);
        setYear(year - 1);
        let checkThisMonth = isThisMonth(getMonthIndex(prevMonth), year);
        let dateWillStart = checkThisMonth ? getToday().getDate() : 1;
        setSelectedDate(dateWillStart);
      } else {
        const prevMonth = getPrevMonth(month);
        setMonth(prevMonth);
        let checkThisMonth = isThisMonth(getMonthIndex(prevMonth), year);
        let dateWillStart = checkThisMonth ? getToday().getDate() : 1;
        setSelectedDate(dateWillStart);
      }
    }
  };

  const showMessage = (message) => {
    setContent(message);
    setVisible(true);
  };

  const handleAppointment = () => {
    setHeader("Missing Fields");
    if (!selectedDate) {
      showMessage("You must choose a date!");
    } else if (!selectedTime) {
      showMessage("You must choose a time!");
    } else if (!duration) {
      showMessage("You must choose a duration!");
    } else {
      const scheduledTime = selectedTime;
      const monthParam = ("00" + getMonthIndex(month)).slice(-2);
      const scheduledDate = new Date(`${year}-${monthParam}-${selectedDate}`);

      api
        .post("appointment", {
          fullName,
          duration,
          description,
          scheduledDate,
          scheduledTime,
        })
        .then((response) => {
          console.log("Appointment has been created.");
          console.log(response.data);
          navigation.navigate("Stations");
        })
        .catch((err) => console.log(err));
    }
    // getAppointments()
  };

  const getAppointments = () => {
    const monthParam = ("00" + getMonthIndex(month)).slice(-2);
    const dayParam = ("00" + selectedDate).slice(-2);
    console.log("year,monthparam,selecTDate", year, monthParam, dayParam);
    api
      .get(`appointment?scheduledDate=${year}-${monthParam}-${dayParam}`)
      .then((response) => {
        setFullSlots(response.data);
      });
  };

  const isFullSlot = (time) => {
    return fullSlots.some((slot) => slot.scheduledTime === time);
  };

  useEffect(() => {
    getAppointments();
  }, [selectedDate, month]);

  return (
    <SafeLayout>
      <Container>
        <KeyboardAvoidingView behavior="position">
          <Header header="New Appointment" />
          <Month>
            <CustomText title={`${month}, ${year}`} h3 bold />
            <Icons>
              <TouchableOpacity onPress={handlePrevMonth}>
                <StyledIcon name="caretleft" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNextMonth}>
                <Icon name="caretright" size={24} color="black" />
              </TouchableOpacity>
            </Icons>
          </Month>

          <Days>
            <DayCards
              handlePress={handlePressDay}
              selectedDate={selectedDate}
              month={month}
              year={year}
            />
          </Days>
          <Times>
            <CustomText title="Available Time" h3 bold />
            <TimeCards
              handlePress={handlePressTime}
              selectedTime={selectedTime}
              month={month}
              year={year}
              selectedDate={selectedDate}
              isFullSlot={isFullSlot}
              fullSlots={fullSlots}
            />
          </Times>
          <StyledDivider />
          <CustomText title="Details" h3 bold />
          <Details>
            <MarginText title="Full name" p />
            <Input value={fullName} handleChange={setFullName} />
            <CustomText title="Duration" p />
            <Box w="full">
              <DropdownList
                list={list}
                value={duration}
                handleChange={setDuration}
              />
            </Box>

            <MarginText title="Description" p />
            <Input value={description} handleChange={setDescription} />

            <Button title="Set Appointment" handlePress={handleAppointment} />
          </Details>
        </KeyboardAvoidingView>
        <WarnPopup
          open={visible}
          setOpen={setVisible}
          content={content}
          header={header}
        />
      </Container>
    </SafeLayout>
  );
};

export default Appointment;

const Container = styled.View`
  margin: 0 ${wp(5)}px;
`;

const Days = styled.View`
  margin: ${hp(1)}px 0;
`;

const Times = styled.View``;

const Details = styled.View`
  margin: ${hp(1)}px 0;
`;

const MarginText = styled(CustomText)`
  margin-bottom: ${hp(1)}px;
`;

const StyledDivider = styled(Divider)`
  margin: ${hp(1)}px 0;
`;

const Month = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Icons = styled.View`
  flex-direction: row;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${wp(3)}px;
`;
