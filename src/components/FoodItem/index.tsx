import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { memo, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { ButtonCorner } from '~components/shared/Button/ButtonCorner';
import { RootStackNavigationName } from '~navigation/RootStack/type';
import {
    Container,
    FavoriteContainer,
    FoodImage,
    TextDescription,
    TextPrice,
    TextTitle,
} from '~screens/HomeScreen/style';
import { useAppDispatch, useAppSelector } from '~src/redux/configureStore';
import { getFavoritesFoods } from '~src/redux/selectors';
import { addOrder } from '~src/redux/slices/bucketSlice';
import { IFood } from '~src/redux/slices/foodSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { addInFavorites, removeFromFavorite } from '~src/redux/slices/userSlice';

export const FoodItem = memo(({ item }: { item: IFood }) => {
    const { image, price, name, description, id } = item;

    const dispatch = useAppDispatch();

    const favorites = useAppSelector(getFavoritesFoods);

    const navigation = useNavigation<any>();

    // const [addToFavoriteFood] = useAddToFavoriteFoodMutation();
    // const [removeFromFavoriteFood] = useRemoveFromFavoriteFoodMutation();

    const addToFavoritePress = async () => {
        const hasFavorite = favorites.find((food) => food.id === id);
        if (hasFavorite) {
            dispatch(removeFromFavorite(id));
        } else {
            dispatch(addInFavorites(item));
        }
    };

    const onFoodItemPress = () => {
        navigation.navigate(RootStackNavigationName.DETAILS, { food: item });
    };

    const onAddItemPress = () => {
        dispatch(setModalType({ type: 'success' }));
        dispatch(addOrder({ orderItem: { count: 1, order: item } }));
    };

    return (
        <Container onPress={onFoodItemPress}>
            <FoodImage source={{ uri: image }} />
            <FavoriteContainer>
                <Icon
                    name={favorites.includes(item) ? 'heart' : 'heart-outline'}
                    size={24}
                    onPress={addToFavoritePress}
                />
            </FavoriteContainer>
            <TextTitle>{name}</TextTitle>
            <TextDescription>{description}</TextDescription>
            <TextPrice>{price}$</TextPrice>
            <ButtonCorner title="Add to cart" onPress={onAddItemPress} />
        </Container>
    );
});
