import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { usePageRefresh } from '~hooks/usePageRefresh';
import {
    AdditionalInfoContainer,
    CourierContainer,
    DescriptionText,
    ImageWrapper,
    NameText,
    PersonalInfoContainer,
    RootContainer,
    styles,
    TextContainer,
    TitleText,
} from '~screens/NotificationScreen/style';
import { darkTheme } from '~src/contants/theme';
import { useRemoveOrderMutation } from '~src/redux/api/foodApi';
import { useGetUserByIdQuery } from '~src/redux/api/userApi';
import { getCouriersWithOrders, getCurrentUser } from '~src/redux/selectors';
import { ICourierWithOrder } from '~src/redux/slices/userSlice';
import { useAppSelector } from '~src/redux/store';
import { addMinutes } from '~utils/addMinutes';

export const NotificationScreen = () => {
    const couriers = useAppSelector(getCouriersWithOrders);
    const currentUser = useAppSelector(getCurrentUser);

    const theme: any = useTheme();

    const [removeOrderById] = useRemoveOrderMutation();
    const { refetch } = useGetUserByIdQuery(currentUser!.id);
    const onRemoveOrderPress = (id: number) => async () => {
        await removeOrderById({ id }).unwrap();
        refetch();
    };

    const date = usePageRefresh();

    const renderCourierItem = useCallback(
        ({ item }: { item: ICourierWithOrder }) => {
            const { format: deliveryTime, result } = addMinutes(new Date(item.createdAt), 45);

            return (
                <CourierContainer>
                    <PersonalInfoContainer>
                        <ImageWrapper source={{ uri: item.courier.avatar }} />
                        <TextContainer>
                            {date > deliveryTime && (
                                <Icon
                                    name="archive"
                                    onPress={onRemoveOrderPress(item.id)}
                                    size={18}
                                    color={darkTheme.ICON_ALARM_COLOR}
                                    style={styles.binIcon}
                                />
                            )}
                            <NameText>
                                {item.courier.name} {item.courier.surname}
                            </NameText>
                            <DescriptionText>Food Courier</DescriptionText>
                            <NameText>{item.courier.phone}</NameText>
                        </TextContainer>
                    </PersonalInfoContainer>
                    <AdditionalInfoContainer>
                        <Icon name="time" size={18} color={theme.TITLE_COLOR} />
                        <NameText>{date > deliveryTime ? 'delivered' : result}</NameText>
                        <Icon name="home" size={18} color={theme.TITLE_COLOR} />
                        <NameText>{item.address}</NameText>
                        <Icon name="cash" size={18} color={theme.TITLE_COLOR} />
                        <NameText>{item.total} $</NameText>
                    </AdditionalInfoContainer>
                </CourierContainer>
            );
        },
        [theme.TITLE_COLOR, date],
    );

    return (
        <RootContainer>
            <TitleText>Notification</TitleText>
            <FlatList data={couriers} renderItem={renderCourierItem} showsVerticalScrollIndicator={false} />
        </RootContainer>
    );
};
