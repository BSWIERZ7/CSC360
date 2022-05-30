import React, { useContext } from "react";
import { ThemeContext } from "./App";

//consumes the theme context and applies its styling(in this case, adds red to h1 tag)
const Header = ({ text }) => {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.primary }}>{text}</h1>;
};

export default Header;

/* Previously, we used ThemeContext but changed it with useContext hook above PASSING in the CONTEXT
const Header = ({text}) => (
  <ThemeContext.Consumer>
     { theme => (
         <h1 style={ { color: theme.primaryColor} }>{text}</h1>
      )}
  <ThemeContext.Consumer>)
*/
