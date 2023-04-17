import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    AdditionalInfoContainer,
    CourierContainer,
    DescriptionText,
    ImageWrapper,
    NameText,
    PersonalInfoContainer,
    RootContainer,
    TextContainer,
    TitleText,
} from '~screens/NotificationScreen/style';
import { getCouriers } from '~src/redux/selectors';
import { useAppSelector } from '~src/redux/store';

export const NotificationScreen = () => {
    const couriers = useAppSelector(getCouriers);

    const renderCourierItem = useCallback(
        ({ item }: { item: any }) => (
            <CourierContainer>
                <PersonalInfoContainer>
                    <ImageWrapper source={{ uri: item.courier.avatar }} />
                    <TextContainer>
                        <NameText>
                            {item.courier.name} {item.courier.surname}
                        </NameText>
                        <DescriptionText>Food Courier</DescriptionText>
                        <NameText>{item.courier.phone}</NameText>
                    </TextContainer>
                </PersonalInfoContainer>
                <AdditionalInfoContainer>
                    <Icon name="time" size={18} />
                    <NameText>45 мин</NameText>
                    <Icon name="home" size={18} />
                    <NameText>home address</NameText>
                    <Icon name="cash" size={18} />
                    <NameText>{item.total} $</NameText>
                </AdditionalInfoContainer>
            </CourierContainer>
        ),
        [],
    );

    return (
        <RootContainer>
            <TitleText>Notification</TitleText>
            <FlatList data={couriers} renderItem={renderCourierItem} showsVerticalScrollIndicator={false} />
        </RootContainer>
    );
};
