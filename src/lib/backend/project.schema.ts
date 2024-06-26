import {model, models, Schema} from 'mongoose'

export interface IProject {
    project_name: string,
    logo_url: string,
    docs_url: string,
    stake_url: string,
    tags: string,
    mainnet: boolean,
    active: boolean
}

const ProjectSchema = new Schema<IProject> (
    {
        project_name: {type: String, required: false},
        logo_url: {type: String, required: false},
        docs_url: {type: String, required: false},
        stake_url: {type: String, required: false},
        tags: {type: String, required: false},
        mainnet: {type: Boolean, required: false, default: false},
        active: {type: Boolean, required: false, default: true}
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
)
const Project = models.Project || model<IProject>('Project', ProjectSchema);
export default Project;