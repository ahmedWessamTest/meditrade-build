module.exports = {
  apps: [
    {
      name: "meditrade-ssr",

      // Entry file
      script: "./server/server.mjs",

      // ===============================
      // Performance
      // ===============================
      instances: "max",          // عدد الأنوية
      exec_mode: "cluster",      // Cluster mode
      node_args: "--max-old-space-size=2048",

      // ===============================
      // Environment
      // ===============================
      env: {
        NODE_ENV: "production",
        PORT: 4000,
        HOST: "127.0.0.1"
      },

      // ===============================
      // Logs
      // ===============================
      out_file: "/home/meditradeeg/logs/ssr-out.log",
      error_file: "/home/meditradeeg/logs/ssr-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      // ===============================
      // Stability
      // ===============================
      max_memory_restart: "800M",   // Restart لو الذاكرة زادت
      restart_delay: 3000,
      kill_timeout: 5000,
      listen_timeout: 10000,

      // ===============================
      // Reliability
      // ===============================
      autorestart: true,
      watch: false,
      time: true,

      // ===============================
      // Advanced
      // ===============================
      merge_logs: true,
      instance_var: "PM2_INSTANCE_ID"
    }
  ]
};
