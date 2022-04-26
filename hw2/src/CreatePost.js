import React, { useState } from "react";
import CheckBoxForm from "./CheckBoxForm";

export default function CreatePost({ user, setPosts, posts }) {
  const [title, setTitle] = useState(""); //holds title variable
  const [content, setContent] = useState(""); //holds content variable

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleContent(evt) {
    setContent(evt.target.value);
  }
  function handleCreate(evt) {
    const newPost = { title, content, author: user };
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
    setPosts([newPost, ...posts]);
  }

  // handleCheckBoxForm(evt) {
  //     const complete = false;
  // }

  return (
    <>
      <h2>Add a new Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(e);
        }}
      >
        <div>
          Author: <b>{user}</b>
        </div>
        <div>
          <label htmlFor="create-title">Title: </label>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            name="create-title"
            id="create-title"
          />
        </div>
        <label>Description: </label>
        <textarea value={content} onChange={handleContent} />
        <input type="submit" value="Create" disabled={title.length === 0} />

        <CheckBoxForm />
        <h3>Posted Date:</h3>
        <p id="date"></p>
        <script>
          {/* document.getElementById("date").innerHTML = date_current.getDate(); */}
          document.getElementById("date").innerHTML = Date();
        </script>
      </form>
    </>
  );
}

{
  /* <input
        type="submit"
        value="Register"
        disabled={
          formData.username.length === 0 ||
          formData.password.length === 0 ||
          formData.password !== formData.passwordRepeat
        }
      /> */
}
