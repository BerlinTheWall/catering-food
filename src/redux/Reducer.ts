/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import { User, UserAction } from '../types/user';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserState } from '../types/user';
import * as actionTypes from './actionTypes';

const initialState: UserState = {
  user: {
    id: '0',
    fullName: 'name',
    groupId: 0,
    foodSizes: ['0'],
    orderTypes: ['0'],
  },
};

const reducer = (state = initialState, action: UserAction): UserState => {
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
  }
  return state;
};

export default reducer;
