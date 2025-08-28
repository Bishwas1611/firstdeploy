import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  // Method2

  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/user", title: "User" },
  ];
  const ActiveStyle = { textDecoration: "none", color: "red" };
  const inActiveStyle = { textDecoration: "none", color: "blue" };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* {Method 1} */}

      {/* <Link to={"/"} >Home</Link>
             <Link to={"/about"} >About</Link>
             <Link to={"/contact"}>Contact</Link>
              <Link to={"/login"} >Login</Link>
               <Link to={"/user"} >User</Link> */}

      {Links.map(({ path, title }) => (
        <NavLink key={path}
          style={({isActive}) => {
            return isActive?ActiveStyle : inActiveStyle
          }}
          to={path}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}
