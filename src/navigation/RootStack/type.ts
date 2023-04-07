export enum RootStackNavigationName {
    HOME = 'Home',
    ORDER = 'Favorite',
    NOTIFICATION = 'Notification',
    PROFILE = 'Profile',
}

export type RootStackParamList = {
    [RootStackNavigationName.HOME]: undefined;
    [RootStackNavigationName.ORDER]: undefined;
    [RootStackNavigationName.NOTIFICATION]: undefined;
    [RootStackNavigationName.PROFILE]: undefined;
};
