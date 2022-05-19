import { Input } from "native-base";
import { colors } from "../../utils/colors";
import { hp } from "../../utils/responsiveScreen";

export default ({style}) => {
  return <Input borderRadius={10} height={hp(6.1)} maxHeight={12}  backgroundColor={colors.input} style={style} />
}

