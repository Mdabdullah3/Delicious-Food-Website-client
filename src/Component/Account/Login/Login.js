import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UseToken from "../../../Hooks/UseToken";
import auth from "../../firebase.init";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //   Pass Reset
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // Google Singing
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    // error handling

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setUserError({ ...userError, email: "" });
    } else {
      setUserError({ ...userError, email: "Please Provide Valid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    // error handling

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setUserError({ ...userError, password: "" });
    } else {
      setUserError({ ...userError, password: "Minimum 6 characters! Use" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const [token] = UseToken(user || guser)
  if (token) {
    toast.success("Sign Up Succesfull");
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || guser) {
      navigate(from);
    }
  }, [user, guser]);

  const restPassword = async () => {
    const email = userInfo.email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent Email");
    } else {
      toast.error("Please Use Your Valid Email");
    }
  };

  useEffect(() => {
    const errors = error || gerror;
    if (errors) {
      switch (errors?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [error, gerror]);

  return (
    <div className="login-background mt-[-68px]">
      <div className="flex items-center justify-center h-full pt-20">
        <form className="shadow-2xl" onSubmit={handleLogin}>
          <div className="px-16 py-10">
            <h2 className="text-3xl text-primary font-semibold text-center mb-10">
              Please Login
            </h2>
            <div>
              <input
                className="input input-bordered  border-primary w-full text-lg my-6 border-[3px] bg-transparent text-primary"
                onChange={handleEmailChange}
                name="email"
                type="text"
                placeholder="Enter Your E-mail"
                required
              />
            </div>
            {userError?.email && (
              <p className="text-red-500">{userError.email}</p>
            )}
            <div>
              <input
                className="input input-bordered bg-transparent border-primary w-full text-lg mb-4 border-[3px] text-primary"
                onChange={handlePassword}
                name="password"
                type="password"
                placeholder="Enter Your Password"
                required
              />
              {userError?.password && (
                <p className="text-red-500">{userError.password}</p>
              )}
            </div>
            <button className="btn btn-primary text-white w-full text-lg mt-4 rounded">
              Login
            </button>
            <p className="ml-3 mt-8 text-black font-semibold text-md">
              New To Delicious
              <Link className="ml-2 underline text-primary" to="/signup">
                Sign Up First
              </Link>
            </p>
            <div class="divider text-black">Or</div>
            <button
              className="btn btn-outline btn-primary rounded w-full text-lg border-[3px]"
              onClick={() => signInWithGoogle()}
            >
              Contine With Google
            </button>
            <div className="w-5/12 mx-auto">
              <h1
                className="mt-8 btn-primary text-white text-center btn"
                onClick={() => restPassword()}
              >
                Reset Pass
              </h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
