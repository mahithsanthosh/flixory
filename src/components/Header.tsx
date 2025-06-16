import { useEffect } from "react"
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/")
      }
    });

    return () => unsubscribe();
  },[])
  return (
  <div className="flex  justify-between">
    <div className="text-7xl p-6 py-3 mx-7 font-bold bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">
      Flixory
    </div>
    <button onClick={handleSignOut} className=" text-gray-200 text-sm bg-gradient-to-r from-red-500 to-pink-500 font-bold p-0 w-20 h-8 mx-7 my-4 rounded-sm">Sign out</button>
  </div>
  )
}

export default Header
