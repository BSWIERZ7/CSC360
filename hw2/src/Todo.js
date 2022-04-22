import React from "react";

export default function Todo({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </div>
  );
}

//OLD Post layout
// export default function Todo({ title, content, author }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <div>{content}</div>
//       <br />
//       <i>
//         Written by <b>{author}</b>
//       </i>
//     </div>
//   );
// }
