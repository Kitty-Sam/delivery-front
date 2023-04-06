import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum AuthStackNavigationName {
    LOGIN = 'Login',
    REGISTER = 'Register',
}

export type AuthStackParamList = {
    [AuthStackNavigationName.LOGIN]: undefined;
    [AuthStackNavigationName.REGISTER]: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, AuthStackNavigationName.LOGIN>;
export type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, AuthStackNavigationName.REGISTER>;
