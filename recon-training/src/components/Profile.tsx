import styles from '../css/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/sylvn001.png" alt="Junior Barros"/>
      <div>
        <strong>Junior Barros</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}