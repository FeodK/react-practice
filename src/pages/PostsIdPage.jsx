import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";

const PostsIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchPostCom, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComment(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchPostCom(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Коментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comment.map((com) => (
            <div style={{ marginTop: 15 }}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsIdPage;
