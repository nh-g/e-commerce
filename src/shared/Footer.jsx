import LinkedIn from "../assets/images/icons/linkedin.png";
import GitHub from "../assets/images/icons/github.png";

export default function Footer() {
  return (
    <footer id="footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nh-g/"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nh-g"
          >
            <img src={GitHub} alt="" />
          </a>
        </li>
      </ul>
      <p>© 2021 • Giang N.H. All copyrights served</p>
    </footer>
  );
}
