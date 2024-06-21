import jwt, {JwtPayload} from 'jsonwebtoken'

const AuthCheck = async (req: Request) => {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if(!token) {
        return false;
    }
    try {
        const decode = await jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        if(decode){
            return decode.email
        }
    } catch (error) {
        return false
    } 
}

export default AuthCheck;