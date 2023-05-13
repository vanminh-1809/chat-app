import axios from "axios";

export const login = async (data) => {
    const res  = await axios.post('http://localhost:8081/api/auth/login', data)
    return res.data;
}