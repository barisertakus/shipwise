import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import CustomText from "../../components/core/CustomText";
import { hp, wp } from "../../utils/responsiveScreen";

const fillArray = () => {
  let arr = [];
  for (let i = 1; i <= 30; i++) arr.push(i);
  return arr;
};

const DayCards = () => {
  const days = useMemo(() => fillArray(), []);

  return (
    <Container>
      <ScrollView horizontal>
        {days.map((day,i) => (
          <Card key={i} activeOpacity={0.4}>
            <DateText h3 title={day} />
            <DateText h5 title="MON" />
          </Card>
        ))}
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
  margin: ${hp(2)}px ${wp(1)}px;
  margin-bottom: ${hp(1)}px;
`;

const DateText = styled(CustomText)`
  color: ${colors.dateText};
`;
