import User from "@/models/userModel";
import axios from "axios";
import { NextRequest } from "next/server";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { connect } from "@/config/dbConfig";
import { useDispatch } from "react-redux";
import { errors } from "@/app/GlobalRedux/Features/user/userSlice";

connect();

const Dispatch = useDispatch();

module.exports = {
  sendRequest: async ({ routePath, data, requestType }: any) => {
    var response;

    try {
      console.log("----------");
    console.log(
      `API =>> ${routePath} & Type =>> ${requestType}, With PayLoad =>> ${JSON.stringify(data)}`
    );
    console.log("----------");

    switch (requestType) {
      case "POST":
        response = await axios.post(routePath, JSON.stringify(data),{withCredentials:true,headers:{
            'Content-Type':'application/json'
        }});
        break;
      case "GET":
        break;
      case "PUT":
        break;
      case "PATCH":
        break;
      case "DELETE":
        break;

      default:
        break;
    }

    console.log(
      `Response of API => ${routePath} & Type =>> ${requestType} is =>>>> ${JSON.stringify(response?.data)}`
    );

    switch (response!.status) {
      case 200:
        return response;
        break;
      case 202:
        return response;
        break;
      default:
        return response;
        break;
    }
    } catch (error:any) {
      console.log('In error section => ',error);
      Dispatch(errors(error.response.data.message));
      return error.response;

    }
    
  },

  resolveErrorWithMessage: ({data}:any)=>{
    return data.message;
  },

  isLoggedIn : async ({req}:any) => {

    try {
      const token = req.cookies.token;
      console.log('The cookie is ',token);
      
      const { id } = jwt.verify(token, process.env.SECRET_KEY);
      console.log('The id is ',id);
      
      const user = await User.findById(id).exec();
      req.user = user;

    } catch (error:any) {
      if (error.name === "JsonWebTokenError") {
        // return res.status(401).json({ message: "can not access the resource" });
      } else if (error.name === "TokenExpiredError") {
        // res.status(401).json({ message: "session timeout! login again" });
      } else {
        // res.status(401).json(error);
      }
    }
  }

};
