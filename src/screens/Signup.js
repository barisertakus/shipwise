import React, { useState } from "react";
import { TextField } from "rn-material-ui-textfield";
import styled from "styled-components/native";
import Button from "../components/core/Button";
import SafeLayout from "../components/core/SafeLayout";
import Header from "../components/core/Header";
// import { colors } from "../utils/colors";
import { login, selectUser } from "../features/appSlice";
import { hp, wp } from "../utils/responsiveScreen";
import CustomText from "../components/core/CustomText";
import api from "../utils/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import deviceStorage from "../utils/deviceStorage";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(selectUser);

  const updateLanguage = (languageName) => {
    i18n.locale = languageName;
    dispatch(changeLanguage(languageName));
  };

  const [token, setToken] = useState("");

  const handleSignup = () => {
    api
      .post("auth/signup", { username, name, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setUsername("");
        setPassword("");
        setName("");
        navigation.navigate("Login");
      });
  };

  useEffect(() => {
    deviceStorage.loadItem("token").then((resp) => {
      setToken(resp);
      console.log(resp);
    });
  }, []);

  return (
    <SafeLayout>
      <Container>
        <Content>
          <StyledText title="Signup" h2 bold />
          <Inputs>
            <TextField
              label="Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
            />
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
          <Button handlePress={handleSignup} title="Signup" secondary />
        </Content>
        <Bottom />
      </Container>
    </SafeLayout>
  );
};

export default Signup;

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
