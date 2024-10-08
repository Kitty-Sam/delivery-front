import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { ButtonRound } from '~components/shared/Button/ButtonRound';
import { DetailScreenProps, RootStackNavigationName } from '~navigation/RootStack/type';
import {
    AdditionalText,
    DescriptionText,
    FoodImage,
    Gap,
    NameAndPriceText,
    RootContainer,
    RowCenteredContainer,
    RowContainer,
    styles,
    TextContainer,
} from '~screens/DetailsScreen/style';
import { darkTheme } from '~src/contants/theme';
import { useAppDispatch, useAppSelector } from '~src/redux/configureStore';
import { getBucketOrders } from '~src/redux/selectors';
import { addOrder } from '~src/redux/slices/bucketSlice';

export const DetailsScreen: FC<DetailScreenProps> = ({ route, navigation }) => {
    const { food } = route.params;

    const { description, price, name, image, about } = food;

    const dispatch = useAppDispatch();
    const addItem = () => {
        dispatch(addOrder({ orderItem: { count: 1, order: food } }));
        navigation.navigate(RootStackNavigationName.ORDER);
    };

    const goBackPress = () => {
        navigation.goBack();
    };

    const theme: any = useTheme();

    const orders = useAppSelector(getBucketOrders);

    return (
        <RootContainer>
            <Icon name="arrow-back" size={28} color={theme.TITLE_COLOR} style={styles.backIcon} onPress={goBackPress} />
            <FoodImage source={{ uri: image }} />

            <Gap />

            <TextContainer>
                <RowContainer>
                    <NameAndPriceText>{name}</NameAndPriceText>
                    <NameAndPriceText>{price}$</NameAndPriceText>
                </RowContainer>

                <DescriptionText>{description}</DescriptionText>

                <RowCenteredContainer>
                    <Icon name="star" size={24} color={darkTheme.ICON_STAR_COLOR} />
                    <AdditionalText>4.5</AdditionalText>

                    <Icon name="alarm-outline" size={24} style={styles.alarmIcon} color={darkTheme.ICON_ALARM_COLOR} />
                    <AdditionalText>45 min</AdditionalText>
                </RowCenteredContainer>

                <NameAndPriceText>About</NameAndPriceText>
                <DescriptionText>{about}</DescriptionText>

                <RowContainer>
                    <AdditionalText>{orders.length} position(s)</AdditionalText>
                    <ButtonRound title="add to cart" onPress={addItem} />
                </RowContainer>
            </TextContainer>
        </RootContainer>
    );
};
