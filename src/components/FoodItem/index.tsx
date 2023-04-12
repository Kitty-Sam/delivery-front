import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';

import { ButtonCorner } from '~components/shared/Button/ButtonCorner';
import { MenuStackNavigationName } from '~navigation/MenuStack/type';
import { Container, FoodImage, TextDescription, TextPrice, TextTitle } from '~screens/HomeScreen/style';
import { addOrder } from '~src/redux/slices/bucketSlice';
import { IFood } from '~src/redux/slices/foodSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch } from '~src/redux/store';

export const FoodItem = memo(({ item }: { item: IFood }) => {
    const { image, price, name, description } = item;

    const dispatch = useAppDispatch();

    const navigation = useNavigation<any>();

    const onFoodItemPress = () => {
        navigation.navigate(MenuStackNavigationName.DETAIL, { food: item });
    };

    const onAddItemPress = () => {
        dispatch(setModalType({ type: 'success' }));
        dispatch(addOrder({ orderItem: { count: 1, order: item } }));
    };

    return (
        <Container onPress={onFoodItemPress}>
            <FoodImage source={{ uri: image }} />
            <TextTitle>{name}</TextTitle>
            <TextDescription>{description}</TextDescription>
            <TextPrice>{price}$</TextPrice>
            <ButtonCorner title="Add to cart" onPress={onAddItemPress} />
        </Container>
    );
});
