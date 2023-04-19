import { RootState } from '~src/redux/store';

export const getCurrentUser = (state: RootState) => state.userStore.currentUser;
export const getCouriers = (state: RootState) => state.userStore.currentUser!.orders;
export const getIsLoggedIn = (state: RootState) => state.userStore.isLoggedIn;
export const getModalType = (state: RootState) => state.modalStore.type;
export const getBucketOrders = (state: RootState) => state.bucketStore.orders;
export const getFilteredFoods = (state: RootState) => state.foodStore.filteredFoods;
export const getFavoriteFilteredFoods = (state: RootState) => state.foodStore.filteredFavoriteFoods;
