import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";
import { colors } from "../../utils/colors";
import { hp } from "../../utils/responsiveScreen";
import styled from "styled-components";

const Header = ({ header, noneBack, RightButton }) => {
  const navigation = useNavigation();
  const goBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <Container>
      {noneBack ? (
        <EmptyView />
      ) : (
        <BackIcon onPress={goBack}>
          <Icon name="arrow-back" size={24} />
        </BackIcon>
      )}
      <CustomText h5 title={header} />
      {RightButton ? <RightButton /> : <EmptyView />}
    </Container>
  );
};

export default Header;

const Container = styled.View`
  flex-direction: row;
  margin: ${hp(2)}px 0;
  justify-content: space-between;
  align-items: center;
`;

const BackIcon = styled.TouchableOpacity`
  background-color: ${colors.white};
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
`;

const EmptyView = styled.View`
  padding: 21px;
`;
