import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../css/pages/Home.module.css';

import Head from 'next/head';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | recon-traning</title>
      </Head>

      <ExperienceBar/>          

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>

  )
}
