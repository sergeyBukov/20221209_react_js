import * as types from '../profile/types'

/* 1 вариант */
// export const changeName = (data) => {
//   return {
//     type: types.CHANGE_NAME, 
//     payload: data
//   }
// }

/* 2 вариант */
export const changeName = (data) => ({
    type: types.CHANGE_NAME,
    payload: data
})

export const toggleProfile = () => ({
    type: types.TOGGLE_PROFILE
})