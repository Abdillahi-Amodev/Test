import jwt from 'jsonwebtoken';

const verified=(req,res,next)=>{
    let token=req.header('auth')
    try {
        if (!token) {
            return res.status(400).json({msg:'Invalid token'})
        }
        jwt.verify(token,'mysecretkey',(err,decoded)=>{
            if (err) {
                return res.status(400).json({msg:'there is a error in the token'})
            }else{
                req.decoded=decoded;
                next();
            }

        })
    } catch (error) {
        res.status(400).json({msg:"something wrong check"})
    }

}
export default verified