import styled from "styled-components";
import { colors } from "../../utils/colors";
import { hp } from "../../utils/responsiveScreen";
import CustomText from "./CustomText";

const Button = ({ title, handlePress, secondary }) => {
  return (
    <Container onPress={handlePress} secondary={secondary}>
      <StyledText title={title} h5 bold />
    </Container>
  );
};

export default Button;

export const Container = styled.TouchableOpacity`
  background-color: ${(props)=> !props.secondary ? colors.button : colors.secondaryBtn};
  padding: ${hp(2.1)}px;
  align-items: center;
  margin: ${hp(1)}px 0;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const StyledText = styled(CustomText)`
  color: white;
`
