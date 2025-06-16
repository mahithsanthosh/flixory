import React from 'react';
import Header from './Header';
import validateForm from '../utils/validateForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import backgroundWallpaper from '../assets/background_wallpaper.jpg'; // Import the image

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const name = React.useRef<HTMLInputElement>(null);
  const email = React.useRef<HTMLInputElement>(null);
  const password = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const message = validateForm({
      email: email.current as HTMLInputElement,
      password: password.current as HTMLInputElement,
    });
    console.log(message);

    if (!message && email.current?.value && password.current?.value && !isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else if (!message && email.current?.value && password.current?.value && isSignIn) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), black), url(${backgroundWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <div>
        <form
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2  bg-gray-950/60 px-12 pt-12 pb-18 text-black w-2/9"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className='text-4xl text-white font-bold mb-6'>{isSignIn ? 'Sign in' : 'Sign up'}</h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              ref={name}
              className="w-full h-3/6 p-4 mt-6 border-amber-50 bg-gray-300 placeholder:text-black"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            ref={email}
            className="w-full h-3/6 p-4 mt-4 border-amber-50 bg-gray-300 placeholder:text-black"
          />
          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="w-full h-3/6 p-4 mt-4 border-amber-50 bg-gray-300 placeholder:text-black"
          />
          <button className="w-full p-4 mt-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold" onClick={handleSubmit}>
            Submit
          </button>
          <button
            onClick={toggleLogin}
            className="text-white bg-transparent border-none cursor-pointer mt-12"
          >
            {isSignIn ? 'New to Flixory? Sign up now.' : 'Already have an account? Sign in.'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
