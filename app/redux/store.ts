import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
        immutableCheck: false,
    }).concat(sagaMiddleware);

const store = configureStore({
    reducer: rootReducer,
    middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
