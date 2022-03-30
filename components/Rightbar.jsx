import styles from '../styles/RightBar.module.css'
import Image from "next/image"
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect, useState } from 'react'
import axiosReq from '../util/apiCalls'

const RightBar = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
          try {
            const res = await axiosReq.get('posts')
            setPosts(res.data)
          } catch (error) {
            console.log(error);
          }
        }
        getPosts()
     }, [])
    const src = '';
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <SearchIcon />
                <input type="text" name="search" id="search" placeholder='Search Twitter' />
            </div>
            <div className={styles.trendsContainer}>
                <h1>Trends for you</h1>
                <div className={styles.trend}>
                    <div className={styles.info}>
                        <span className={styles.location}>Trending in italy</span>
                        <span className={styles.hastag}>#Nowar</span>
                        <span className={styles.tweets}>1,565 Tweets</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className={styles.trend}>
                    <div className={styles.info}>
                        <span className={styles.location}>Trending in italy</span>
                        <span className={styles.hastag}>#Nowar</span>
                        <span className={styles.tweets}>1,565 Tweets</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className={styles.trend}>
                    <div className={styles.info}>
                        <span className={styles.location}>Trending in italy</span>
                        <span className={styles.hastag}>#Nowar</span>
                        <span className={styles.tweets}>1,565 Tweets</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className={styles.trend}>
                    <div className={styles.info}>
                        <span className={styles.location}>Trending in italy</span>
                        <span className={styles.hastag}>#Nowar</span>
                        <span className={styles.tweets}>1,565 Tweets</span>
                    </div>
                    <MoreHorizIcon />
                </div>
            </div>
            <div className={styles.whoToFollow}>
                <h1>Who to follow</h1>
                {posts.length > 5 ? (
                    posts.slice(0,5).map((post) => (
                        <div className={styles.follow}>
                            <div className={styles.followUser}>
                            <Image className={styles.followImg} loader={post.user.img ? () => post.user.img : () => defaultSrc} src={post.user.img ?  post.user.img : defaultSrc} alt="" width={40} height={40} />
                              <span className={styles.name}>
                                  <span><b style={{color: 'black'}}>{post.user.username}</b></span>
                                  <span className={styles.tag}>{post.user.username}</span>
                              </span>
                            </div>
                            <button className={styles.followBtn}>Follow</button>
                      </div>
                    ))
                ) : (
                    posts.map((post) => (
                        <div className={styles.follow}>
                            <div className={styles.followUser}>
                            <Image className={styles.followImg} loader={post.user.img ? () => post.user.img : () => defaultSrc} src={post.user.img ?  post.user.img : defaultSrc} alt="" width={40} height={40} />
                              <span className={styles.name}>
                                  <span><b style={{color: 'black'}}>{post.user.username}</b></span>
                                  <span className={styles.tag}>{post.user.username}</span>
                              </span>
                            </div>
                            <button className={styles.followBtn}>Follow</button>
                      </div>
                    ))
                )}
            </div>
            <div className={styles.utils}>
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
                <span>Accessibility</span>
                <span>Ads info</span>
                <span>More</span> 
                <span>&copy; Twitter, Inc.</span>
            </div>
        </div>
    )
}

export default RightBar
