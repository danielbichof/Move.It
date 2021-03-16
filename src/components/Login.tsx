import Head from 'next/head';
import styles from '../styles/components/Login.module.css';

import { LoginContext } from '../contexts/LoginContext'
import { useContext } from 'react';


export function Login(){

     const { username } = useContext(LoginContext);
    
    function redirectHome(){
        console.log(username)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login | move.it</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <img className={styles.simbolo} src="/Simbolo.svg" />

            <main className={styles.inputBox}> 
                    <div className={styles.titleWellcome}>
                        <h1>
                            <img src="/Logo.svg" alt="Move.It"/>
                        </h1>
                        <h2>Bem-vindo</h2>
                        <span className={styles.span}>
                            <img src="/icons/github.png" alt="GitHub"/>
                            Faça login com seu Github para começar
                        </span>
                    </div>

                    <div>
                        <input id="inputUsername"className={styles.input} type="text" placeholder="GitHub Username"/>
                        <button id="button"className={styles.button} onClick={redirectHome}>
                            <img src="/icons/arrow-rigth.png" />
                        </button> 
                    </div>
                  
            </main>
        </div>
    )
}