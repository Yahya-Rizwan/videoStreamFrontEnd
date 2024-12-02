import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addComment } from "../services/comment";
import { currentUser } from "../services/auth";
import Logo from "./Logo";


function AddComment({videoId,userId}){
     const [user,setuser] = useState({})
     const {register,handleSubmit} = useForm();


     const postcomment = async(data)=>{
       try {
         await addComment(videoId,data)
       } catch (error) {
         console.log(error)
       }
     }

     useEffect(()=>{
        const getUser = async()=>{
           try {
             const response = currentUser();
             setuser(response)
         }
           catch (error) {
            console.log(error)
           }
        };
        getUser();
     },[userId])
     return(
        <div>
            <div>
                <Logo image={user.avatar}  className="w-10 rounded-full mr-2"/>
            </div>
            <div>
            <div className="flex flex-col items-start justify-start">
        <h1 className="font-semibold text-white">{user.username}</h1>
        <form onSubmit={handleSubmit(postcomment)}>
          <div className="w-fit h-full flex  items-start justify-start ">
            <textarea name="postContent" placeholder="Add a comment ..." rows={2} cols={100} {...register("content", { required: true })} className=" overflow-auto w-full p-1 rounded-lg bg-neutral-900 text-white"/>
            <Button
              type="Submit" buttonText="Comment"
              className="2xl:-ml-64 w-24 text-center border-2 text-white shadow-lg font-semibold p-1 border-neutral-700 bg-neutral-700 hover:bg-neutral-800 rounded-lg"
            />
          </div>
        </form>
      </div>
            </div>
        </div>
     )
}
export default AddComment