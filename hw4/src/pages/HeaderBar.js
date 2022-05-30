import React, { useContext } from "react";
import Header from "../Header";
import UserBar from "../UserBar";
import CreatePost from "../CreatePost";

import { ThemeContext } from "../App";
import StateContext from "../Context";

import { Link } from "react-navi";

//DISPLAYS THE CREATEPOST COMPONENT
export default function HeaderBar() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      <ThemeContext.Provider value={{ primary: "red" }}>
        <Header text="My Blog" />
      </ThemeContext.Provider>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <Link href="/post/create">Create New Post</Link>}
      {/* {state.user && <Link href="/post/${id}"> Create New Post</Link> } */}
    </>
  );
}

//{state.user && <Link href="/post/create">Create New Post</Link> }  -this is the hyperlink we can click to open up create new post.
//need to do something similar with delete post

//Old version before modifying to add delete and get buttons
// return (
//     <>
//         <ThemeContext.Provider value={{primary:'red'}}>
//             <Header text="My Blog" />
//         </ThemeContext.Provider>
//         <UserBar user={state.user} dispatch={dispatch} />
//         {state.user && <Link href="/post/create">Create New Post</Link> }

//     </>
//     )
