export type project = {
    project_name: string;
    logo_url: string,
    docs_url: string,
    stake_url: string,
    tags: string,
    mainnet: boolean,
    active: boolean
}

export type user = {
    email: string,
    password: string
}