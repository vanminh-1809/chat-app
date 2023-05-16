import axios from "axios"

const API_KEY = 'AIzaSyCX83Jx7dpq_0r_5HBKZa6CmSZ9PPJP8gQ'

export const getAddress = async (lat, lng) => {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
    return res.data;
}