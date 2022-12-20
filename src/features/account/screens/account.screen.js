import React from "react";
import { ImageBackground } from "react-native";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper} from "./account.styles";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import LottieView from "lottie-react-native";



export const AccountScreen = ({navigation}) => {
    return(
    <AccountBackground>
        <AccountCover>
            <AnimationWrapper>
            <LottieView 
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../../assets/cooking.json")} 
             />
             </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login 
                </AuthButton>
                <Spacer size="large" />
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register 
                </AuthButton>
            </AccountContainer>
        </AccountCover>
    </AccountBackground>
    );
};

