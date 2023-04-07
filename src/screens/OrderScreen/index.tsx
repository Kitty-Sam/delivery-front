import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AvatarBlock } from '~components/AvatarBlock';
import { SearchBar } from '~components/SearchBar';
import { useSearch } from '~hooks/useSearch';

export const OrderScreen = () => {
    const { search, setSearch, filterHandler } = useSearch();
    return (
        <SafeAreaView>
            <AvatarBlock title="Lets eat Favorite food" />
            <SearchBar search={search} setSearch={setSearch} filterHandler={filterHandler} />
        </SafeAreaView>
    );
};
