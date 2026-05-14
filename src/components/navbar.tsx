import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <li>
            projects
          </li>
          <li>
            resume
          </li>
          <li>
            links
          </li>
          <li>
            test
          </li>
        </ul>
      </nav>
    )
}

export default Navbar