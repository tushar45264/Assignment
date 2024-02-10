import React from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

import { Img, Input, Text } from "components";
import { Link, useNavigate } from "react-router-dom"

const SignInPage = () => {
  const navigate =useNavigate();
  const handleSignInClick = () => {
    navigate('/Upload');
    toast.success('Successfully logged in');
  };
  const googleSignIn = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);
      localStorage.setItem('userinfo', JSON.stringify(userInfo));
      console.log(userInfo);
      navigate("/Upload");
    },
  });
  
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-center justify-start md:px-0 w-[86%] md:w-full">
          <div
            className="bg-cover bg-no-repeat md:h-10 h-[1091px] p-[54px] md:px-10 sm:px-5 relative md:w w-[59%] md:w-full"
            style={{ backgroundImage: "url('images/img_group2.svg')" }}
          >
            <div className="absolute flex md:flex-row flex-col md:gap-10 gap-[328px] h-max inset-y-[0] justify-start md:left-0 md:px-10 left-[8%] my-auto md:w-full w-[54%]">
              <div className="bg-white-A700 h-20 md:mr-0 mr-[302px] rounded-[50%] w-20"></div>
              <div className="flex  flex-col md:gap-10 gap-[357px]  justify-center md:ml-[0px] ml-[83px] w-[79%] md:w-full">
                <Text
                  className="md:text-5xl text-7xl text-white-A700_01"
                  size="txtMontserratBold72"
                >
                  BASE
                </Text>
                <div className="md:hidden flex flex-row items-center justify-between">
                  <Img
                    className="h-11 w-11"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="h-[41px] w-[42px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <Img
                    className="h-12 w-12"
                    src="images/img_carbonlogolinkedin.svg"
                    alt="carbonlogolinke"
                  />
                  <Img
                    className="h-12 w-[50px]"
                    src="images/img_carbonlogodiscord.svg"
                    alt="carbonlogodisco"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute md:h-[22px] h-[28px] md:left-10 z-50 left-12 top-32 md:top-10"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-col px-0 md:px-10 items-start justify-start w-[35%] md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtMontserratBold36"
            >
              Sign In
            </Text>
            <Text
              className="mt-2 text-base text-black-900"
              size="txtLatoRegular16"
            >
              Sign in to your account
            </Text>
            <div className="flex sm:flex-col flex-row font-montserrat gap-7 items-center justify-between mt-[27px] w-full">
              <div
                className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div
                  className="common-pointer flex flex-row gap-[17px] items-start justify-start w-[82%] md:w-full"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_googleicon1.svg"
                    alt="googleiconOne"
                  />
                  <Text
                    className="mt-0.5 text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-row gap-[17px] items-start justify-center w-[76%] md:w-full">
                  <Img
                    className="h-[15px] mb-0.5"
                    src="images/img_user_gray_500.svg"
                    alt="user_One"
                  />
                  <Text
                    className="mt-[3px] text-center text-gray-600 text-xs"
                    size="txtMontserratRegular12"
                  >
                    Sign in with Apple
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-6 items-center justify-start mt-[27px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[347px] items-center justify-end p-8 sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Email address
                  </Text>
                  <Input
                    name="groupOne"
                    placeholder="Johndoe@gmail.com"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="mt-[11px] w-full"
                  ></Input>
                  <Text
                    className="mt-[22px] text-base text-black-900"
                    size="txtLatoRegular16"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupOne"
                    placeholder="••••••••"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="mt-[11px] w-full"
                  ></Input>
                  <a
                    href="javascript:"
                    className="mt-[23px] text-base text-blue-700"
                  >
                    <Text size="txtLatoRegular16Blue700">Forgot password?</Text>
                  </a>
                  <Link className="mt-3 py-2 w-full rounded bg-blue-600 text-center"  to="/Upload">
                  <button className=" text-white-A700_01" onClick={handleSignInClick}>
                    SignIn
                  </button>
                </Link>
                </div>
              </div>
              <Text
                className="text-base text-center text-gray-600"
                size="txtLatoRegular16Gray600"
              >
                <span className="text-gray-600 font-lato font-normal">
                  Don’t have an account?{" "}
                </span>
                <span className="text-blue-700 font-lato font-normal">
                  Register here
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
