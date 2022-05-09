import React, { useState, useReducer } from "react";
import UserBar from "./UserBar";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

import appReducer from "./reducers";

function App() {
  // function userReducer(state, action) {
  //   switch (action.type) {
  //     case "LOGIN":
  //     case "REGISTER":
  //       return action.username;
  //     case "LOGOUT":
  //       return "";
  //     default:
  //       return state;
  //   }
  // }

  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]

  // const [user, dispatchUser] = useReducer(userReducer, "");
  // const [posts, dispatchPosts] = useReducer(postReducer, []);

  // const [state, dispatch] = useReducer(appReducer, { user: "", posts: [] });

  //default starter layout, now we ADD CASE ACTION TYPES TO DO
  // function postReducer(state, action) {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  //}

  // function postReducer(state, action) {
  //   switch (action.type) {
  //     case "CREATE_POST":
  //       const newPost = {
  //         title: action.title,
  //         content: action.content,
  //         author: action.author,
  //       };
  //       return [newPost, ...state];
  //     //Now we just have to wire a button to make this call for "DELETE_POST"
  //     // case "DELETE_POST":
  //     //   //implement logic for deleting post
  //     //   return state.filter((post) => post.id != action.id);
  //     default:
  //       return state;
  //   }
  // }

  // const [posts, dispatchPosts] = useReducer(postReducer, []);

  const [state, dispatch] = useReducer(appReducer, { user: "", posts: [] });

  //const [posts, setPosts] = useState([])

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && (
        <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
      <PostList posts={state.posts} />
    </div>
  );
}
export default App;
