import axios from "axios";


const getLogin = async (username,password) => {
    try{
        const response = await axios.post("/login",{username:username,password:password});
        console.log("Logged in",response);
        if (response.data.message === "Login Successful" && response && response.data) {
            return true; // Login successful
        } else {
            console.error("Login failed:", response?.data?.message || "Unknown error");
            return false; // Login failed
          }
    }
    catch (error) {
        console.error("Login failed:", error.message);
        return false; // Login failed
    }
};

export default getLogin;