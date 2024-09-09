import { useState } from 'react';

import { useFilterFoodMutation } from '~src/redux/api/foodApi';

export const useSearch = () => {
    const [search, setSearch] = useState('');

    const [filterFood] = useFilterFoodMutation();

    const filterBySearch = async () => {
        if (search) {
            await filterFood({ foodName: search }).unwrap();
        }
    };

    return {
        filterBySearch,
        search,
        setSearch,
    };
};
