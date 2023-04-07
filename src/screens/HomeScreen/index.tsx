import React, { useCallback } from 'react';
import { Button, FlatList } from 'react-native';

import { AvatarBlock } from '~components/AvatarBlock';
import { SearchBar } from '~components/SearchBar';
import { ButtonCorner } from '~components/shared/Button/ButtonCorner';
import { useSearch } from '~hooks/useSearch';
import { Container, FoodImage, RootContainer, TextDescription, TextPrice, TextTitle } from '~screens/HomeScreen/style';
import { useGetAllFoodsQuery } from '~src/redux/api/foodApi';
import { IFood } from '~src/redux/slices/foodSlice';
import { logOut } from '~src/redux/slices/userSlice';
import { useAppDispatch } from '~src/redux/store';

export const HomeScreen = () => {
    const { data: allFoods } = useGetAllFoodsQuery();

    const dispatch = useAppDispatch();

    const { search, setSearch, filterHandler } = useSearch();

    const logoutPress = () => {
        dispatch(logOut());
    };

    const renderItem = useCallback(({ item }: { item: IFood }) => {
        const { image, price, name, description } = item;
        return (
            <Container>
                <FoodImage source={{ uri: image }} />
                <TextTitle>{name}</TextTitle>
                <TextDescription>{description}</TextDescription>
                <TextPrice>{price}$</TextPrice>
                <ButtonCorner title="Add to cart" onPress={() => console.log('add')} />
            </Container>
        );
    }, []);

    return (
        <RootContainer>
            <Button title="logout" onPress={logoutPress} />
            <AvatarBlock title="Lets eat Quality food" />
            <SearchBar search={search} setSearch={setSearch} filterHandler={filterHandler} />

            <FlatList
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 20,
                }}
                data={allFoods}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </RootContainer>
    );
};
