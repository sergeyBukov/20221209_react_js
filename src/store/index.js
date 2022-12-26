import { createStore, compose } from 'redux'
import { profileReducer } from './profile/reducer'

/* для отображения в браузере REDUX наши Store в который мы передаем наши Reducer*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(profileReducer, composeEnhancers())