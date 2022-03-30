import styles from '../styles/Leftbar.module.css'
import Image from "next/image"
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Leftbar = ({user}) => {

    const defaultSrc = 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg';
    const src = '';
    return (
        <div className={styles.container}>
            <svg className={styles.logo} fill='rgb(29, 155, 240)' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            <div className={styles.linksContainer}>
                <div className={styles.link}>
                    <HomeIcon />
                    <span>Home</span>
                </div>
                <div className={styles.link}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
                    <span>Explore</span>
                </div>
                <div className={styles.link}>
                    <NotificationsNoneOutlinedIcon />
                    <span>Notifications</span>
                </div>
                <div className={styles.link}>
                    <EmailOutlinedIcon/>
                    <span>Messages</span>
                </div>
                <div className={styles.link}>
                    <BookmarkBorderOutlinedIcon />
                    <span>Bookmarks</span>
                </div>
                <div className={styles.link}>
                    <ListAltIcon />
                    <span>Lists</span>
                </div>
                <div className={styles.link}>
                    <PermIdentityIcon/>
                    <span>Profile</span>
                </div>
                <div className={styles.link}>
                    <MoreHorizIcon/>
                    <span>More</span>
                </div>
            </div>
            <button className={styles.button}>Tweet</button>
            <div className={styles.accountContainer}>
            <Image className={styles.userImg} loader={user ? () => user.img : () => defaultSrc} src={user ?  user.img : defaultSrc} alt="" width={40} height={40} />
                <span className={styles.username}>
                    <span style={{fontSize: '16px', fontWeight: '500'}}>Gerardo Nastri</span>
                    <span style={{fontSize: '12px'}}>@gerardonastri</span>
                </span>
                <MoreHorizIcon/>
            </div>
        </div>
    )
}

export default Leftbar
