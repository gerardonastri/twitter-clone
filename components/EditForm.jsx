import styles from '../styles/EditForm.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import axiosReq from '../util/apiCalls'
import storage from '../util/firebase';
import { style } from '@mui/system';
import {useRouter} from 'next/router'

const EditForm = ({user, displayNone}) => {
    const [name, setName] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [website, setWebsite] = useState(user.location);
    const [img, setImg] = useState(user.img);
    const [bgImg, setBgImg] = useState(user.bgImg);
    const [dsNone, setDsNone] = useState(displayNone)
    const router = useRouter()

    const UpdateUser = async () => {
        if(img !== user.img && bgImg === user.bgImg){
            const fileData = await storage.ref(`items/${img.name}`).put(img)
            const imageSrc = await fileData.ref.getDownloadURL();
            try {
                const res = await axiosReq.put(`user/${user._id}?user=${user._id}`, {
                  username: name,
                  bio,
                  location,
                  img: imageSrc,
                  bgImg,
                   website
                })
                router.push('/profile')
              } catch (error) {
                console.log(error);
              }
        }
        if(img === user.img && bgImg !== user.bgImg){
            const fileData2 = await storage.ref(`items/${bgImg.name}`).put(bgImg)
            const bgImageSrc = await fileData2.ref.getDownloadURL()
            try {
                const res = await axiosReq.put(`user/${user._id}?user=${user._id}`, {
                  username: name,
                  bio,
                  location,
                  img,
                  bgImg: bgImageSrc,
                   website
                })
                router.push('/profile')
              } catch (error) {
                console.log(error);
              }
        }
        if(img !== user.img && bgImg !== user.bgImg){
            const fileData = await storage.ref(`items/${img.name}`).put(img)
            const imageSrc = await fileData.ref.getDownloadURL();
            const fileData2 = await storage.ref(`items/${bgImg.name}`).put(bgImg)
            const bgImageSrc = await fileData2.ref.getDownloadURL()
            try {
                const res = await axiosReq.put(`user/${user._id}?user=${user._id}`, {
                  username: name,
                  bio,
                  location,
                  img: imageSrc,
                  bgImg: bgImageSrc,
                   website
                })
                router.push('/profile')
              } catch (error) {
                console.log(error);
              }
        }
       
     }
     const pushUser = async () => {
       router.push('/home')
     }

    const defaultSrc = 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg'
    return (
        <div className={dsNone ? `${styles.form} ${styles.dsNone}` : styles.form}>
            <div className={styles.top}>
                <ClearIcon onClick={pushUser} />
                <h3>Edit profile</h3>
                <button className={styles.saveBtn} onClick={UpdateUser}>Save</button>
            </div>
                <div className={styles.userWrapper}>
                    <div className={styles.imgFileContainer}>
                      <label htmlFor="img">
                      <Image className={styles.userBgImg} loader={() => user.bgImg} src={user.bgImg} alt="" height={200} width={600} unoptimized />
                      </label>
                      <input type="file" name="bgImg"  id="bgImg" style={{display: 'none'}} onChange={(e) => setBgImg(e.target.files[0])} />
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.imgFileContainer}>
                            <label htmlFor="img">
                            <div className={styles.userImgContainer}>
                                <Image className={styles.userImg} loader={() => user.img} src={user.img} alt="" height={150} width={150}  unoptimized />
                            </div>
                            </label>
                            <input type="file" name="img"  id="img" style={{display: 'none'}} onChange={(e) => setImg(e.target.files[0])} />
                        </div>
                    </div>
                </div>
            <div className={styles.inputContainer}>
                <input type="text" name="name" id="name" placeholder={name} value={name} onChange={(e) => setName(e.target.value)} />
                <input className={styles.bio} type="text" name="bio" id="bio" placeholder={user.bio ? user.bio : 'Bio'} value={bio} onChange={(e) => setBio(e.target.value)} />
                <input type="text" name="location" id="location" placeholder={user.location ? user.location : 'Location'} value={location} onChange={(e) => setLocation(e.target.value)} />
                <input type="text" name="website" id="website" placeholder={user.website ? user.website : 'Website'} value={website} onChange={(e) => setWebsite(e.target.value)} />
                <span>Switch to professional</span>
            </div>
        </div>
    )
}

export default EditForm
