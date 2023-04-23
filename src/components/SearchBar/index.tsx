import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, IconContainer, SearchBarInput } from '~components/SearchBar/style';
import { ISearchBar } from '~components/SearchBar/type';
import { darkTheme } from '~src/contants/theme';

export const SearchBar: FC<ISearchBar> = ({ setSearch, search, filterHandler }) => (
    <Container>
        <SearchBarInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search food ..."
            placeholderTextColor={darkTheme.SECONDARY_COLOR}
        />
        <IconContainer>
            <Icon name="search" size={24} color="grey" onPress={filterHandler} />
        </IconContainer>
    </Container>
);
