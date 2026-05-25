import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('http://localhost:3000/addblog', data)
    return response;
}


export const getAllBlog = async () => {
    let response = await axios.get('http://localhost:3000/allblog')
    return response;
}