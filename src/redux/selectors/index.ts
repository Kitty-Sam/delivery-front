import { RootState } from '~src/redux/configureStore';

// modal
export const getModalType = (state: RootState) => state.modalStore.type;

// bucket
export const getBucketOrders = (state: RootState) => state.bucketStore.orders;

// foods
export const getFilteredFoods = (state: RootState) => state.foodStore.filteredFoods;

// user
export const getCurrentTheme = (state: RootState) => state.userStore.theme;
export const getIsActiveUser = (state: RootState) => state.userStore.isActiveUser;
export const getIsFirstUserAction = (state: RootState) => state.userStore.isFirstUserAction;
export const getFavoritesFoods = (state: RootState) => state.userStore.favorites;
