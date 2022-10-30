import Image from "next/image";

import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Agents from "../components/Agents";

import Stats from "../components/Stats";

export default function Maingrid() {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.col + " border"}>
        <Stats />
      </div>
      <div className={styles.col + " border"}>
        <div className={styles.graphHeading}>Ticket Status</div>
        <div className={styles.sketchContainer} style={{ aspectRatio: "2/1" }}>
          <Image src="/images/graphs/dummy.png" layout="fill" alt="graph" />
        </div>
      </div>
      <div className={styles.col + " border"}>
        <div className={styles.graphHeading}>
          Top Agent&apos;s{" "}
          <span className="accent" style={{ fontWeight: "100" }}>
            by chats <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className={styles.sketchContainer}>
          <Agents />
        </div>
      </div>
      <div className={styles.col + " border"}>
        <div className={styles.graphHeading}>Total Messages</div>
        <div className={styles.sketchContainer} style={{ overflow: "hidden" }}>
          <iframe
            src="https://editor.p5js.org/lab071202/full/Tam5qhfDK"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
              top: "calc(-2.5rem - 2px)",
            }}
          ></iframe>
        </div>
      </div>
      <div className={styles.col + " border"}>
        <div className={styles.graphHeading}>Message Volume</div>
        <div className={styles.sketchContainer} style={{ overflow: "hidden" }}>
          <iframe
            src="https://editor.p5js.org/lab071202/full/brFRMbb--"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
              top: "calc(-2.5rem - 2px)",
            }}
          ></iframe>
        </div>
      </div>
      <div className={styles.col + " border"}>
        <div className={styles.graphHeading}>Rates</div>

        <div className={styles.sketchContainer} style={{ overflow: "hidden" }}>
          <iframe
            src="https://editor.p5js.org/lab071202/full/_SX1HOekJ"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
              top: "calc(-2.5rem - 2px)",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
