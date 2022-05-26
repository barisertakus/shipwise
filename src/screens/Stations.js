import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CustomText from "../components/core/CustomText";
import Header from "../components/core/Header";
import SafeLayout from "../components/core/SafeLayout";
import StationCard from "../components/stations/StationCard";
import { logout, selectUser } from "../features/appSlice";
import { selectStation } from "../features/StationSlice";
import api from "../utils/api";
import { colors } from "../utils/colors";
import rf from "../utils/responsiveFont";
import { hp, wp } from "../utils/responsiveScreen";

const IMAGE_URL = "../../assets/images/logo.png";

const Stations = ({ navigation }) => {
  const dispatch = useDispatch();

  const [stations, setStations] = useState([]);
  const user = useSelector(selectUser);

  const logoutAndNavigate = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  const RightButton = () => {
    return (
      <TouchableOpacity onPress={logoutAndNavigate}>
        <LogoutText title="Logout" />
      </TouchableOpacity>
    );
  };

  const handleClick = (station) => {
    const { id, about, location, name, shift } = station;
    dispatch(selectStation({ id, name, location, about, shift }));
  };

  useEffect(() => {
    api
      .get("station/getAll")
      .then((response) => setStations(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeLayout>
      <Container>
        <Header header="Stations" noneBack RightButton={RightButton} />
        <Welcome>
          <CustomText title="Welcome to" h2 bold />
        </Welcome>

        <ImageContainer>
          <StyledImage alt="station" source={require(IMAGE_URL)} />
          {user.username && <CustomText title={user.username} h3 />}
        </ImageContainer>

        <StationCards>
          {stations.map((station) => {
            const { id, about, location, name, shift } = station;
            return (
              <StationCard
                key={id}
                name={name}
                location={location}
                navigation={navigation}
                handleClick={()=>handleClick(station)}
              />
            );
          })}
        </StationCards>
      </Container>
    </SafeLayout>
  );
};

export default Stations;

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const Welcome = styled.View`
  align-items: center;
  margin: ${hp(4)}px;
`;

const ImageContainer = styled.View`
  align-items: center;
  flex: 1;
  margin-bottom: 10px;
`;

const StyledImage = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 50px;
`;

const LogoutText = styled(CustomText)`
  font-size: ${rf(14)}px;
`;

const StationCards = styled.View`
  margin-bottom: ${hp(2)}px;
`;
