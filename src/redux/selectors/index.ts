import { RootState } from '~src/redux/store';

export const gerCurrentUser = (state: RootState) => state.userStore.currentUser;
