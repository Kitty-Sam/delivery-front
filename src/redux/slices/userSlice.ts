import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFood } from '~src/redux/slices/foodSlice';

type UserState = {
    isActiveUser: boolean;
    isFirstUserAction: boolean;
    theme: null | 'dark' | 'light';
    favorites: IFood[];
};

const initialState: UserState = {
    theme: null,
    isActiveUser: false,
    isFirstUserAction: true,
    favorites: [],
};

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        setTheme: (state, action: PayloadAction<any>) => {
            state.theme = action.payload;
        },
        setIsActiveUser(state, action: PayloadAction<boolean>) {
            state.isActiveUser = action.payload;
        },
        setIsFirstUserAction(state, action: PayloadAction<boolean>) {
            state.isFirstUserAction = action.payload;
        },
        setFavorites(state, action: PayloadAction<IFood[]>) {
            state.favorites = action.payload;
        },
        addInFavorites(state, action: PayloadAction<IFood>) {
            if (!state.favorites.some((favorite) => favorite.id === action.payload.id)) {
                state.favorites.push(action.payload);
            }
        },
        removeFromFavorite(state, action: PayloadAction<number>) {
            state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
        },
    },
});

export default userSlice.reducer;

export const { setTheme, setIsActiveUser, setIsFirstUserAction, addInFavorites, removeFromFavorite, setFavorites } =
    userSlice.actions;
