"use client";

import axios from "axios";
import { errors, loadUser, setLoadingFalse } from "./userSlice";
import { sendRequest } from "@/helpers/helper";

export const asyncLoadUser = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get("/api/users/current-user");
    console.log("Response from /api/users/current-user", data);
    dispatch(loadUser(data.user));
  } catch (error) {
    dispatch(setLoadingFalse(""));
  }
};

export const asyncSignUp = (data: any) => async (dispatch: any) => {
  try {
    console.log('Data => ',data.userName);
    dispatch({type:"SignUpUser"});
    const response = await sendRequest({
      routePath: "/api/users/signup",
      requestType: "POST",
      data: {
        username: data.userName,
        email: data.email,
        password: data.password,
      },
    });

  } catch (error) {
    console.log(`Error in asyncSignUp =>> ${error}`);
    
    dispatch(errors)
  }
};
