import apiService from "../api/apiService";

//register: called by auth component when register button is clicked
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}

//login: called by auth component when login button is clicked
export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData)
}
