
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
    "preload": [
      "chunk-R6E4VIPR.js",
      "chunk-RLG7D6QG.js",
      "chunk-XM45Y5UH.js",
      "chunk-OIUUN5AE.js",
      "chunk-A627MTVQ.js",
      "chunk-3MN4BVLC.js",
      "chunk-SA24UATL.js",
      "chunk-HC5TIWGC.js",
      "chunk-IQMUNJA6.js",
      "chunk-ZD5RWOYH.js"
    ],
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZMNVY4NV.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZMNVY4NV.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HKNIQU2P.js",
      "chunk-A627MTVQ.js",
      "chunk-YVKCAVBT.js",
      "chunk-HC5TIWGC.js",
      "chunk-NDL4MLTX.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-O56ECUE5.js",
      "chunk-3MN4BVLC.js",
      "chunk-SA24UATL.js",
      "chunk-YVKCAVBT.js",
      "chunk-HC5TIWGC.js",
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
      "chunk-BVHLVOP6.js",
      "chunk-OIUUN5AE.js",
      "chunk-SA24UATL.js",
      "chunk-YVKCAVBT.js",
      "chunk-HC5TIWGC.js",
      "chunk-IQMUNJA6.js",
      "chunk-ZD5RWOYH.js",
      "chunk-5C4FDEOP.js",
      "chunk-SS6G2IYT.js"
    ],
    "route": "/*/media"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BA7RMCIX.js",
      "chunk-SA24UATL.js",
      "chunk-YVKCAVBT.js",
      "chunk-HC5TIWGC.js",
      "chunk-IQMUNJA6.js",
      "chunk-ZD5RWOYH.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-72ZZND5F.js",
      "chunk-YVKCAVBT.js",
      "chunk-ZD5RWOYH.js",
      "chunk-NDL4MLTX.js"
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
    'index.csr.html': {size: 41928, hash: 'ccc70a3398eb22fc34cc9cfe0e2b31037176a89464ea26411ecc77cce3cdf1b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3577, hash: '504cd3e0fad17a045ff03a3fd6109556b8db33d5ce25d959237395aea461082a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KRN5WX4M.css': {size: 206403, hash: 'LOZvI/ESHzI', text: () => import('./assets-chunks/styles-KRN5WX4M_css.mjs').then(m => m.default)}
  },
};
