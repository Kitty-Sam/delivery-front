import { RootState } from '~src/redux/store';

export const getCurrentUser = (state: RootState) => state.userStore.currentUser;
export const getIsLoggedIn = (state: RootState) => state.userStore.isLoggedIn;
export const getModalType = (state: RootState) => state.modalStore.type;
export const getBucketOrders = (state: RootState) => state.bucketStore.orders;
