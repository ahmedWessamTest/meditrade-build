
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
    'index.csr.html': {size: 42008, hash: '61d595aa02bf163c6dab095ad118de049495561493477e1e631e134aa1679f35', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3658, hash: '87e30385852057cc29999b86216622cf42bdc763624744a34cbb8ee2207bf875', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KRN5WX4M.css': {size: 206403, hash: 'LOZvI/ESHzI', text: () => import('./assets-chunks/styles-KRN5WX4M_css.mjs').then(m => m.default)}
  },
};
