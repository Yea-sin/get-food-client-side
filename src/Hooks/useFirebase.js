import initializeAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const singInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((e) => setError(e.message))
      .finally(setIsLoading(false));
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((e) => setUser(e.message))
      .finally(setIsLoading(false));
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);

  return {
    singInUsingGoogle,
    logOut,
    isLoading,
    user,
    error,
  };
};

export default useFirebase;
