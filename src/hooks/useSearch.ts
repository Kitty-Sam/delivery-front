import { useState } from 'react';

import { useFilterFavoriteFoodMutation, useFilterFoodMutation } from '~src/redux/api/foodApi';
import { getCurrentUser } from '~src/redux/selectors';
import { useAppSelector } from '~src/redux/store';

export const useSearch = () => {
    const [search, setSearch] = useState('');

    const [filterFood] = useFilterFoodMutation();
    const [filterFavoriteFood] = useFilterFavoriteFoodMutation();

    const currentUser = useAppSelector(getCurrentUser);
    const filterBySearch = async () => {
        if (search) {
            await filterFood({ foodName: search }).unwrap();
        }
    };

    const filterFavoriteBySearch = async () => {
        if (search) {
            await filterFavoriteFood({ userId: currentUser!.id, foodName: search }).unwrap();
        }
    };

    return {
        filterFavoriteBySearch,
        filterBySearch,
        search,
        setSearch,
    };
};
