import axios from "axios"
import { loadUser, setLoadingFalse } from "./userSlice";

export const asyncLoadUser = ()=> async (dispatch:any)=>{
    try {
        const {data} = await axios.get('/api/users/current-user');
        console.log('Response from /api/users/current-user',data);
        dispatch(loadUser(data.user));
    } catch (error) {
        dispatch(setLoadingFalse(''));
    }
}