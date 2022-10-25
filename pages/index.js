import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import introStyles from '../styles/Intro.module.css'

function Intro() {
  return (
    <div className={introStyles.container}>
      <div className={introStyles.left}>
        <div className={introStyles.heading + ' bold'}>Hi Octavia!</div>
        <div>Take a look at <span className='accent'>weekly</span> customer engagement overview</div>
      </div>
      <div className={introStyles.right + " border"}>
        <div className={introStyles.rightTextContainer}>
          <div>
            You have 2 new tickets
          </div>
          <div className='accent'>
            View inbox
          </div>
        </div>
        <div className={introStyles.rightImageContainer}>
          <Image src={"/notifs.jpg"} layout="fill" alt="notifs"/>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  let arr = []
  for (let index = 0; index < 10; index++) {
    arr.push(index*100);
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
                <Image src={"/logo.jpg"} layout="fill" alt="brand" />
              </div>
              <div>whatcs</div>
            </div>
          </div>

          <ul className={styles.navList}>
            <li active="true">Dashboard</li>
            <li>Inbox</li>
            <li>Broadcast</li>
            <li>Contacts</li>
            <li>Automation</li>
          </ul>
        </div>

        <div className={styles.sideNavBottom}>
          <div>Connected Number</div>
          <div className='accent'>+1234 5678 1234</div>

          <div>
            <h3>Octavia Sherly</h3>
            <div>octavia@gmail.com</div>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.mainContentContainer}>
          <Intro />
          <div className={styles.mainGrid}>
            <div className={styles.col + " border"}>
              <Image src="/1.jpg" alt="Data Graph" layout='fill'/>
            </div>
            <div className={styles.col + " border"}>
              <Image src="/2.jpg" alt="Data Graph" layout='fill'/>
            </div>
            <div className={styles.col + " border"}>
              <Image src="/3.jpg" alt="Data Graph" layout='fill'/>
            </div>
            <div className={styles.col + " border"}>
              <Image src="/4.jpg" alt="Data Graph" layout='fill'/>
            </div>
            <div className={styles.col + " border"}>
              <Image src="/5.jpg" alt="Data Graph" layout='fill'/>
            </div>
            <div className={styles.col + " border"}>
              <Image src="/6.jpg" alt="Data Graph" layout='fill'/>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}
