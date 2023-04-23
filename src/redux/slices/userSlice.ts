import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFood } from '~src/redux/slices/foodSlice';

export interface IUser {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    password: string;
    favorites: IFood[];
    orders: ICourierWithOrder[];
}

export interface ICourierWithOrder {
    courier: {
        avatar: string;
        id: number;
        name: string;
        surname: string;
        phone: string;
    };
    id: number;
    address: string;
    courierId: number;
    total: number;
    userId: number;
    createdAt: any;
}
type UserState = {
    currentUser: IUser | null;
    isLoggedIn: boolean;
    theme: null | 'dark' | 'light';
};

const initialState: UserState = {
    currentUser: null,
    isLoggedIn: false,
    theme: null,
};

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        setCurrentUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload;
        },
        setTheme: (state, action: PayloadAction<any>) => {
            state.theme = action.payload;
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

export const { setCurrentUser, logIn, logOut, setTheme } = userSlice.actions;
