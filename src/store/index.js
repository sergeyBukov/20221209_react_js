import { createStore, compose, combineReducers } from 'redux'
import { profileReducer } from './profile/reducer'
import { messagesReducer } from './messages/reducer'
/* для отображения в браузере REDUX наши Store в который мы передаем наши Reducer*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
})

/* export const store = createStore(profileReducer, composeEnhancers()) */
export const store = createStore(rootReducer, composeEnhancers())