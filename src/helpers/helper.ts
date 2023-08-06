import axios from "axios";
import { toast } from "react-toastify";

module.exports = {
  sendRequest: async ({ routePath, data, requestType }: any) => {
    console.log("----------");
    console.log(
      `API =>> ${routePath} & Type =>> ${requestType}, With PayLoad =>> ${JSON.stringify(data)}`
    );
    console.log("----------");

    var response;

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
      `Response of API => ${routePath} & Type =>> ${requestType} is =>>>> ${response!.json()}`
    );

    switch (response?.status) {
      case 200:
        return response;
        break;

      case 202:
        return response;
        break;

      case 404:
        return toast("Not Found!");
        break;
      case 400:
        return toast("Bad Request!");
        break;
      case 500:
        return toast("Internal Server Error");
        break;

      default:
        break;
    }

    return response;
  },
};
