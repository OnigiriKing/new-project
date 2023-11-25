import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="fixed justify-center w-full top-0 bg-white opacity-95">
      <div class="flex justify-between p-8">
        <img src="" alt="logo" />
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
