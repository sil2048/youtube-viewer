import produce from 'immer';
import * as consts from './constants';

export const initialState = {
  loginStatus: {
    waiting: false,
    error: false,
    data: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
export default function(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case consts.LOGIN:
        draft.loginStatus = {
          waiting: true,
          error: false,
          data: null,
        };
        break;
      case consts.LOGIN_SUCCESS:
        draft.loginStatus = {
          waiting: false,
          error: false,
          data: action.payload,
        };
        break;
      case consts.LOGIN_ERROR:
        draft.loginStatus = {
          waiting: false,
          error: action.error,
          data: null,
        };
        break;
      case consts.RESET_LOGIN:
        draft.loginStatus = {
          waiting: false,
          error: false,
          data: null,
        };
    }
  });
}
