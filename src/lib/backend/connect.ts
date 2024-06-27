import mongoose, {ConnectOptions} from 'mongoose'

const MONGO_URI = process.env.MONGO_URI as string;

interface connectionOptions extends ConnectOptions {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
}

const options : connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};

async function connectMongo() {
    mongoose.connect(MONGO_URI, options)
    mongoose.set('strictQuery', false)
}
export default connectMongo;