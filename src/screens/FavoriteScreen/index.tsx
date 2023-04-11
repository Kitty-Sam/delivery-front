import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarBlock } from '~components/AvatarBlock';
import { SearchBar } from '~components/SearchBar';
import { useSearch } from '~hooks/useSearch';
import { CategoriesContainer, CategoryContainer, TextCategory } from '~screens/HomeScreen/style';
import { categories } from '~src/contants/categories';
import { darkTheme, lightTheme } from '~src/contants/theme';

export const FavoriteScreen = () => {
    const { search, setSearch, filterHandler } = useSearch();
    const [category, setCategory] = useState('Salty');

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

    return (
        <SafeAreaView>
            <AvatarBlock title="Lets eat Favorite food" />
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
        </SafeAreaView>
    );
};
