import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Agents() {
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
