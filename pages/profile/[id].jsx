import { useEffect, useState } from 'react'
import {Router, useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import styles from '../../styles/Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LeftBar from '../../components/LeftBar'
import RightBar from '../../component/RightBar'
import PostCard from '../../components/PostCard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axiosReq from '../../util/apiCalls'


export default function Profile({user, posts}) {
    const [category, setCategory] = useState('Tweets')
    const currentUser = useSelector((state) => state.user.currentUser?.user);
    const router = useRouter()

    const src = "https://i.pinimg.com/originals/8b/aa/5b/8baa5bb80ce306685aa46505ed299153.png";
    const userSrc = "https://pbs.twimg.com/profile_images/1505502323258413056/bClVJgvD_400x400.jpg";
    console.log(currentUser.following.indexOf(user._id));

    const follow = async () => {
        try {
          const res = await axiosReq.post(`/follow/${user._id}`, {
            user,
            currentUser: currentUser
          })
          router.push('/home')
        } catch (error) {
          console.log(error);
        }  
    }
  return (
    <div className={styles.container}>
        <LeftBar />
        <div className={styles.center}>
            <div className={styles.nav}>
                <KeyboardBackspaceIcon />
                <span className={styles.navUser}>
                    <span className={styles.name}>{user.username}</span>
                    <span className={styles.tweets}>{posts.length} Tweet</span>
                </span>
            </div>
            <div className={styles.user}>
            <Image className={styles.followImg} loader={user.bgImg ? () => user.bgImg : () => src} src={user.bgImg ?  user.bgImg : src} alt="" width={600} height={200} />
                <div className={styles.userContainer}>
                    <div className={styles.userImgContainer}>
                    <Image className={styles.userImg} loader={user.img ? () => user.img : () => userSrc} src={user.img ?  user.img : userSrc} alt="" width={150} height={150} />
                    </div>
                    {currentUser.following.indexOf(user._id) === -1 ? (
                        <button className={styles.followBtn} onClick={follow}>Follow +</button>
                      ) : (
                        <button className={styles.followBtn} onClick={follow}>Unfollow -</button>
                      )}
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
                {posts.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
              </div>
            )}

            {category === 'Tweets & replies' && (
               <div className={styles.postsContainer}>
               {posts.map((post) => (
                 <PostCard post={post} key={post._id} />
               ))}
             </div>
            )}
            {category === 'Media' && (
                <div className={styles.media}>
                    <h1>He hasn't Tweeted any photos or videos yet</h1>
                    <p>When he send Tweets with photos or videos in them, it will show up here.</p>
                </div>
            )}
            {category === 'Likes' && (
               <div className={styles.media}>
               <h1>He hasn't Liked any photos or videos yet</h1>
               <p>When he like Tweets, it will show up here.</p>
           </div>
            )}

        </div>
        <RightBar />
    </div>
  )
}
export const getServerSideProps = async ({params}) => {
    //const id = location.pathname.split('/')[2]
    try { 
        const userRes = await axiosReq.get(`/user/${params.id}?id=${params.id}`)
        const postsRes =  await axiosReq.get(`posts/user?user=${params.id}`)
        return {
            props: {
              user: userRes.data,
              posts: postsRes.data
            },
          };
    } catch (error) {
        console.log(error);
    }
  };