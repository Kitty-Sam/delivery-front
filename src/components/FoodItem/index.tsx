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
import { useAddToFavoriteFoodMutation, useRemoveFromFavoriteFoodMutation } from '~src/redux/api/foodApi';
import { useGetUserByIdQuery } from '~src/redux/api/userApi';
import { getCurrentUser } from '~src/redux/selectors';
import { addOrder } from '~src/redux/slices/bucketSlice';
import { IFood } from '~src/redux/slices/foodSlice';
import { setModalType } from '~src/redux/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const FoodItem = memo(({ item }: { item: IFood }) => {
    const { image, price, name, description, id } = item;
    const [isFavorite, setIsFavorite] = useState(false);

    const currentUser = useAppSelector(getCurrentUser);

    const dispatch = useAppDispatch();

    const navigation = useNavigation<any>();

    const [addToFavoriteFood] = useAddToFavoriteFoodMutation();
    const [removeFromFavoriteFood] = useRemoveFromFavoriteFoodMutation();

    const { refetch } = useGetUserByIdQuery(currentUser!.id);

    const isFocused = useIsFocused();

    useEffect(() => {
        currentUser!.favorites.find((favfood) => favfood.id === id) ? setIsFavorite(true) : setIsFavorite(false);
    }, [isFocused]);

    const addToFavoritePress = async () => {
        const hasFavorite = currentUser!.favorites.find((favfood) => favfood.id === id);
        if (hasFavorite) {
            await removeFromFavoriteFood({ userId: currentUser!.id, foodId: id }).unwrap();
            refetch();
            setIsFavorite(false);
        } else {
            await addToFavoriteFood({ userId: currentUser!.id, foodId: id }).unwrap();
            refetch();
            setIsFavorite(true);
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
                <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={24} onPress={addToFavoritePress} />
            </FavoriteContainer>
            <TextTitle>{name}</TextTitle>
            <TextDescription>{description}</TextDescription>
            <TextPrice>{price}$</TextPrice>
            <ButtonCorner title="Add to cart" onPress={onAddItemPress} />
        </Container>
    );
});
