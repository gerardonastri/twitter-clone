import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import PostCard from '../components/PostCard'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import axiosReq from '../util/apiCalls'
import storage from '../util/firebase';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [postDesc, setPostDesc] = useState("");
  const [postImg, setPostImg] = useState("");
  const user = useSelector((state) => state.user.currentUser?.user)
  const router = useRouter();

  useEffect(() => {
    const pushUser = async () => {
       if(user == null) {
         router.push('/login')
       }
    }
    const getPosts = async () => {
      try {
        const res = await axiosReq.get('posts')
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    pushUser()
    getPosts()
 }, [])

 const CreatePost = async () => {
    const fileData = await storage.ref(`items/${postImg.name}`).put(postImg)
    const imageSrc = await fileData.ref.getDownloadURL()
        try {
          const res = await axiosReq.post('posts', {
            user,
            description: postDesc,
            img: imageSrc
          })
          router.push('/home')
        } catch (error) {
          console.log(error);
        }
 }

 const defaultSrc = 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg';
  return (
    <div className={styles.home}>
        <LeftBar user={user}/>
        <div className={styles.center}>
            <div className={styles.postForm}>
              <h1>Home</h1>
              <div className={styles.form}>
                <Link passHref href="/profile"><Image className={styles.userImg} loader={user ? () => user.img : () => defaultSrc} src={user ?  user.img : defaultSrc} alt="" width={50} height={50} /></Link>
                <input type="text" name="name" id="name" placeholder="What's happening? " value={postDesc} onChange={(e) => setPostDesc(e.target.value)} />
              </div>
              <div className={styles.actions}>
                  <div className={styles.iconsContainer}>
                    <div className={styles.imgFileContainer}>
                      <label htmlFor="img">
                        <ImageOutlinedIcon />
                      </label>
                      <input type="file" name="img"  id="img" style={{display: 'none'}} onChange={(e) => setPostImg(e.target.files[0])} />
                    </div>
                    <GifBoxOutlinedIcon />
                    <PollOutlinedIcon />
                    <SentimentSatisfiedAltOutlinedIcon />
                    <EventNoteOutlinedIcon />
                  </div>
                  <div className={styles.button} onClick={CreatePost}>Tweet</div>
              </div>
            </div>
            <div className={styles.postsContainer}>
              {posts.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
            </div>
        </div>
        <RightBar/>
    </div>
  )
}