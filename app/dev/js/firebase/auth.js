import { auth, provider } from '@app-firebase/firebase';

export const singIn = () => {
  return auth.signInWithPopup(provider).then((result) => {
    return result;
  });
};

export const authStateChange = (cb) => {
  return auth.onAuthStateChanged((user) => {
    cb && cb(user);

    return user;
  });
};
