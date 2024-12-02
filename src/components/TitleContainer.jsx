import{ useEffect, useState } from "react"
import { getUserById } from "../services/auth"
import { getVideoComments } from "../services/comment"
import Logo from "./Logo"


function TitleContainer({video , videoId = null}){
    const[user,setuser] = useState({})
    const[channelSubs,setChannelSubs] = useState(0)

    const findUser = async()=>{
      try {
          const response = await getUserById(video.owner)
          setuser(response)
      } catch (error) {
          console.log(error)
      }
    }
    const subs = async()=>{
        try {
            const response = await getVideoComments(videoId)
            setChannelSubs(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       findUser();
       subs();
    }, [video])
    
  return (
    <div className="-mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 text-white">
      <div className="min-w-10 h-full">
        <Logo image={user.avatar} className="w-10 h-fit rounded-full mr-1" />
      </div>
      <div className="flex flex-col items-start justify-start">
        {videoId ? (
          <h1 className="font-semibold">{user.username}</h1>
        ) : (
          <h1 className="font-semibold">{video.title}</h1>
        )}
        <div className="text-sm font-thin text-gray-400 flex flex-col">
          <div>
            {videoId ? (
              <h1 className="font-semibold">{`${subs} subscribers`}</h1>
            ) : (
              <h1 className="font-semibold">{user.username}</h1>
            )}
          </div>
          {videoId ? (
            ""
          ) : (
            <div className="flex flex-row items-center justify-center -mt-2">
              <p>{`${video.views} views`}</p>
              <LuDot className="text-3xl" />
              <p>
                {formatDistanceToNow(new Date(video.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TitleContainer