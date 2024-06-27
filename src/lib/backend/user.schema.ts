import {model, models, Schema} from 'mongoose';

export interface IUser{
    email: string,
    password: string
};

const UserSchema = new Schema<IUser> (
    {
        email: {type : String, required: true},
        password: {type : String, required: true}
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id
            },
        },
    },
);

const User = models.User || model<IUser>('User', UserSchema);
export default User;