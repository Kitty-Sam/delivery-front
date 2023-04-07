import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

export const useSearch = () => {
    const [search, setSearch] = useState('');
    const filterBySearch = () => {
        if (search) {
            console.log('search is coming');
        }
    };
    const filterHandler = useCallback(debounce(filterBySearch, 1000), [search]);

    return {
        filterHandler,
        search,
        setSearch,
    };
};
