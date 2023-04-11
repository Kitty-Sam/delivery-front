export enum RootStackNavigationName {
    HOME = 'Home',
    FAVORITE = 'Favorite food',
    NOTIFICATION = 'Notification',
    PROFILE = 'Profile',
}

export type RootStackParamList = {
    [RootStackNavigationName.HOME]: undefined;
    [RootStackNavigationName.FAVORITE]: undefined;
    [RootStackNavigationName.NOTIFICATION]: undefined;
    [RootStackNavigationName.PROFILE]: undefined;
};
