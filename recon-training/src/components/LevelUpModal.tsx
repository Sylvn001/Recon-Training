import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../css/components/LevelUpModal.module.css'

export function LevelUpModal(){

  const {level, closeLevelUpModal} = useContext(ChallengesContext)

  return(
    <div className={styles.overlay}> 
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal"/>
        </button>
        <div className={styles.containerTwitter}>
          <a 
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=Alcancei%20ao%20level%20${level}!!%20Recon-Training%20https://recon-training-b50rn51mh-sylvn001.vercel.app/`}
            target="_blank"
            data-size="large"
          >
            <strong>Compartilhar no Twitter!</strong>
            <img src="icons/twitter.svg"/>
          </a>
        </div>
      </div>
    </div>
  )
}