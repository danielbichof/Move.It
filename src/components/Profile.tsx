import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { LoginContext } from '../contexts/LoginContext'
import styles from '../styles/components/Profile.module.css'


export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { username } = useContext(LoginContext);
    console.log(username)
    return(
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${username}.png`} alt='Daniel Bichof' />
            <div>
                <strong>{username}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>

    )
}