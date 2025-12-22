module.exports = {
  apps: [
    {
      name: "meditrade-ssr",
      script: "./server/server.mjs",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 80,
        HOST: "127.0.0.1"
      },
    }
  ]
};
