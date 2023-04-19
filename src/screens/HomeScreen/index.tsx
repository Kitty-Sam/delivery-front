import React, { FC, useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { AvatarBlock } from '~components/AvatarBlock';
import { CustomModal } from '~components/CustomModal';
import { FoodItem } from '~components/FoodItem';
import { Match } from '~components/Modals/Match';
import { Success } from '~components/Modals/Success';
import { SearchBar } from '~components/SearchBar';
import { useSearch } from '~hooks/useSearch';
import { HomeScreenProps } from '~navigation/HomeStack/type';
import { RootStackNavigationName } from '~navigation/RootStack/type';
import {
    CategoriesContainer,
    CategoryContainer,
    FoodContainer,
    RootContainer,
    styles,
    TextCategory,
} from '~screens/HomeScreen/style';
import { width } from '~src/contants/dimensions';
import { darkTheme } from '~src/contants/theme';
import { useFilterFoodByCategoryMutation, useGetAllCategoriesQuery, useGetAllFoodsQuery } from '~src/redux/api/foodApi';
import { getFilteredFoods, getModalType } from '~src/redux/selectors';
import { IFood, setFilteredFoods } from '~src/redux/slices/foodSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    const { data: allFoods } = useGetAllFoodsQuery();
    const { data: categories } = useGetAllCategoriesQuery();

    const [filterFoodByCategory] = useFilterFoodByCategoryMutation();

    const [category, setCategory] = useState('');

    const dispatch = useAppDispatch();

    const modalType = useAppSelector(getModalType);
    const filteredFoods = useAppSelector(getFilteredFoods);

    const { search, setSearch, filterBySearch } = useSearch();

    useEffect(() => {
        if (!search) {
            dispatch(setFilteredFoods([]));
        }
    }, [search]);

    const renderFoodItem = useCallback(({ item }: { item: IFood }) => <FoodItem item={item} />, []);

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item.title);
        if (item.title === 'All') {
            dispatch(setFilteredFoods([]));
        } else {
            await filterFoodByCategory({ categoryId: item.id }).unwrap();
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

    const onBucketPress = () => {
        // @ts-ignore
        navigation.navigate(RootStackNavigationName.ORDER);
    };

    return (
        <RootContainer>
            <AvatarBlock title="Lets eat  Quality food" />
            <SearchBar search={search} setSearch={setSearch} filterHandler={filterBySearch} />
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
                    data={filteredFoods.length ? filteredFoods : allFoods}
                    renderItem={renderFoodItem}
                    numColumns={2}
                    columnWrapperStyle={styles.wrapper}
                    showsVerticalScrollIndicator={false}
                />
            </FoodContainer>
            <Icon
                name="trash-bin-sharp"
                onPress={onBucketPress}
                color={darkTheme.COLORED_BUTTON}
                size={36}
                style={{ position: 'absolute', bottom: 0, left: width / 2.2 }}
            />

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
