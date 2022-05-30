import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LeftBar from '../components/LeftBar'
import RightBar from '../component/RightBar'
import EditForm from '../components/EditForm'
import PostCard from '../components/PostCard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axiosReq from '../util/apiCalls'
import storage from '../util/firebase';


export default function Profile() {
    const [category, setCategory] = useState('Tweets')
    const [posts, setPosts] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const user = useSelector((state) => state.user.currentUser?.user)
    const router = useRouter();


    useEffect(() => {
        const getPosts = async () => {
          try {
            const res = await axiosReq.get(`posts/user?user=${user._id}`)
            setPosts(res.data)
          } catch (error) {
            console.log(error);
          }
        }
        getPosts()
     }, [])

    const src = "https://i.pinimg.com/originals/8b/aa/5b/8baa5bb80ce306685aa46505ed299153.png";
    const userSrc = "https://pbs.twimg.com/profile_images/1505502323258413056/bClVJgvD_400x400.jpg";
  return (
    <div className={showEdit ? `${styles.wrapper} ${styles.opacity}` : styles.wrapper}>
      <div className={styles.container}>
        <LeftBar style={showEdit && {opacity: '0.7'}}/>
        <div className={styles.center}>
            <div className={styles.nav}>
                <KeyboardBackspaceIcon />
                <span className={styles.navUser}>
                    <span className={styles.name}>{user?.username}</span>
                    <span className={styles.tweets}>{posts?.length} Tweet</span>
                </span>
            </div>
            <div className={styles.user}>
                <Image className={styles.userBgImg} loader={() => user.bgImg} src={user?.bgImg} alt="" height={200} width={600} unoptimized />
                <div className={styles.userContainer}>
                    <div className={showEdit ? `${styles.userImgContainer} ${styles.index}` : styles.userImgContainer}>
                        <Image className={showEdit ? `${styles.userImg} ${styles.index}` : styles.userImg} loader={() => user?.img} src={user?.img} alt="" height={150} width={150}  unoptimized />
                    </div>
                    <button className={styles.editBtn} onClick={() => setShowEdit(prev => !prev)}>Edit profile</button>
                </div>
                <div className={styles.userInfo}>
                    <h3>{user.username}</h3>
                    <span className={styles.tag}>@{user.username}</span>
                    <span className={styles.dateJoined}><CalendarMonthIcon /> Joined March 2022</span>
                    <span className={styles.follow}><span><b>{user.following.length}</b> following</span><span><b>{user.followers.length}</b> Followers</span></span>
                </div>
                <div className={styles.actions}>
                    <span className={category === 'Tweets' ? styles.selected : ''} onClick={() => setCategory('Tweets')}>Tweets</span>
                    <span className={category === 'Tweets & replies' ? styles.selected : ''} onClick={() => setCategory('Tweets & replies')}>Tweets & replies</span>
                    <span className={category === 'Media' ? styles.selected : ''} onClick={() => setCategory('Media')}>Media</span>
                    <span className={category === 'Likes' ? styles.selected : ''} onClick={() => setCategory('Likes')}>Likes</span>
                </div>
            </div>
            {/*CATEGORY*/}
            {category === 'Tweets' && (
                <div className={styles.postsContainer}>
                {posts?.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
              </div>
            )}

            {category === 'Tweets & replies' && (
               <div className={styles.postsContainer}>
               {posts?.map((post) => (
                 <PostCard post={post} key={post._id} />
               ))}
             </div>
            )}
            {category === 'Media' && (
                <div className={styles.media}>
                    <h1>You haven’t Tweeted any photos or videos yet</h1>
                    <p>When you send Tweets with photos or videos in them, it will show up here.</p>
                </div>
            )}
            {category === 'Likes' && (
               <div className={styles.media}>
               <h1>You haven’t Liked any photos or videos yet</h1>
               <p>When you like Tweets, it will show up here.</p>
           </div>
            )}

        </div>
        <RightBar style={showEdit && {opacity: '0.7'}} />
          {showEdit && (
            <EditForm user={user && user} displayNone={!showEdit} />
          )}
    </div>
    </div>
  )
}