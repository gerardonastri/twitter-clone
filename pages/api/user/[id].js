import dbConnect from "../../../util/mongo";
import User from '../../../models/User'


const handler = async (req,res) => {
  await dbConnect()
 // const dispatch = useDispatch();
    if(req.method === 'GET'){
        try {
            const {id} = req.query;
            console.log(req.query);
            const user = await User.findById(id)
            console.log(`id: ${id}, user: ${user}`);
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
     if(req.method === "PUT"){
         const {id} = req.query
        const {username, bio, location, img, bgImg, website} = req.body;
        console.log(req.body);
        try {
            const newUser = await User.findByIdAndUpdate(id, {
                username,
                bio,
                location,
                img,
                bgImg,
                 website
            })
            res.status(200).json({newUser})
        } catch (error){
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