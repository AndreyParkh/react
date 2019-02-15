import { USER_GET, USER_OUT, PROFILE_STATE_PENDING } from '@app-constants/auth';

export const profileReducer = (state = PROFILE_STATE_PENDING, action) => {
  switch(action.type) {
    case USER_GET: {
      return action.payload;
    }
    case USER_OUT: {
      return null;
    }
  }

  return state;
};
