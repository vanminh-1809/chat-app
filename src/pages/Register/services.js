import axios from "axios";

export const signUp = async (data) => {
    const res = await axios.post('http://localhost:8081/api/auth/register', data);
    return res.data;
}