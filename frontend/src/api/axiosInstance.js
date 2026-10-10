import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

//response interceptors : Handling global error
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response received!!!");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("Unauthorized Access")
            }
            else if(status==404){
                console.log("API not found");
            }
            else if(status==500){
                console.log("Server Error");
            }else if(error.request){
                console.log("No response from server");
                return error.request.response
            }else{
                console.log(`Error: ${error.message}`);
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance