import { useMemo } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import {
  getMonthIndex,
  getRoundedTime,
  getTimeIndex,
  isToday,
  times as defaultTimes,
} from "../../utils/dateUtils";
import { hp } from "../../utils/responsiveScreen";
import CardGroup from "./CardGroup";

const TimeCards = (props) => {
  const { handlePress, selectedTime, month, year, selectedDate } = props;

  const getTimes = (month, year, date) => {
    return isToday(month, year, date)
      ? mapTimesForToday()
      : mapTimesForOtherDays();
  };

  const maxTime = useMemo(
    () => getTimeIndex(getRoundedTime()),
    [selectedDate, month]
  );

  const mapTimesForOtherDays = () => {
    return defaultTimes.map((time) => ({ time, selectable: true }));
  };

  const mapTimesForToday = () => {
    return defaultTimes.map((time, i) =>
      i <= maxTime ? { time } : { time: time, selectable: true }
    );
  };

  const times = useMemo(
    () => getTimes(getMonthIndex(month), year, selectedDate),
    [month, year, selectedDate]
  );

  const isActive = (time) => {
    return selectedTime === time;
  };

  return (
    <Container>
      <ScrollView horizontal>
        <View>
          <CardGroup
            isActive={isActive}
            firstIndex={0}
            lastIndex={16}
            times={times}
            handlePress={handlePress}
          />
          <CardGroup
            isActive={isActive}
            firstIndex={16}
            lastIndex={32}
            times={times}
            handlePress={handlePress}
          />
          <CardGroup
            isActive={isActive}
            firstIndex={32}
            lastIndex={48}
            times={times}
            handlePress={handlePress}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default TimeCards;

const Container = styled.View`
  /* margin: ${hp(2)}px 0; */
`;
