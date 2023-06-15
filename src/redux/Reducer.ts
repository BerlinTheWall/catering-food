/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import { persistReducer } from 'redux-persist';
import { User, UserAction } from '../types/user';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserState } from '../types/user';
import * as actionTypes from './actionTypes';
import storage from 'redux-persist/es/storage';

const initialState: UserState = {
  user: {
    id: '0',
    fullName: '',
    groupId: 0,
    foodSizes: ['0'],
    orderTypes: ['0'],
  },
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;

// Configure Redux Persist
// const persistConfig = {
//   key: 'root', // The key for the persisted state
//   storage, // The storage type to use
//   // whitelist: ['user'], // The reducers to persist (optional)
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);
// export default persistedReducer;

// export default reducer;
