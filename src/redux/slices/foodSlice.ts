import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFood {
    id: number;
    name: string;
    description: string;
    price: string;
    about: string;
    image?: string;
}

type FoodState = {
    foods: IFood[];
    filteredFoods: IFood[];
};

const initialState: FoodState = {
    foods: [],
    filteredFoods: [],
};

const foodSlice = createSlice({
    initialState,
    name: 'foodSlice',
    reducers: {
        setAllFoods: (state, action: PayloadAction<IFood[]>) => {
            state.foods = action.payload;
        },
        setFilteredFoods: (state, action: PayloadAction<IFood[]>) => {
            state.filteredFoods = action.payload;
        },
    },
});

export default foodSlice.reducer;

export const { setAllFoods, setFilteredFoods } = foodSlice.actions;
