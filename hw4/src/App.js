/* eslint-disable no-debugger, no-console */
console.log("test");

import React, { useState, useReducer, useEffect, createContext } from "react";
import { useResource } from "react-request-hook";

import UserBar from "./UserBar";
import Header from "./Header";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

import StateContext from "./Context";

import appReducer from "./reducers";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

import { Router, View } from "react-navi";
import { mount, route } from "navi";
import PostPage from "./pages/PostPage";

function App() {
  //view: tells navi which component to display
  //these provide the path and path parameters route({ view: <componentName/>})
  //we declare ALL THESE ROUTES by using the MOUNT method
  // const routes = mount({
  //   "/": route({ view: <HomePage /> }),
  //   "/post/create": route({ view: <CreatePost /> }),
  //   "/post/:id": route((req) => {
  //     return { view: <PostPage id={req.params.id} /> };
  //   }),
  // });

  const routes = mount({
    "/": route({ view: <HomePage /> }),
    "/post/create": route({ view: <CreatePost /> }),
    "/post/:id": route((req) => {
      return { view: <PostPage id={req.params.id} /> };
    }),
  });

  //see slide 113 in Week 5 lecture slides
  //TO USE 'GET' to RETRIEVE ALL POSTS ITS: http://localhost:4000/posts
  //POST has same URL as GET http://localhost:4000/posts

  //TO USE 'DELETE' to DELETE a specific post ITS: http://localhost:4000/posts/X46dFj3 => Add /ID# to end of url
  //PUT has same url as DELETEhttp://localhost:4000/posts/X46dFj3

  //"/post/delete": route({ view: <PostList /> }),
  //"/post/delete": route({ view: <PostPage /> }),

  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]

  // const [user, dispatchUser] = useReducer(userReducer, "")
  // const [posts, dispatchPosts] = useReducer(postReducer, [])

  const [state, dispatch] = useReducer(appReducer, { user: "", posts: [] });

  //will RUN useEffect call whenever state.user CHANGES and any other ones that are in the 2nd parameter(i.e. [state.user, state.posts]). ALWAYS have a 2nd parameter otherwise useEffect will trigger for EVERY change can give unwanted results
  useEffect(() => {
    console.log("user effect hook firing");
    if (state.user) {
      document.title = `${state.user}’s Blog`; //takes login name as the state.user => bart's blog in webpage tab section
    } else {
      document.title = "My Blog";
    }
  }, [state.user]);

  //will RUN useEffect call whenever state.posts CHANGES
  useEffect(() => {
    console.log("post effect hook firing");
  }, [state.posts]);
  //const [posts, setPosts] = useState([])

  //passing a navi Router and tells it which routes to pass to it, we pass it the routes={routes} prop
  return (
    <Router routes={routes}>
      <StateContext.Provider value={{ state, dispatch }}>
        <HeaderBar />
        <HomePage />
        {/* we are passing this id to test it in blog(when we run it with npm start) */}
        <PostPage id="37ARwUf" />
        <View />
      </StateContext.Provider>
    </Router>
  );
}

//using createContext from Context.js
export const ThemeContext = createContext({ primary: "red" });

export default App;
