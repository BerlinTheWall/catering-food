/* eslint-disable @typescript-eslint/no-unused-vars */
export interface User {
  id: string;
  fullName: string;
  groupId: number;
  orderTypes: string[];
  foodSizes: string[];
}

export type UserState = {
  user?: User;
};

export type UserAction = {
  type: string;
  user?: User;
};

export type DispatchType = (args: UserAction) => UserAction;
