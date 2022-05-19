import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import CustomText from "../../components/core/CustomText";
import { hp, wp } from "../../utils/responsiveScreen";
import { generateDateArray } from "../../utils/dateUtils";

const DayCards = ({ handlePress, selectedDate }) => {
  const dates = useMemo(() => generateDateArray(), []);

  const isActive = (date) => {
    return selectedDate === date.day + date.date;
  };
  return (
    <Container>
      <ScrollView horizontal>
        {dates.map((date, i) => {
          const active = isActive(date);
          return (
            <Card
              key={i}
              activeOpacity={0.4}
              onPress={() => handlePress(date.day, date.date)}
              active={active}
            >
              <DateText h3 title={date.day} active={active} />
              <DateText h5 title={date.date} active={active} />
            </Card>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default DayCards;

const Container = styled.View`
  /* margin: ${hp(2)}px 0; */
`;

const Card = styled.TouchableOpacity`
  border: 1px solid ${colors.border};
  border-radius: 5px;
  display: flex;
  width: ${hp(10)}px;
  height: ${hp(10)}px;
  align-items: center;
  justify-content: space-between;
  padding: ${hp(1)}px;
  border-radius: 10px;
  margin: 0 ${wp(1)}px;
  background-color: ${(props) => (props.active ? colors.button : colors.white)};
`;

const DateText = styled(CustomText)`
  color: ${(props) => (props.active ? colors.white : colors.dateText)}; ;
`;
