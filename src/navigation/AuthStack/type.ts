export enum AuthStackNavigationName {
    LOGIN = 'Login',
    REGISTER = 'Register',
}

export type AuthStackParamList = {
    [AuthStackNavigationName.LOGIN]: undefined;
    [AuthStackNavigationName.REGISTER]: undefined;
};
