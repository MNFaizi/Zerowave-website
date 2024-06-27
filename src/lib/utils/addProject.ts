import { project } from "../backend/type";

export async function addProject (token: string | null, data : project) {
    const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify(data)
    })
    return await response.json()
}