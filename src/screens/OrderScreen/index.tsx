import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { OrderItem } from '~components/OrderItem';
import { MenuStackNavigationName, OrderScreenProps } from '~navigation/MenuStack/type';
import { RootContainer, RowContainer, TitleText } from '~screens/OrderScreen/style';
import { getBucketOrders } from '~src/redux/selectors';
import { IFood } from '~src/redux/slices/foodSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const OrderScreen: FC<OrderScreenProps> = ({ navigation }) => {
    const dispatch = useAppDispatch();

    const orders = useAppSelector(getBucketOrders);

    const onCloseModalPress = () => {
        navigation.navigate(MenuStackNavigationName.HOME);
    };

    const renderOrderItem = useCallback(({ item }: { item: IFood }) => <OrderItem food={item} />, []);

    return (
        <RootContainer>
            <RowContainer>
                <TitleText>My order</TitleText>
                <Icon name="close" onPress={onCloseModalPress} size={24} />
            </RowContainer>
            <FlatList data={orders} renderItem={renderOrderItem} keyExtractor={(index) => index.toString()} />
        </RootContainer>
    );
};
