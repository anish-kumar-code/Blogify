import axios from 'axios';


export const addBlog = async (data) => {
    let response = await axios.post('https://blogify-u9g6.onrender.com/addblog', data)
    return response;
}


export const getAllBlog = async () => {
    let response = await axios.get('https://blogify-u9g6.onrender.com/allblog')
    return response;
}

export const getSingleBlogDetails = async (id) => {
    let response = await axios.get(`https://blogify-u9g6.onrender.com/getblogbyid/${id}`)
    return response;
}

export const editBlog = async (id, data) => {
    let response = await axios.patch(`https://blogify-u9g6.onrender.com/editblog/${id}`, data)
    return response;
}