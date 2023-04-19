import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IFood } from '~src/redux/slices/foodSlice';

export enum RootStackNavigationName {
    HOMESTACK = 'HomeStack',
    ORDER = 'Order',
    DETAILS = ' ',
}

export type RootStackParamList = {
    [RootStackNavigationName.HOMESTACK]: undefined;
    [RootStackNavigationName.ORDER]: undefined;
    [RootStackNavigationName.DETAILS]: { food: IFood };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, RootStackNavigationName.HOMESTACK>;
export type DetailScreenProps = NativeStackScreenProps<RootStackParamList, RootStackNavigationName.DETAILS>;
export type OrderScreenProps = NativeStackScreenProps<RootStackParamList, RootStackNavigationName.ORDER>;
