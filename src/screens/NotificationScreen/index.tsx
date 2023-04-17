import { useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import { TitleText } from '~screens/OrderScreen/style';
import { width } from '~src/contants/dimensions';
import { useGetCourierByIdQuery } from '~src/redux/api/foodApi';
import { getCurrentUser } from '~src/redux/selectors';
import { ICourier } from '~src/redux/slices/userSlice';
import { useAppSelector } from '~src/redux/store';

export const NotificationScreen = () => {
    const route = useRoute<any>();
    const { courier } = route.params ? route.params : false;

    const { data: courierInfo } = useGetCourierByIdQuery(courier);

    const currentUser = useAppSelector(getCurrentUser);
    console.log('currentUser', currentUser!.orders);

    const renderCourierItem = useCallback(
        ({ item }: { item: ICourier }) => (
            <View
                style={{
                    width: width * 0.8,
                    borderWidth: 1,
                    borderColor: 'red',
                    borderRadius: 20,
                    padding: 10,
                    justifyContent: 'center',
                }}
            >
                {item ? (
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: item.avatar }} style={{ width: 100, height: 100 }} />
                        <View>
                            <Text>
                                {item.name} {item.surname}
                            </Text>
                            <Text>{item.phone}</Text>
                        </View>
                    </View>
                ) : (
                    <></>
                )}
            </View>
        ),
        [],
    );

    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <TitleText>Notification</TitleText>

            <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
                {courier && (
                    <>
                        <TitleText>current order</TitleText>
                        <View
                            style={{
                                width: width * 0.8,
                                borderWidth: 1,
                                borderColor: 'red',
                                borderRadius: 20,
                                padding: 10,
                                justifyContent: 'center',
                            }}
                        >
                            {courierInfo && (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: courierInfo.avatar }} style={{ width: 100, height: 100 }} />
                                    <View>
                                        <Text>
                                            {courierInfo.name} {courierInfo.surname}
                                        </Text>
                                        <Text>{courierInfo.phone}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    </>
                )}
                <TitleText>the all list of orders</TitleText>
            </View>
        </SafeAreaView>
    );
};
