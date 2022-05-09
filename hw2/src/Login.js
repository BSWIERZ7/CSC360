import React, { useState } from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser(username);
      }}
    >
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        value={username}
        onChange={handleUsername}
        id="login-username"
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
//disabled={username.length === 0} => this checks if a usename has been entered. If not it will come out as true and be GREYED out for the login button. If we did enter a username then it will NOT BE GREYED OUT
//If disabled is TRUE then grey out
//Else display
