import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../css/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
  const {challengesCompleted} = useContext(ChallengesContext)

  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}