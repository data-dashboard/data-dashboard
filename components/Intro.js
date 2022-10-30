import Image from "next/image";

import styles from "../styles/Home.module.css";
import introStyles from "../styles/Intro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  return (
    <div className={introStyles.container}>
      <div className={introStyles.left}>
        <div className={introStyles.heading + " bold"}>Hi Octavia!</div>
        <div>
          Take a look at{" "}
          <span className="accent">
            weekly <FontAwesomeIcon icon={faCaretDown} />
          </span>{" "}
          customer engagement overview
        </div>
      </div>
      <div className={introStyles.right + " border"}>
        <div className={introStyles.rightTextContainer}>
          <div>You have 2 new tickets</div>
          <div className="accent">View inbox</div>
        </div>
        <div className={introStyles.rightImageContainer}>
          {/* <FontAwesomeIcon icon={faBell} style={{ fontSize: "100%" }} /> */}
          <Image src={"/images/misc/notifs.jpg"} layout="fill" alt="notifs" />
        </div>
      </div>
    </div>
  );
}
