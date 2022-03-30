import dbConnect from "../../util/mongo";
import User from '../../models/User'
import bcrypt from 'bcrypt'

//register
const handler =  async (req,res) => {
    await dbConnect()
    if(req.method === 'POST'){
        const {username, email,phone, password, dateOfBirth} = req.body;
        try {
            console.log(req.body);
            const hashedPassword = await bcrypt.hash(password, 12);
            if(email.length > 0) {
                const newUser = await User.create({
                    email,
                    password: hashedPassword, 
                    username: username,
                    dateOfBirth,
                    phone: ''
                });
                res.status(200).json({newUser})
            } else {
                const newUser = await User.create({
                    phone,
                    password: hashedPassword, 
                    username: username,
                    dateOfBirth,
                    email: ''
                });
                res.status(200).json({newUser})
            }
        } catch (error) {
            res.status(500).json(error.message)
            console.log(error);
        }
    }
};
export default handler