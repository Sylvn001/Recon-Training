import Head from 'next/head';

import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import ChallengeBox from '../components/ChallengeBox';

import styles from '../css/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | recon-traning</title>
      </Head>

      <ExperienceBar/>          
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>

  )
}
