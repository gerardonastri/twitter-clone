import { useEffect } from 'react'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import styles from '../styles/Index.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Index() {
    /*const router = useRouter();
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
       const pushUser = async () => {
          if(user !== null){
            router.push('/home')
          } else {
            router.push('/login')
          }
       }
       pushUser()
    }, []) */

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/twitter logo.png" alt="Twitter img" layout='fill' objectFit='cover' /> 
      </div>
      <div className={styles.right}>
        <svg fill='rgb(29, 155, 240)' viewBox="0 0 24 24" aria-hidden="true" className="r-k200y r-1cvl2hr r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        <h1>In progress now</h1>
        <h3>Register to twitter now</h3>
        <Link passHref href={'/register'}>
          <button className={styles.signupBtn}>Register by phone number or email</button>
        </Link>
        <span>By subscribing you agree to the Terms of Service and the Privacy Policy, including the Use of Cookies.</span>
        <h4>Already have an account?</h4>
        <Link passHref href={'/login'}>
          <button className={styles.loginBtn}>Login</button>
        </Link>
      </div>
    </div>
    <div className={styles.footer}>
      <span>Chi siamo</span>
      <span>Centro assistenza</span>
      <span>Informativa sulla privacy</span>
      <span>Norme sui cookie</span>
      <span>Accessibilità</span>
      <span>Info sugli annunci</span>
      <span>Blog</span>
      <span>Status</span>
      <span>Lavora con noi</span>
      <span>Risorse dei brand</span>
      <span>Pubblicità</span>
      <span>Marketing</span>
      <span>Twitter per le aziende</span>
      <span>Sviluppatori</span>
      <span>Elenco</span>
      <span>Impostazioni</span>
      <span>&copy; 2022 Twitter, Inc.</span>
    </div>
    </div>
  )
}