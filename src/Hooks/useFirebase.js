import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Auth/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
    // .then(result => {
    //     setUser(result.user);
    // })
    // .finally(() => setIsLoading(false));
  };

  // observe user state change
  const signInUsingFacebook = () => {
    setIsLoading(true);
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  //email  pass
  const handleUserRegister = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password, displayName);
    //  .then((result) => {
    //    console.log(result.user);
    //  })
    //  .catch((error) => {
    //    const errorMessage = error.message;
    //  });
    // console.log(displayName, "from useFirebase");
  };
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Signout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  // console.log(user)
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    Signout,
    signInUsingFacebook,
    handleUserRegister,
    setUserName,
    handleUserLogin,
  };
};

export default useFirebase;
