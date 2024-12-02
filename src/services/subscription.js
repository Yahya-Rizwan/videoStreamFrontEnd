import axios from "axios";

export const subscribe = async(channelId)=>{
   try {
     const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/subscription/toggleSubscription/${channelId}`,{},{withCredentials:true})
      return response.data
   } catch (error) {
      throw new Error(error?.message)
   }
}

export const allSubscribers = async(channelId)=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/subscription/allSubscribers/${channelId}`)
       return response.data.data[0].subscribers || 0;
    } catch (error) {
       throw new Error(error?.message)
    }
 }

 export const isSubscribed = async(channelId)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/subscription/isSubscribed/${channelId}`,{},{withCredentials:true})
         return response.data.data
      } catch (error) {
         throw new Error(error?.message)
      }
 }