import { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import axiosReq from '../util/apiCalls'
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from "../redux/userSlice";
import {useRouter} from 'next/router'


export default function Login() {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [useEmail, setUseEmail] = useState(true)
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async () => {
        if(useEmail){
            try {
                const res = await axiosReq.post('login', {
                    email,
                    password
                });
                dispatch(loginSuccess(res.data))
                router.push('/home')
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await axiosReq.post('login', {
                    phone,
                    password
                });
                dispatch(loginSuccess(res.data))
                router.push('/home')
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
    <div className={styles.login}>
        <div className={styles.form}>
            <div className={styles.svgContainer}>
                <svg fill='rgb(29, 155, 240)' viewBox="0 0 24 24" aria-hidden="true" className="r-k200y r-1cvl2hr r-4qtqp9 r-yyyyoo r-5sfk15 r-dnmrzs r-kzbkwu r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            </div>
            <div className={styles.inputContainer}>
                <h1>Login to twitter</h1>
                {useEmail ? (
                    <input type="text" name="email" id="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                ) : (
                    <input type="text" name="phone" id="phone" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                )}
                <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span onClick={() =>  setUseEmail((prev) => !prev)}>{useEmail ? 'Use Phone number' : 'Use email'}</span>
            </div>
            <button className={styles.button} onClick={handleSubmit}>forward</button>
            <button className={styles.forgotButton}>forgot password?</button>

            <span className={styles.register}>Don't have an account? <Link passHref href={'/register'}>Sign up</Link></span>
        </div>
    </div>
  )
}