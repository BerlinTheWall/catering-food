import { DispatchType, User, UserAction } from 'types/user';
import * as actionTypes from './actionTypes';

export function addUser(user: User): UserAction {
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    user,
  };

  return action;
}

export function removeUser(user: User): UserAction {
  const action: UserAction = {
    type: actionTypes.REMOVE_USER,
    user,
  };
  return action;
}

export function simulateHttpRequest(action: UserAction) {
  return (dispatch: DispatchType): void => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
