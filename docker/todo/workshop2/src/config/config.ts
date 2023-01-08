export default () => ({
    app: {
        appEnv: process.env.APP_ENV,
        port: parseInt(process.env.PORT) || 3000,
        debug: process.env.DEBUG === "true",
    },
});