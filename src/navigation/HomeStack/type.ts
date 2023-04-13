import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum HomeStackNavigationName {
    HOME = 'Home',
    FAVORITE = 'Favorite food',
    NOTIFICATION = 'Notification',
    PROFILE = 'Profile',
}

export type HomeStackParamList = {
    [HomeStackNavigationName.HOME]: undefined;
    [HomeStackNavigationName.FAVORITE]: undefined;
    [HomeStackNavigationName.NOTIFICATION]: undefined;
    [HomeStackNavigationName.PROFILE]: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<HomeStackParamList, HomeStackNavigationName.HOME>;
