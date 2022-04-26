import React from "react";
import Todo from "./Todo";
import CheckBoxForm from "./CheckBoxForm";

export default function TodoList({ posts = [] }) {
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        //key={} should have a UNIQUE key value to each post
        //{...p} Is equal to this section: title={p.title} content={p.content} author={p.author}
        <Todo {...p} key={"post-" + i} /> //alternative syntax to the above <post/> format
        // <CheckBoxForm/>
      ))}
      <CheckBoxForm />
    </div>
  );
}

//Previous
// export default function TodoList({ posts = [] }) {
//   return (
//     <div>
//       {posts.map((p, i) => (
//         // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
//         //key={} should have a UNIQUE key value to each post
//         //{...p} Is equal to this section: title={p.title} content={p.content} author={p.author}
//         <Todo {...p} key={"post-" + i} /> //alternative syntax to the above <post/> format
//       ))}
//     </div>
//   );
// }
