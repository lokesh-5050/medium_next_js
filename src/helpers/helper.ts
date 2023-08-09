import axios from "axios";
import { toast } from "react-toastify";

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
      
      return error.response;

    }
    
  },

  resolveErrorWithMessage: ({data}:any)=>{
    return data.message;
  }

};
