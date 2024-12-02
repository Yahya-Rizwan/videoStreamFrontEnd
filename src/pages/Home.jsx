import { useEffect, useState } from "react";
import { getAllVideos } from "../services/video";
import { Link } from "react-router-dom";
import VideoDetails from "../components/VideoDetails";
import axios from "axios";
import { Footer } from "../components/Footer";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   
    const fetchVideos = async () => {
      try {
       
        let response = await getAllVideos();
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
 
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-4 mt-10">
        {videos.map((video) => (
          <div key={video._id} className="w-fit h-fit">
            <Link
              to="/video"
              state={{ video }}
            >
            <VideoDetails video={video}/>
            </Link>
          </div>
        ))}
      </div>
      <div>
       <Footer/>
    </div>
    </div>
    
  );
}

export default Home;