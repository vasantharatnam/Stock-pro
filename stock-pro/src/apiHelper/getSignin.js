import axios from "axios";


export const getSignin = async (username,email,password) => {
    
    try{
        const response = await axios.post("/signup",{username:username,email:email,password:password});
        console.log("Signed in",response);
        if (response.data.message === "Succesfully Inserted" && response && response.data) {
            return true; // SignIn successful
        } else {
            console.error("SignIn failed:", response?.data?.message || "Unknown error");
            return false; // SignIn failed
          }
    }
    catch (error) {
        console.error("SignIn failed:", error.message);
        return false; // SignIn failed
    }

};

// export default getSignin;