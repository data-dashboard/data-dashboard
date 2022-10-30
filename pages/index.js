/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import introStyles from "../styles/Intro.module.css";

import React, { useEffect, useRef, useState } from "react";
// import dynamic from "next/dynamic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faEnvelopeOpen,
  faLayerGroup,
  faCircleCheck,
  faTriangleExclamation,
  faClock,
  faCaretDown,
  faComment,
  faBullhorn,
  faUserGroup,
  faCirclePlay,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function Stats() {
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

// function P5Sketch4({ ref1 }) {
//   let space,
//     initial,
//     wid,
//     n = 3,
//     mx = 150,
//     padding;

//   let data = [
//     [125, "#74e0b0"],
//     [105, "#60a498"],
//     [30, "#ffc301"],
//   ];
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     ).parent(canvasParentRef);
//     initial = p5.width * 0.2;
//     space = (p5.width - initial) / n;
//     wid = space * 0.6;

//     padding = p5.width * 0.05;
//     p5.noLoop();
//   };

//   function windowResized(p5, event) {
//     // console.log(ref1.current)
//     initial = p5.width * 0.2;
//     space = (p5.width - initial) / n;
//     wid = space * 0.6;

//     padding = p5.width * 0.05;
//     p5.resizeCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     );

//     // draw(p5)
//   }

//   const draw = (p5) => {
//     p5.background(255);
//     let hei = (p5.height - 2 * padding) / n;
//     p5.strokeWeight(3);
//     p5.stroke("#eee");
//     for (let i = 150; i >= 0; i -= 50) {
//       let y = padding + hei * (3 - i / 50);
//       p5.line(0, y, p5.width, y);
//     }

//     for (let i = 0; i < n; i++) {
//       p5.fill(data[i][1]);
//       p5.noStroke();
//       let x, y, x1, y1;

//       x = initial + i * space;
//       x1 = wid;
//       y = p5.height - padding;
//       y1 = -1 * (y - padding) * (data[i][0] / 150);

//       p5.rect(x, y, x1, y1, wid * 0.2);

//       y1 = -1 * (y - padding) * ((data[i][0] - 10) / 150);
//       p5.fill(data[i][1] + "55");
//       p5.rect(x, y, x1 * 1.25, y1, wid * 0.3);
//     }
//   };

//   if (typeof window !== "undefined") {
//     const Sketch = dynamic(
//       () => import("react-p5").then((mod) => mod.default),
//       {
//         ssr: false,
//       }
//     );
//     return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
//   } else {
//     return null;
//   }
// }

// function P5Sketch5({ ref1 }) {
//   let wid;
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     ).parent(canvasParentRef);
//     wid = p5.width * 0.5;
//     p5.noLoop();
//   };

//   function windowResized(p5, event) {
//     // console.log(ref1.current)
//     wid = p5.width * 0.5;
//     p5.resizeCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     );

//     // draw(p5)
//   }

//   const draw = (p5) => {
//     p5.background(255);
//     p5.translate(p5.width / 2, p5.height / 2);
//     p5.noStroke();
//     p5.fill("#74e0b0");
//     p5.circle(0, 0, wid);

//     p5.fill("#60a398");
//     p5.arc(0, 0, wid, wid, -1.2 * p5.HALF_PI, 0.2 * p5.HALF_PI);

//     p5.fill(255);
//     p5.circle(0, 0, wid * 0.66);
//   };

//   if (typeof window !== "undefined") {
//     const Sketch = dynamic(
//       () => import("react-p5").then((mod) => mod.default),
//       {
//         ssr: false,
//       }
//     );
//     return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
//   } else {
//     return null;
//   }
// }

// function P5Sketch6({ ref1 }) {
//   let n = 3;
//   let wid;
//   let data;
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     ).parent(canvasParentRef);
//     wid = (p5.width / (n * 2)) * 0.5;
//     data = [
//       [-p5.HALF_PI, -0.5 * p5.HALF_PI, "#fdc300"],
//       [-p5.HALF_PI, 1.5 * p5.HALF_PI, "#60a498"],
//       [-p5.HALF_PI, 2 * p5.HALF_PI, "#74e0b0"],
//     ];
//     p5.noLoop();
//   };

//   function windowResized(p5, event) {
//     // console.log(ref1.current)
//     wid = (p5.width / (n * 2)) * 0.5;
//     p5.resizeCanvas(
//       ref1.current.clientWidth * 1.083334,
//       ref1.current.clientHeight
//     );

//     // draw(p5);
//   }

//   const draw = (p5) => {
//     p5.background(255);
//     p5.noStroke();
//     p5.translate(p5.width / 2, p5.height / 2);
//     for (let i = n; i > 0; i--) {
//       p5.fill("#eeeeee");
//       p5.circle(0, 0, 2 * i * wid);

//       p5.fill(data[i - 1][2]);
//       p5.arc(0, 0, 2 * i * wid, 2 * i * wid, data[i - 1][0], data[i - 1][1]);

//       //balls

//       let x = (i * wid - wid / 4) * p5.cos(data[i - 1][1]);
//       let y = (i * wid - wid / 4) * p5.sin(data[i - 1][1]);

//       p5.circle(x, y, wid / 2);

//       x = (i * wid - wid / 4) * p5.cos(data[i - 1][0]);
//       y = (i * wid - wid / 4) * p5.sin(data[i - 1][0]);

//       p5.circle(x, y, wid / 2);

//       p5.fill(255);
//       p5.circle(0, 0, (2 * i - 1) * wid);
//     }
//   };

//   if (typeof window !== "undefined") {
//     const Sketch = dynamic(
//       () => import("react-p5").then((mod) => mod.default),
//       {
//         ssr: false,
//       }
//     );
//     return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
//   } else {
//     return null;
//   }
// }

function Intro() {
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

function Agents() {
  const dataArr = [
    { name: "Mansur Gerrard", chatNum: 10, email: "MansurGerrard@email.com" },
    { name: "Ovtavia Sherly", chatNum: 8, email: "OvtaviaSherly@email.com" },
    {
      name: "Honathan Kerpiwe",
      chatNum: 9,
      email: "HonathanKerpiwe@email.com",
    },
    { name: "Elvina Seagull", chatNum: 7, email: "ElvinaSeagull@email.com" },
    {
      name: "Marni Mawar Indah",
      chatNum: 4,
      email: "MarniMawarIndah@email.com",
    },
    {
      name: "Irvina Louissiana",
      chatNum: 3,
      email: "IrvinaLouissiana@email.com",
    },
    { name: "Jaydeep Patel", chatNum: 6, email: "macpe071202@gmail.com" },
    { name: "Github Jaydeep-p", chatNum: 9, email: "github@email.com" },
  ];
  return (
    <div className={styles.agentContainer}>
      <div className={styles.agentList}>
        {dataArr.map((data, idx) => {
          return (
            <div className={styles.agentInfo} key={idx}>
              <div
                id="profilePicture"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div className={styles.agentImage}>
                  <Image
                    src={`/images/people/${idx + 1}.jpeg`}
                    layout="fill"
                    style={{ "object-fit": "cover" }}
                    alt="agent Image"
                  />
                </div>
              </div>
              <div className={styles.agentName}>
                <div className={styles.agentNameMain + " bold"}>
                  {data.name}
                </div>
                <div className={styles.agentNameSub}>{data.email}</div>
              </div>
              <div className={styles.agentChats + " bold"}>
                {data.chatNum} Chats
              </div>
              <div className={styles.menuDots}>•••</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  let arr = [];
  for (let index = 0; index < 10; index++) {
    arr.push(index * 100);
  }

  let refArr = [];

  for (let index = 0; index < 6; index++) {
    const r1 = useRef(index);
    refArr.push(r1);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
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
              <div style={{ color: "rgb(100, 100, 100)" }}>
                octavia@gmail.com
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.mainContentContainer}>
          <Intro />
          <div className={styles.mainGrid}>
            <div className={styles.col + " border"} ref={refArr[0]}>
              <Stats />
            </div>
            <div className={styles.col + " border"}>
              <div className={styles.graphHeading}>Ticket Status</div>
              <div
                className={styles.sketchContainer}
                ref={refArr[1]}
                style={{ aspectRatio: "2/1" }}
              >
                <Image
                  src="/images/graphs/dummy.png"
                  layout="fill"
                  alt="graph"
                />
              </div>
            </div>
            <div className={styles.col + " border"} ref={refArr[2]}>
              <div className={styles.graphHeading}>
                Top Agent&apos;s{" "}
                <span className="accent" style={{ fontWeight: "100" }}>
                  by chats <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </div>
              <div className={styles.sketchContainer} ref={refArr[3]}>
                <Agents />
              </div>
            </div>
            <div className={styles.col + " border"}>
              <div className={styles.graphHeading}>Total Messages</div>
              <div
                className={styles.sketchContainer}
                ref={refArr[3]}
                style={{ overflow: "hidden" }}
              >
                {/* <P5Sketch4 ref1={refArr[3]} /> */}
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
              <div
                className={styles.sketchContainer}
                ref={refArr[4]}
                style={{ overflow: "hidden" }}
              >
                {/* <P5Sketch5 ref1={refArr[4]} /> */}
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

              <div
                className={styles.sketchContainer}
                ref={refArr[5]}
                style={{ overflow: "hidden" }}
              >
                {/* <P5Sketch6 ref1={refArr[5]} /> */}
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
        </div>
      </main>
    </div>
  );
}
