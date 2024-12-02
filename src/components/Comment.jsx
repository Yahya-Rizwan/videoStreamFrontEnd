import { useEffect, useState } from "react";
import { getVideoComments } from "../services/comment";
import { ApiError } from "../../../ChaiAurBackend/src/utils/ApiError";

function Comment({videoId}){
      const[comments,setcomments] = useState([])
      const[loading,setloading] = useState(true)
      const[visibleCount,setVisibleCount] = useState(1)
      const[error,setError] = useState(null)

      useEffect(()=>{
        const fetchComments = async()=>{
           try {
             const response = await getVideoComments(videoId)
             setcomments(response)
             setloading(false)
           } catch (error) {
            setloading(false)
             throw new ApiError(400,"comments not fetched")
           }

        }
        fetchComments();
      },[comments])

      const showMoreComments=()=>{
            setVisibleCount((prev)=>prev+7)
      }
      if (loading) {
        return <div>Loading comments...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }
    
      return (
        <div className="w-full h-full flex flex-col items-start justify-start p-2 pt-4  gap-2 mb-64 max-[1530px]:bg-neutral-800 rounded-2xl border-8 border-neutral-900">
          {comments.length === 0 ? (
            <div>No comments yet.</div>
          ) : (
            comments.slice(0, visibleCount).map((comment) => (
              <CommentContainer 
                key={comment._id} 
                comment={comment}
              />
            ))
          )}
          {visibleCount < comments.length && (
            <button 
              onClick={showMoreComments} 
              className="mt-2 text-blue-500 hover:underline"
            >
              Show more comments
            </button>
          )}
        </div>
      );
    }
    
    export default Comment;

