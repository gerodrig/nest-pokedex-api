
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'development',
    mongodb: process.env.MONGODB_URI,
    port: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_QUERY_LIMIT || 10,
})