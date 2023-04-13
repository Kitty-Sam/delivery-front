import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFood } from '~src/redux/slices/foodSlice';

export interface IUser {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    password: string;
    favorites: IFood[];
    orders: IFood[];
}

type UserState = {
    currentUser: IUser | null;
    isLoggedIn: boolean;
};

const initialState: UserState = {
    currentUser: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload;
        },
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
        },
    },
});

export default userSlice.reducer;

export const { setCurrentUser, logIn, logOut } = userSlice.actions;
