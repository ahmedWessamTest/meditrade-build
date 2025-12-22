module.exports = {
  apps: [
    {
      name: 'medi-trade-live',
      script: 'server/server.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      interpreter: 'node',
      node_args: '--optimize_for_size --max_old_space_size=2048',
      max_memory_restart: '1G',
      restart_delay: 4000,
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000,
        SSR_CACHE_TTL_SECONDS: '600',
        SSR_REDIS_PREFIX: 'ssr:'
      }
    }
  ]
};
