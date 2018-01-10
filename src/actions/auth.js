import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
<<<<<<< HEAD
}
=======
}

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});
>>>>>>> 8aba8418547a25cef0d349cffa6ca666b77c59d0
