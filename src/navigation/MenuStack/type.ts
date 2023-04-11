import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IFood } from '~src/redux/slices/foodSlice';

export enum MenuStackNavigationName {
    HOME = 'Home Stack',
    DETAIL = 'Detail',
    ORDER = 'Order',
}

export type MenuStackParamList = {
    [MenuStackNavigationName.HOME]: undefined;
    [MenuStackNavigationName.DETAIL]: { food: IFood };
    [MenuStackNavigationName.ORDER]: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<MenuStackParamList, MenuStackNavigationName.HOME>;
export type DetailScreenProps = NativeStackScreenProps<MenuStackParamList, MenuStackNavigationName.DETAIL>;
export type OrderScreenProps = NativeStackScreenProps<MenuStackParamList, MenuStackNavigationName.ORDER>;
