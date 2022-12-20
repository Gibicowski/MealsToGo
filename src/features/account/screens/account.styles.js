import Styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";


export const AccountBackground = Styled.ImageBackground.attrs({
    source: require("../../../../assets/register-screen-background.jpg"),
})`
    flex:1;
    background-color: #ddd;
    align-items: center;
    justify-content: center; 
`;



export const AccountCover = Styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    justify-content: center;
    align-items: center;
    justify-items: center;
`;

export const AccountContainer = Styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = Styled(Button).attrs({
  })`
    padding: ${(props) => props.theme.space[2]};
  `;


  export const AuthInput = Styled(TextInput)`
  width: 300px;
`;

export const Title = Styled(Text)`
    font-size: 40px;
    color: white;
`;

export const ErrorContainer = Styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = Styled.View`
  width: 60%;
  height: 38%;
  position: absolute;
  top: 1px;
  padding: ${(props) => props.theme.space[2]};
`;



