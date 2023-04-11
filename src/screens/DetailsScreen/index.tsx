import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Counter } from '~components/Counter';
import { ButtonRound } from '~components/shared/Button/ButtonRound';
import { DetailScreenProps, MenuStackNavigationName } from '~navigation/MenuStack/type';
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
import { addOrder } from '~src/redux/slices/bucketSlice';
import { useAppDispatch } from '~src/redux/store';

export const DetailsScreen: FC<DetailScreenProps> = ({ route, navigation }) => {
    const dispatch = useAppDispatch();

    const { food } = route.params;

    const { description, price, name, id, image, about } = food;

    const addItem = () => {
        dispatch(addOrder({ order: food }));
        navigation.navigate(MenuStackNavigationName.ORDER);
    };

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
                    <Counter food={food} />
                    <ButtonRound title="add to cart" onPress={addItem} />
                </RowContainer>
            </TextContainer>
        </RootContainer>
    );
};
