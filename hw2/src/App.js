import React, { useState } from "react";
import UserBar from "./UserBar";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

function App() {
  const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  const [checked, setChecked] = useState(false);
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
//{user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
// Create post goes away BECAUSE we are applying CONDITIONAL LOGIC that is controlling IF that create post component gets RENDERED. it says:
//IF USER IS TRUE, THEN display create post. ELSE DO NOT DISPLAY. we can see this display/removal when we login, we can see create post option, when we logout, user is now FALSE so we do NOT get option to create a post.
