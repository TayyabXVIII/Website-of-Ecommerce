
import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./index.js"

const store = configureStore({
    reducer: rootReducers,
});

export default store;