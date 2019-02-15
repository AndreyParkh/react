import { USER_GET } from '@app-constants/auth';

export const signIn = () => {
  return {
    type: USER_GET,
    payload: {
      id: 54654,
      email: 'example@mail.com',
      avatarUrl: 'somewhere',
    },
  };
};
