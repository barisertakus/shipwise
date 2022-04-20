import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import CustomText from "../../components/core/CustomText";
import { hp, wp } from "../../utils/responsiveScreen";
import { times } from "../../utils/times";

const fillArray = () => {
  let arr = [];
  for (let i = 1; i <= 30; i++) arr.push(i);
  return arr;
  console.log;
};

const TimeCards = () => {
  return (
    <Container>
      <ScrollView horizontal>
        <View>
          <CardGroup>
            {times.slice(0, 16).map((time, i) => (
              <Card key={i} activeOpacity={0.4}>
                <DateText title={time} h5 />
              </Card>
            ))}
          </CardGroup>
          <CardGroup>
            {times.slice(16, 32).map((time, i) => (
              <Card key={i * 2} activeOpacity={0.4}>
                <DateText title={time} h5 />
              </Card>
            ))}
          </CardGroup>
          <CardGroup>
            {times.slice(32, 48).map((time, i) => (
              <Card key={i * 3} activeOpacity={0.4}>
                <DateText title={time} h5 />
              </Card>
            ))}
          </CardGroup>
        </View>
      </ScrollView>
    </Container>
  );
};

export default TimeCards;

const Container = styled.View`
  /* margin: ${hp(2)}px 0; */
`;

const Card = styled.TouchableOpacity`
  border: 1px solid ${colors.border};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: ${hp(15)}px;
  height: ${hp(5)}px;
  align-items: center;
  justify-content: center;
  padding: ${hp(1)}px;
  border-radius: 10px;
  margin: ${hp(1)}px ${wp(1)}px;
`;

const CardGroup = styled.View`
  display: flex;
  flex-direction: row;
`;

const DateText = styled(CustomText)`
  color: ${colors.dateText};
`;
