import { useDeferredValue, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getChannelVideos } from "../services/video";
import VideoDetails from "../components/VideoDetails";
import { UserContainer } from "../components/UserContainer";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";


function User(){
    const[channelVideos,setChannelVideos] = useState([])
    const userData = useSelector((state)=>state.auth.userData)
    console.log(userData)
     useEffect(()=>{
        const videos = async()=>{
            const response = await getChannelVideos(userData._id)
            setChannelVideos(response)
        }
        videos();
     },[userData])
     return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 gap-8">
          <div className="w-full flex items-center justify-center rounded-3xl">
            <Logo image={userData.coverImage} className="w-full rounded-3xl" />
          </div>
          <div className="flex w-full items-start justify-start">
            <UserContainer userData={userData} noOfVideos={channelVideos.length} />
          </div>
          <div className="flex flex-wrap w-full items-start justify-start gap-2">
            {channelVideos.map((video) => (
              <div key={video._id} className="w-fit h-fit">
                <Link to="/video" state={{ video }}>
                  <VideoDetails video={video} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    export default User;