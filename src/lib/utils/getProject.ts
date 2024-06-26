export async function getProject() {
    const response = await fetch('http://localhost:3000/api/projects')
    const data = await response.json()
    return data['data']
    // .sort((a: any) => {
    //     if (a.mainnet) {
    //         if (a.active) {
    //             return -1;
    //         }
    //         return 1
    //     }
    //     else {
    //         if (a.active) {
    //             return -1
    //         }
    //         return 1
    //     }
    // })
}