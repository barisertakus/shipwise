import { Text } from "react-native";
import React from "react";
import rf from "../../utils/responsiveFont";

const CustomText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  bold,
  italic,
  title,
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        h1 && { fontSize: rf(48) },
        h2 && { fontSize: rf(32) },
        h3 && { fontSize: rf(20) },
        h4 && { fontSize: rf(18) },
        h5 && { fontSize: rf(16) },
        h6 && { fontSize: rf(14) },
        p && { fontSize: rf(12) },
        bold && { fontWeight: "bold" },
        italic && { fontStyle: "italic" },
        style,
      ]}
      {...rest}
    >
      {title}
    </Text>
  );
};

export default CustomText;
