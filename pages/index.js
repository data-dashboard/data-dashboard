/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import introStyles from '../styles/Intro.module.css'

import React, { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic'


function Stats() {
  
  return (
    <div className={styles.stats}>
      <div className={styles.statItem + " border"}>WIP</div>
      <div className={styles.statItem + " border"}>WIP</div>
      <div className={styles.statItem + " border"}>WIP</div>
      <div className={styles.statItem + " border"}>WIP</div>
      <div className={styles.statItem + " border"}>WIP</div>
      <div className={styles.statItem + " border"}>WIP</div>
    </div>
  )
}

// function P5Sketch({ ref1 }) {
  
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(ref1.current.clientWidth*1.083334, ref1.current.clientHeight).parent(canvasParentRef);
//     p5.noLoop();
// 	};

// 	const draw = (p5) => {
//     p5.background(255)
//     p5.fill(0);
//     p5.noStroke();
//     p5.circle(p5.width / 2, p5.height / 2, p5.min(p5.width / 2, p5.height / 2));
// 	};

//   if (typeof window !== 'undefined') {
//     const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//       ssr: false,
//     })
//     return <Sketch setup={setup} draw={draw} />;
//   }
//   else {
//     return null;
//   }
// };

function P5Sketch4({ ref1 }) {
  let space,initial,wid,n=3,mx=150,padding;

  let data = [[125,"#74e0b0"],[105,"#60a498"],[30,"#ffc301"]];
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(ref1.current.clientWidth*1.083334, ref1.current.clientHeight).parent(canvasParentRef);
    initial = p5.width*0.2
    space = (p5.width-initial)/(n);
    wid = space*0.6
    
    padding = p5.width*0.05
    p5.noLoop();
  };
  
  function windowResized(p5, event) {
    // console.log(ref1.current)
    initial = p5.width*0.2
    space = (p5.width-initial)/(n);
    wid = space*0.6
    
    padding = p5.width * 0.05
    p5.resizeCanvas(ref1.current.clientWidth * 1.083334, ref1.current.clientHeight);

    // draw(p5)
  }

	const draw = (p5) => {
    p5.background(255)
    let hei = (p5.height-2*padding)/n;
    p5.strokeWeight(3)
    p5.stroke("#eee")
    for(let i=150;i>=0;i-=50){
      let y = padding + hei*(3 - i/50);
      p5.line(0,y,p5.width,y)
    }
    
    for(let i=0;i<n;i++){
      
      p5.fill(data[i][1])
      p5.noStroke()
      let x,y,x1,y1;
      
      x = initial+ i*space
      x1 = wid
      y = p5.height - padding
      y1 =  -1*(y-padding)*(data[i][0]/150)
      
      p5.rect(x,y,x1,y1,wid*0.2)  
      
      
      y1 = -1*(y-padding)*((data[i][0]-10)/150)
      p5.fill(data[i][1]+"55")
      p5.rect(x,y,x1*1.25,y1,wid*0.3)  
    }
	};

  if (typeof window !== 'undefined') {
    const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
      ssr: false,
    })
    return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
  }
  else {
    return null;
  }
};

function P5Sketch5({ ref1 }) {
  let wid;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(ref1.current.clientWidth*1.083334, ref1.current.clientHeight).parent(canvasParentRef);
    wid = p5.width*0.5;
    p5.noLoop();
  };
  
  function windowResized(p5, event) {
    // console.log(ref1.current)
    wid = p5.width * 0.5;
    p5.resizeCanvas(ref1.current.clientWidth * 1.083334, ref1.current.clientHeight);
    
    // draw(p5)
  }

	const draw = (p5) => {
    p5.background(255);
    p5.translate(p5.width/2,p5.height/2);
    p5.noStroke()
    p5.fill("#74e0b0");
    p5.circle(0,0,wid)
    
    p5.fill("#60a398");
    p5.arc(0,0,wid,wid,-1.2*p5.HALF_PI,0.2*p5.HALF_PI)
    
    p5.fill(255);
    p5.circle(0,0,wid*0.66)
	};

  if (typeof window !== 'undefined') {
    const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
      ssr: false,
    })
    return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
  }
  else {
    return null;
  }
};

function P5Sketch6({ ref1 }) {
  let n = 3;
  let wid;
  let data;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(ref1.current.clientWidth*1.083334, ref1.current.clientHeight).parent(canvasParentRef);
    wid = p5.width/(n*2)*0.5
    data = [[-p5.HALF_PI,-.5*p5.HALF_PI,"#fdc300"],[-p5.HALF_PI,1.5*p5.HALF_PI,"#60a498"],[-p5.HALF_PI,2*p5.HALF_PI,"#74e0b0"]];
    p5.noLoop();

  
  };
  
  function windowResized(p5, event) {
    // console.log(ref1.current)
    wid = p5.width / (n * 2) * 0.5;
    p5.resizeCanvas(ref1.current.clientWidth * 1.083334, ref1.current.clientHeight);
    
    // draw(p5);
  }

	const draw = (p5) => {
    
    p5.background(255)
    p5.noStroke()
    p5.translate(p5.width/2,p5.height/2)
    for(let i=n;i>0;i--){
      p5.fill("#eeeeee")
      p5.circle(0,0,2*i*wid)  
      
      p5.fill(data[i-1][2])
      p5.arc(0,0,2*i*wid,2*i*wid,data[i-1][0],data[i-1][1])
      
      //balls
      
      let x = ((i)*wid -wid/4)*p5.cos(data[i-1][1]);
      let y = ((i)*wid -wid/4)*p5.sin(data[i-1][1]);
      
      p5.circle(x, y,wid/2)
      
      x = ((i)*wid -wid/4)*p5.cos(data[i-1][0]);
      y = ((i)*wid -wid/4)*p5.sin(data[i-1][0]);
      
      p5.circle(x, y,wid/2)
      
      
      p5.fill(255)
      p5.circle(0,0,(2*i -1)*wid)
    }
	};

  if (typeof window !== 'undefined') {
    const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
      ssr: false,
    })
    return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
  }
  else {
    return null;
  }
};


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

  let refArr = []

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
            <div className={styles.col + " border"} ref={refArr[0]}>
              <Stats />
            </div>
            <div className={styles.col + " border"} ref={refArr[1]}>
              <div className={styles.graphHeading}>
                Ticket Status
              </div>
              <Image src="/2.jpg" layout="fill" alt="graph" />
            </div>
            <div className={styles.col + " border"} ref={refArr[2]}>
              <h1>WIP</h1>
            </div>
            <div className={styles.col + " border"} ref={refArr[3]}>
              <div className={styles.graphHeading}>
                Total Messages
              </div>
              <P5Sketch4 ref1={refArr[3]} />
            </div>
            <div className={styles.col + " border"} ref={refArr[4]}>
              <div className={styles.graphHeading}>
                Message Volume
              </div>
              <P5Sketch5 ref1={refArr[4]} />
            </div>
            <div className={styles.col + " border"} ref={refArr[5]}>
              <div className={styles.graphHeading}>
                Rates
              </div>
              <P5Sketch6 ref1={refArr[5]} />
            </div>
          </div>
        </div>
      </main>

      
    </div>
  )
}
