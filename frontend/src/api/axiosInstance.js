import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

//request interceptor : Handling token append to headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

//response interceptors : Handling global error

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status);
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.log("Unauthorized access");
      } else if (status === 403) {
        console.log("Forbidden access");
      } else if (status === 404) {
        console.log("API not found");
      } else if (status >= 500) {
        console.log("Server error");
      }
    } else if (error.request) {
      console.log("No response from server");
    } else {
      console.log("Request error:", error.message);
    }

    return Promise.reject(error);
  }
);


export default axiosInstance

