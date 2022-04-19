import { Text, View } from 'react-native'
import React from 'react'
import styled from "styled-components";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../components/core/CustomText';
import { wp } from "../utils/responsiveScreen";
import Header from '../components/core/Header';

const Appointment = () => {
  return (
    <SafeAreaView>
      <Header header="New Appointment" />
    </SafeAreaView>
  )
}

export default Appointment

const Wrapper = styled.View`
  width: ${wp("50%")};
  border: 1px solid black;
`