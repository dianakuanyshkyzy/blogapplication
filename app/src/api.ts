/*import axios from 'axios'; 

const useAxios = () => {
    const {auth} = useAuth();
    const authCreated = axios.create({
        baseURL: 'https://dummyjson.com/posts',
    }); 
    authCreated.interceptors.request.use((e)=>{
        if(auth){
            e.headers.Authorization = `Bearer ${auth}`; 
        }
        return e; 
    });  
    authCreated.interceptors.response.use(
        (response) => response, 
        (error)=>{
            console.error("error: ", error); 
            return Promise.reject(error);
    }); 
    return authCreated;  
}

export const fetchPosts = async () => {
    const axiosInstance = useAxios();
    const response = await axiosInstance.get('/posts');
    return response.data.posts;
};

export const fetchPostsbyId = async (id:number) => {
    const axiosInstance = useAxios();
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
};


*/
