import dbConnect from "../../../util/mongo";
import Post from '../../../models/Post'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === 'GET'){
        try {
            const posts = await Post.find().limit(30)
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    if(req.method === "POST"){
        const {description, img, user} = req.body;
        console.log(req.body);
        try {
            const newUser = await Post.create({
                description,
                img,
                user
            });
            res.status(200).json({newUser})
        } catch (error){
            res.status(500).json(error.message)
        }
    }
}

export default handler