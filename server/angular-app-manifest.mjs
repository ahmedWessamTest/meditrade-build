
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4B64NG4M.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4B64NG4M.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TXVB6CMB.js",
      "chunk-YVKCAVBT.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YBCAEC4U.js",
      "chunk-YVKCAVBT.js",
      "chunk-SS6G2IYT.js"
    ],
    "route": "/*/partners"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-W7TOGV4O.js"
    ],
    "route": "/*/sectors"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-W7TOGV4O.js"
    ],
    "route": "/*/sectors/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5SX2IXKO.js",
      "chunk-YVKCAVBT.js",
      "chunk-5C4FDEOP.js",
      "chunk-SS6G2IYT.js"
    ],
    "route": "/*/media"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TT46QTFZ.js",
      "chunk-YVKCAVBT.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-72ZZND5F.js",
      "chunk-YVKCAVBT.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4LJUSHSI.js"
    ],
    "route": "/*/notfound"
  },
  {
    "renderMode": 0,
    "redirectTo": "/*/notfound",
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 41920, hash: '679ad8f9bc38a464e93089d24a8168a9cca67af70e6fbc0077a5bd3dc5fb9594', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3569, hash: 'd4e27f72c920046d3b4519a7de91c7d42f18b48aaebe57ecfc8e8c04bef150f0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KRN5WX4M.css': {size: 206403, hash: 'LOZvI/ESHzI', text: () => import('./assets-chunks/styles-KRN5WX4M_css.mjs').then(m => m.default)}
  },
};
