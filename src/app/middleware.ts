import jwt, {JwtPayload} from 'jsonwebtoken'

export const dynamic = 'force-dynamic'

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
export const config = {
    matcher: ['/api/projects/:path*']
}

export default AuthCheck;