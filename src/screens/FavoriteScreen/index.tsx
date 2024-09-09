import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TextBase } from 'react-native';

import { AvatarBlock } from '~components/AvatarBlock';
import { CustomModal } from '~components/CustomModal';
import { FoodItem } from '~components/FoodItem';
import { CenteredContainer } from '~components/Form/style';
import { Match } from '~components/Modals/Match';
import { TextTitle } from '~components/Modals/style';
import { Success } from '~components/Modals/Success';
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
import { darkTheme } from '~src/contants/theme';
import { useGetAllCategoriesQuery } from '~src/redux/api/foodApi';
import { useAppDispatch, useAppSelector } from '~src/redux/configureStore';
import { getFavoritesFoods, getModalType } from '~src/redux/selectors';
import { IFood } from '~src/redux/slices/foodSlice';
import { setFavorites } from '~src/redux/slices/userSlice';

export const FavoriteScreen = () => {
    const [category, setCategory] = useState('');

    const favorites = useAppSelector(getFavoritesFoods);

    const modalType = useAppSelector(getModalType);

    const { data: categories } = useGetAllCategoriesQuery();

    const dispatch = useAppDispatch();

    const { search, setSearch } = useSearch();

    useEffect(() => {
        if (!search) {
            dispatch(setFavorites([]));
        }
    }, [search]);

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item.title);
        if (item.title === 'All') {
            dispatch(setFavorites([]));
        }
        // else {
        //     await filterFavoriteFoodByCategory({ categoryId: item.id, userId: currentUser!.id }).unwrap();
        // }
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
            <FoodContainer>
                {favorites.length ? (
                    <FlatList
                        data={favorites}
                        renderItem={renderFoodItem}
                        numColumns={2}
                        columnWrapperStyle={styles.wrapper}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <CenteredContainer>
                        <TextTitle>Add your first favorite position</TextTitle>
                    </CenteredContainer>
                )}
            </FoodContainer>

            {modalType === 'success' && (
                <CustomModal>
                    <Success />
                </CustomModal>
            )}

            {modalType === 'match' && (
                <CustomModal>
                    <Match />
                </CustomModal>
            )}
        </RootContainer>
    );
};
