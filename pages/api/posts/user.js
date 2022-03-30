import dbConnect from "../../../util/mongo";
import Post from '../../../models/Post'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === 'GET'){
        try {
            const {user} = req.query;
            const posts = await Post.find({"user._id":  user}).limit(30)
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

export default handler