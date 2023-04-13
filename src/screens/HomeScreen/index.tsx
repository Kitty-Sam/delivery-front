import React, { FC, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { AvatarBlock } from '~components/AvatarBlock';
import { CustomModal } from '~components/CustomModal';
import { FoodItem } from '~components/FoodItem';
import { Success } from '~components/Modals/Success';
import { SearchBar } from '~components/SearchBar';
import { useSearch } from '~hooks/useSearch';
import { HomeScreenProps } from '~navigation/HomeStack/type';
import { RootStackNavigationName } from '~navigation/RootStack/type';
import { CategoriesContainer, CategoryContainer, RootContainer, styles, TextCategory } from '~screens/HomeScreen/style';
import { categories } from '~src/contants/categories';
import { width } from '~src/contants/dimensions';
import { darkTheme, lightTheme } from '~src/contants/theme';
import { useGetAllFoodsQuery } from '~src/redux/api/foodApi';
import { getModalType } from '~src/redux/selectors';
import { IFood } from '~src/redux/slices/foodSlice';
import { logOut } from '~src/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '~src/redux/store';

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    const { data: allFoods } = useGetAllFoodsQuery();
    const [category, setCategory] = useState('Fast food');

    const dispatch = useAppDispatch();

    const modalType = useAppSelector(getModalType);

    const { search, setSearch, filterHandler } = useSearch();

    const renderFoodItem = useCallback(({ item }: { item: IFood }) => <FoodItem item={item} />, []);

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

    const logoutPress = () => {
        dispatch(logOut());
    };

    const onBucketPress = () => {
        // @ts-ignore
        navigation.navigate(RootStackNavigationName.ORDER);
    };

    return (
        <RootContainer>
            {/* <Button title="logout" onPress={logoutPress} /> */}
            <AvatarBlock title="Lets eat  Quality food" />
            <SearchBar search={search} setSearch={setSearch} filterHandler={filterHandler} />
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
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={allFoods}
                renderItem={renderFoodItem}
                numColumns={2}
                columnWrapperStyle={styles.wrapper}
            />
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
        </RootContainer>
    );
};
