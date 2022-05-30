import React, { useEffect, useContext } from "react";
import StateContext from "../Context";
import { useResource } from "react-request-hook";
import PostList from "../PostList";

//DISPLAYS LIST OF ALL POSTS
//this may be the show all posts section THEN choose to delete
//postlist related logic is inside this section
export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data });
    }
  }, [posts]);

  return (
    <>
      <PostList posts={state.posts} />
      {/* {state.posts && <link href="/posts">Retrieve Posts</link>}  */}
    </> //our code
  );
  // return <PostList posts={state.posts} />; //original code
  //this displays all our posts
}
