import React, { useEffect, useContext } from "react";
import StateContext from "../Context";
import { useResource } from "react-request-hook";
import PostList from "../PostList";

//DISPLAYS LIST OF ALL POSTS
//this may be the show all posts section THEN choose to delete
//postlist related logic is inside this section
export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);

  //5. Use the useResource hook in order to issue a POST request to the mock API in order to persist your Todo to db.json.
  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  //ADDED CAN REMOVE AFTER
  // const [post, getPost] = useResource(() => ({
  //   url: `/posts/${id}`,
  //   method: "Delete",
  // }));
  // useEffect(getPost, []);
  //ADDED CAN REMOVE AFTER

  useEffect(getPosts, []);

  useEffect(() => {
    console.log("Homepage useEffect FIRED");
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
