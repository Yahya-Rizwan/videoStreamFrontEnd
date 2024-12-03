import axios from "axios";

export const toggleLike = async(videoId)=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/like/likeVideo/${videoId}`,{},
         {withCredentials:true}

        )
        console.log(response)
        if(response.data.statusCode === 200){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        throw new Error(error?.message)
    }
}

export const totalLikes = async(videoId)=>{
   try {
     const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/like/totalLikes/${videoId}`)
     return response.data.data[0]
   } catch (error) {
      throw new Error(error?.message)
   }
}

export const likeStatus = async(videoId)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/like/likeStatus/${videoId}`,{},{withCredentials:true})
        return response.data.data
      } catch (error) {
         throw new Error(error?.message)
      }
}

