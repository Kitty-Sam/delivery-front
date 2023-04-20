import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { AdditionalText, Container, Image, LinksContainer, TitleText } from '~components/LogoBlock/style';
import { AuthStackNavigationName } from '~navigation/AuthStack/type';
import { darkTheme } from '~src/contants/theme';

const logo = require('~assets/logo.png');

export interface ILogoBlock {
    screen: string;
}
export const LogoBlock: FC<ILogoBlock> = ({ screen }) => {
    const navigation = useNavigation<any>();

    const registerNavigate = () => {
        navigation.navigate(AuthStackNavigationName.REGISTER);
    };

    const loginNavigate = () => {
        navigation.navigate(AuthStackNavigationName.LOGIN);
    };

    return (
        <Container>
            <Image source={logo} />
            <TitleText>Corner Food</TitleText>
            <AdditionalText>Delivery App</AdditionalText>
            <LinksContainer>
                <TouchableOpacity
                    onPress={loginNavigate}
                    style={{
                        borderBottomWidth: screen === 'Login' ? 2 : 0,
                        borderBottomColor: darkTheme.COLORED_BUTTON,
                    }}
                >
                    <AdditionalText>Login</AdditionalText>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={registerNavigate}
                    style={{
                        borderBottomWidth: screen === 'Register' ? 2 : 0,
                        borderBottomColor: darkTheme.COLORED_BUTTON,
                    }}
                >
                    <AdditionalText>Register</AdditionalText>
                </TouchableOpacity>
            </LinksContainer>
        </Container>
    );
};
