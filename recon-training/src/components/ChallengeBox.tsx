import {useContext, useState} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../css/components/ChallengeBox.module.css'


export default function ChallengeBox(){
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceded(){
    resetCountdown();
    completeChallenge();
  }

  function handleChallengeFailed(){
    resetCountdown();
    resetChallenge();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}> 
          <header>{activeChallenge.amount}</header>

          <main>
              <img src={`icons/${activeChallenge.type}.svg`}/> 
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button onClick={handleChallengeFailed} type="button" className={styles.challengeFailedButton}>
              Falhei
              </button>
            <button onClick={handleChallengeSucceded} type="button" className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
              Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}