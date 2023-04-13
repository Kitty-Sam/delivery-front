import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
    TextContainer,
} from '~screens/DetailsScreen/style';
import { darkTheme } from '~src/contants/theme';
import { getBucketOrders } from '~src/redux/selectors';
import { addOrder } from '~src/redux/slices/bucketSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const DetailsScreen: FC<DetailScreenProps> = ({ route, navigation }) => {
    const dispatch = useAppDispatch();

    const { food } = route.params;

    const { description, price, name, image, about } = food;

    const addItem = () => {
        dispatch(addOrder({ orderItem: { count: 1, order: food } }));
        navigation.navigate(RootStackNavigationName.ORDER);
    };

    const orders = useAppSelector(getBucketOrders);

    return (
        <RootContainer>
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

                    <Icon
                        name="alarm-outline"
                        size={24}
                        style={{ paddingLeft: 20 }}
                        color={darkTheme.ICON_ALARM_COLOR}
                    />
                    <AdditionalText>25 min</AdditionalText>
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
