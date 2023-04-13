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
import { categories } from '~src/contants/categories';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { getCurrentUser, getFavoriteFilteredFoods, getModalType } from '~src/redux/selectors';
import { IFood, setFavoriteFilteredFoods } from '~src/redux/slices/foodSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const FavoriteScreen = () => {
    const { search, setSearch, filterFavoriteBySearch } = useSearch();
    const [category, setCategory] = useState('Salty');
    const currentUser = useAppSelector(getCurrentUser);
    const filteredFavoriteFoods = useAppSelector(getFavoriteFilteredFoods);
    const modalType = useAppSelector(getModalType);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!search) {
            dispatch(setFavoriteFilteredFoods([]));
        }
    }, [search]);

    const onCategoryPress = (item: string) => () => setCategory(item);

    const renderCategoryItem = useCallback(
        ({ item }: { item: string }) => (
            <CategoryContainer
                bgColor={category === item ? darkTheme.COLORED_BUTTON : lightTheme.BUTTON_COLOR}
                onPress={onCategoryPress(item)}
            >
                <TextCategory>{item}</TextCategory>
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
