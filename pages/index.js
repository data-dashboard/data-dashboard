import Head from "next/head";
import styles from "../styles/Home.module.css";

import React from "react";

import Intro from "../components/Intro";

import Nav from "../components/Nav";

import Maingrid from "../components/Maingrid";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Nav />
      <main className={styles.mainContent}>
        <div className={styles.mainContentContainer}>
          <Intro />
          <Maingrid />
        </div>
      </main>
    </div>
  );
}
