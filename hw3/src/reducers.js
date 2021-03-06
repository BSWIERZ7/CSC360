function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      console.log("in userReducer: Logging Out");
      return ""; // "" imitates a logout action
    default:
      return state; //always include default case in reducer. Someone passed us a action that --
    //we DO NOT HAVE LOGIC FOR so we RETURN THE ORIGINAL STATE
  }
}

function postReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      console.log("in postReducer: Creating Post");
      //newPost is taking in THREE PIECES OF DATA
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        completed: action.completed,
        id: action.id,
      };
      //UPDATES our state
      return [newPost, ...state];

    case "TOGGLE_POST":
      console.log("PostReducer: in toggle reducer");
      return action.updatedPosts;
    //Its going to take a previous 'state' from the passed in
    //parameter, will copy it into a new array and, prepend
    //the new post object in a newly created Array that is RETURNED

    case "DELETE_POST":
      //   //   //   // implement logic for deleting post
      console.log("PostReducer: DELETE_POST has been dispatched");

      return action.updatedPosts;

    //we return ALL posts with IDs that are NOT this particular post.id that is to be deleted/avoided
    // return state.filter((posts) => posts.id !== action.id);
    // return state.filter((posts) => posts.key !== action.key);
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    posts: postReducer(state.posts, action),
  };
}
