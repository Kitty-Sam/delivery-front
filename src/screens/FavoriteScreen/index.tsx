import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { AvatarBlock } from '~components/AvatarBlock';
import { CustomModal } from '~components/CustomModal';
import { FoodItem } from '~components/FoodItem';
import { Match } from '~components/Modals/Match';
import { SearchBar } from '~components/SearchBar';
import { useSearch } from '~hooks/useSearch';
import {
    CategoriesContainer,
    CategoryContainer,
    FoodContainer,
    RootContainer,
    styles,
    TextCategory,
} from '~screens/HomeScreen/style';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { useFilterFavoriteFoodByCategoryMutation, useGetAllCategoriesQuery } from '~src/redux/api/foodApi';
import { getCurrentUser, getFavoriteFilteredFoods, getModalType } from '~src/redux/selectors';
import { IFood, setFavoriteFilteredFoods } from '~src/redux/slices/foodSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const FavoriteScreen = () => {
    const { search, setSearch, filterFavoriteBySearch } = useSearch();
    const [category, setCategory] = useState('');

    const currentUser = useAppSelector(getCurrentUser);
    const filteredFavoriteFoods = useAppSelector(getFavoriteFilteredFoods);
    const modalType = useAppSelector(getModalType);

    const { data: categories } = useGetAllCategoriesQuery();
    const [filterFavoriteFoodByCategory] = useFilterFavoriteFoodByCategoryMutation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!search) {
            dispatch(setFavoriteFilteredFoods([]));
        }
    }, [search]);

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item.title);
        if (item.title === 'All') {
            dispatch(setFavoriteFilteredFoods([]));
        } else {
            await filterFavoriteFoodByCategory({ categoryId: item.id, userId: currentUser!.id }).unwrap();
        }
    };

    const renderCategoryItem = useCallback(
        ({ item }: { item: { id: number; title: string } }) => (
            <CategoryContainer
                style={{ backgroundColor: category === item.title ? darkTheme.COLORED_BUTTON : undefined }}
                onPress={onCategoryPress(item)}
            >
                <TextCategory>{item.title}</TextCategory>
            </CategoryContainer>
        ),
        [category],
    );

    const renderFoodItem = useCallback(({ item }: { item: IFood }) => <FoodItem item={item} />, []);

    return (
        <RootContainer>
            <AvatarBlock title="Lets eat Favorite food" />
            <SearchBar search={search} setSearch={setSearch} filterHandler={filterFavoriteBySearch} />
            <CategoriesContainer>
                <FlatList
                    initialNumToRender={10}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="center"
                    data={categories}
                    renderItem={renderCategoryItem}
                />
            </CategoriesContainer>
            <FoodContainer>
                <FlatList
                    data={filteredFavoriteFoods.length ? filteredFavoriteFoods : currentUser!.favorites}
                    renderItem={renderFoodItem}
                    numColumns={2}
                    columnWrapperStyle={styles.wrapper}
                    showsVerticalScrollIndicator={false}
                />
            </FoodContainer>

            {modalType === 'match' && (
                <CustomModal>
                    <Match />
                </CustomModal>
            )}
        </RootContainer>
    );
};
