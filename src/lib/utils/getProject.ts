import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), '/src/posts')

export function getProject(){
    const fileNames = fs.readdirSync(postDirectory).filter(filename => !filename.startsWith('.'))
    const fileNamesData = fileNames.map((fileName) => {
        // Remove extension from filename to use as ID in the URL.
        const [name] = fileName.split('.')
        // read data in there 
        const fullPath = path.join(postDirectory, fileName)
        // read file with encoding 'utf-8'
        const fileContens = fs.readFileSync(fullPath, 'utf-8')
        const { data } = matter(fileContens)
        // destructering from data matter
        const { project_name,logo_url, docs_url, stake_url, tags, mainnet, active } = data
        // return all value 
        return { name, project_name,logo_url,  docs_url, stake_url, tags, mainnet, active } 
    })
    return fileNamesData.sort((a) => {
        if(a.mainnet){
            if(a.active){
                return -1;
            }
            return 1
        }
        else {
            if(a.active){
                return -1
            }
           return 1
        }
    })
}
