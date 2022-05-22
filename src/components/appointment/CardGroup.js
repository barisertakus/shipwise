import styled from "styled-components";
import CustomText from "../../components/core/CustomText";
import { colors } from "../../utils/colors";
import { hp, wp } from "../../utils/responsiveScreen";

const CardGroup = ({ isActive, firstIndex, lastIndex, times, handlePress }) => {
  return (
    <Container>
      {times.slice(firstIndex, lastIndex).map((timeObject, i) => {
        const { time, selectable } = timeObject;
        const active = isActive(time);
        return (
          <Card
            key={i}
            activeOpacity={0.4}
            active={active}
            onPress={() => handlePress(time)}
            disabled={!selectable}
          >
            <DateText title={time} h5 active={active} selectable={selectable} />
          </Card>
        );
      })}
    </Container>
  );
};

export default CardGroup;

const Container = styled.View`
  display: flex;
  flex-direction: row;
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
  ${(props) => props.active && { backgroundColor: colors.button }}
`;

const DateText = styled(CustomText)`
  color: ${(props) => (props.active ? "white" : colors.dateText)};
  ${(props) => !props.selectable && { color: "antiquewhite" }}
`;
