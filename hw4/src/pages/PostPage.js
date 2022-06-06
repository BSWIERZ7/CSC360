import React, { useEffect } from "react";
import { useResource } from "react-request-hook";
import { Link } from "react-navi";

import Post from "../Post";
//DISPLAYS A SINGLE POST - THIS MAY BE FOR THE TOGGLE SECTION
//passing the id in the request
export default function PostPage({ id }) {
  // const {state, dispatch} = useContext(StateContext)

  //grabs a specific post we want to see
  const [post, getPost] = useResource(() => ({
    url: `/posts/${id}`,
    method: "get",
  }));
  useEffect(getPost, [id]);

  return (
    <div>{post && post.data ? <Post {...post.data} /> : "Loading..."}</div>
  );
}
