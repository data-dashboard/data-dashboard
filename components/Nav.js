import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faComment,
  faBullhorn,
  faUserGroup,
  faCirclePlay,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className={styles.sideNav}>
      <div className={styles.sideNavTop}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <div className={styles.brandLogoContainer}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>whatcs</div>
          </div>
        </div>

        <ul className={styles.navList}>
          <li active="true">
            <div className={styles.navIcon}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="grid-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-grid-2 fa-lg"
              >
                <path
                  fill="currentColor"
                  d="M192 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM256 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48zM448 336c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z"
                  class=""
                ></path>
              </svg>
            </div>
            Dashboard
          </li>
          <li>
            <div className={styles.navIcon}>
              <FontAwesomeIcon icon={faComment} />
            </div>
            Inbox
          </li>
          <li>
            <div className={styles.navIcon}>
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
            Broadcast
          </li>
          <li>
            <div className={styles.navIcon}>
              <FontAwesomeIcon icon={faUserGroup} />
            </div>
            Contacts
          </li>
          <li>
            <div className={styles.navIcon}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </div>
            Automation
          </li>
        </ul>
      </div>

      <div className={styles.sideNavBottom}>
        <div>Connected Number</div>
        <div
          className="accent"
          style={{ display: "flex", alignItems: "center" }}
        >
          +1234 5678 1234&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: "0.5em" }} />
        </div>
        <div className={styles.navBottomhr}> </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <div
            style={{
              position: "relative",
              height: "2rem",
              aspectRatio: "1/1",
              borderRadius: "100vh",
              overflow: "hidden",
              margin: "auto 0",
            }}
          >
            <Image
              src={"/images/people/7.jpeg"}
              layout="fill"
              alt="image"
              style={{ "object-fit": "cover" }}
            />
          </div>
          <div style={{ marginLeft: "0.3rem" }}>
            <div className="bold" style={{ fontSize: "1.1rem" }}>
              Octavia Sherly
            </div>
            <div style={{ color: "rgb(100, 100, 100)" }}>octavia@gmail.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
