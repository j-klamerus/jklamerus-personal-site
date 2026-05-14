import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/projects"><li>projects</li></Link>
          <Link to="/resume"><li>resume</li></Link>
          <Link to="/links"><li>Links</li></Link>
          <li>
            test
          </li>
        </ul>
      </nav>
    )
}

export default Navbar