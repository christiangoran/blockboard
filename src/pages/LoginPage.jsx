import React, { useState } from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { blockboardSymbol } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useCurrentUser } from "../context/CurrentUserContext";
import { setTokenTimestamp } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import axios from "axios";

const LoginPage = () => {
  const setCurrentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handleSubmit fired");
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      console.log("request sent");
      setCurrentUser(data.user);
      console.log("setCurrentUser fired, so there is a response");
      setTokenTimestamp(data);
      navigate("/blockboard/");
      console.log("navigated to /blockboard/");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Section className="h-[90vh] overflow-hidden" id="login">
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full mb-8">
              <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                <img
                  src={blockboardSymbol}
                  width={48}
                  height={48}
                  alt="blockboard symbol"
                />
              </div>
            </div>

            <Heading
              tag="unleash the power of BlockBoard"
              title="Sign in to your account"
            />
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block leading-6 body-2 text-n-1/50"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-color-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-3 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={username}
                  />
                </div>
              </div>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block leading-6 body-2 text-n-1/50"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="block leading-6 text-color-5 hover:text-color-1"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-color-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-3 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={password}
                  />
                </div>
              </div>
              {errors.password?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <div>
                <Button
                  type="submit"
                  className="flex justify-center w-full"
                  white
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </div>
            </form>

            <p className="mt-10 text-sm text-center text-gray-500">
              Not a member?{" "}
              <Link
                to="/signup"
                className="leading-6 text-color-5 hover:text-color-1"
              >
                Start a 14 day free trial
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default LoginPage;
