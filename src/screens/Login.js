import React, { useState } from "react";
import { TextField } from "rn-material-ui-textfield";
import styled from "styled-components/native";
import Button from "../components/core/Button";
import SafeLayout from "../components/core/SafeLayout";
import { login, selectUser } from "../features/appSlice";
import { hp, wp } from "../utils/responsiveScreen";
import CustomText from "../components/core/CustomText";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { colors } from "../utils/colors";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";
import deviceStorage from "../utils/deviceStorage";
import { useSelector } from "react-redux";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const navigateSignup = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = () => {
    api
      .post("auth/login", { username, password })
      .then((response) => {
        const { name, username, token } = response.data;
        dispatch(login({ name, username, token }));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setUsername("");
        setPassword("");
        navigation.navigate("Stations");
      });
  };

  useEffect(() => {
    if (user.username) {
      navigation.navigate("Stations");
    } else {
      deviceStorage
        .loadItem("token")
        .then((response) => {
          api
            .post("auth/getUserFromToken", { token: response })
            .then((response) => {
              const { name, username, token } = response.data;
              dispatch(login({ name, username, token }));
              // setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <SafeLayout>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" style={{ flex: 1 }} />
      ) : (
        <Container>
          <Content>
            <StyledText title="Account" h2 bold />
            <Inputs>
              <TextField
                label="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
              <TextField
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </Inputs>
            <Button handlePress={handleLogin} title="Login" secondary />
            <AskSignup>
              <CustomText title="Don't have an account?" h5 />
              <TouchableOpacity onPress={navigateSignup}>
                <SignupText title="Sign up" h5 />
              </TouchableOpacity>
            </AskSignup>
          </Content>
          <Bottom />
        </Container>
      )}
    </SafeLayout>
  );
};

export default Login;

const Container = styled.View`
  flex: 1;
  padding: 0 ${wp(5)}px;
`;

const Inputs = styled.View``;

const Content = styled.View`
  flex: 0.65;
  justify-content: space-between;
`;

const Bottom = styled.View`
  flex: 0.35;
`;

const StyledText = styled(CustomText)`
  margin-top: ${hp(6)}px;
`;

const AskSignup = styled.View`
  flex-direction: row;
`;

const SignupText = styled(CustomText)`
  margin-left: 3px;
  color: ${colors.button};
`;
