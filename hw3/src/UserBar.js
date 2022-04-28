import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar({ user, setUser }) {
  if (user) {
    return <Logout user={user} setUser={setUser} />;
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </>
    );
  }
}

//will be using UserBar for all of our set/unset function with login/register/logout components

// Alternate Route #2
/*
export default function UserBar() {
  const [user, setUser] = useState(""); //Alternative
  if (user) {
    return <Logout user={user} />;
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </>
    );
  }
}
*/
