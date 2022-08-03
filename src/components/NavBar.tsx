import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <div className="navBar">
      <Link to='/'>HOME</Link>
      <Link to='about'> ABOUT</Link>
      <Link to='users'> USERS</Link>
    </div>
   );
}

export default NavBar;