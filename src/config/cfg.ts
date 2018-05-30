export interface ConfigI {
    database: { host: string, bucket: string, username: string, password: string };
    syncgateway: { host: string, db: string };
}