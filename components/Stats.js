import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faEnvelopeOpen,
  faLayerGroup,
  faCircleCheck,
  faTriangleExclamation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>34</div>
          <div className={styles.statSubtext}>New Ticket</div>
        </div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>30</div>
          <div className={styles.statSubtext}>Open Ticket</div>
        </div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>10</div>
          <div className={styles.statSubtext}>Pending</div>
        </div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>28</div>
          <div className={styles.statSubtext}>Total Resolved</div>
        </div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>8</div>
          <div className={styles.statSubtext}>Ticket Expired</div>
        </div>
      </div>
      <div className={styles.statItem}>
        <div className={styles.statLogoContainer}>
          <div className={styles.statLogo}>
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
        <div className={styles.statText}>
          <div className={styles.statHeading}>
            1,2{" "}
            <span style={{ fontSize: "0.4em", display: "inline" }}>min</span>
          </div>
          <div className={styles.statSubtext}>Avg Response Time</div>
        </div>
      </div>
    </div>
  );
}
