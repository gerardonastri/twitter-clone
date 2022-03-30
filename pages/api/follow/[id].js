import dbConnect from "../../../util/mongo";
import User from '../../../models/User'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === 'POST'){
        console.log(req.body.user);
        try {
            const user = await User.findById(req.body.user._id);
            const currentUser = await User.findById(req.body.currentUser)
            if(!user.followers.includes(req.body.currentUser)){
                await user.updateOne({$push: {followers: req.body.currentUser}})
                await currentUser.updateOne({$push: {following: user._id}})
                res.status(200).json('User followed')
            } else {
                await user.updateOne({$pull: {followers: req.body.currentUser}})
                await currentUser.updateOne({$pull: {following: user._id}})
                 res.status(200).json('User followed')
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    /*if(req.method === "POST"){
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
    }*/
}

export default handler