import { useEffect, useState } from "react";
import { getVideoComments } from "../services/comment";
import { ApiError } from "../../../ChaiAurBackend/src/utils/ApiError";
import CommentContainer from "./CommentContainer"; // Assuming you have a CommentContainer component

function Comment({ videoId }) {
  const [comments, setComments] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getVideoComments(videoId);
        console.log(response)
        if (Array.isArray(response.data)) {
          setComments(response.data); // Set fetched comments
        } else {
          throw new ApiError(400, "Invalid comments format");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message || "Failed to fetch comments");
      }
    };
    fetchComments();
  }, [videoId]); // Use videoId as dependency instead of comments

  const showMoreComments = () => {
    setVisibleCount((prev) => prev + 7); // Show 7 more comments
  };

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-2 pt-4 gap-2 mb-64 max-[1530px]:bg-neutral-800 rounded-2xl border-8 border-neutral-900">
      {comments.length === 0 ? (
        <div>No comments yet.</div> // Display message if no comments
      ) : (
        comments.slice(0, visibleCount).map((comment) => (
          <CommentContainer key={comment._id} comment={comment} />
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
