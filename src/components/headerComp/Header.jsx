import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div class="flex center w-full">
      <div class="flex center">
        <img>Logo</img>
        <div>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Gallary</a>
          <a href="">Schedule</a>
          <a href="">Blog</a>
          <a href="">Pricing</a>
          <a href="">Classes</a>
          <a href="">Contact</a>
        </div>
        <div>
          <Link></Link>
          <div></div>
          <Link>
            <div></div>
            <h3>JOIN CLASS NOW</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}