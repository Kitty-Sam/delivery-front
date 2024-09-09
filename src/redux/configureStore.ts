import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';

import { authApi } from '~src/redux/api/authApi';
import { foodsApi } from '~src/redux/api/foodApi';
import { usersApi } from '~src/redux/api/userApi';
import { rootReducer } from '~src/redux/store';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['nonSerializableStateKey'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Игнорирование действия PERSIST
                ignoredPaths: ['register', 'rehydrate'], // Игнорирование путей, содержащих функции
            },
        }).concat([usersApi.middleware, foodsApi.middleware, authApi.middleware]),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
