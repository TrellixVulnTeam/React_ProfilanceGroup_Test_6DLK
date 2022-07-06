import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./loginReducer";
import {secondReducer} from "./dataofNews";
import {thirdreducer} from "./newsRequestReducer";
import {fourthreducer} from "./accept";


// Создаем store (сюда необходимо передать редьюсер, если редьюсеров несколко, используем метод combineReducer)

let rootReducer = combineReducers({
    loginReducer: reducer,
    newsReducer: secondReducer,
    newsRequestReducer: thirdreducer,
    acceptReducer: fourthreducer
})


export const store = createStore(rootReducer, composeWithDevTools())
