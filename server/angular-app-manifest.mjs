
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
      "chunk-RO5MAVDN.js",
      "chunk-Q3LKLSQL.js",
      "chunk-2MSUCW46.js",
      "chunk-TLMDHQIH.js",
      "chunk-4LMQJG2F.js",
      "chunk-22NFTRBI.js",
      "chunk-BHIZYTM2.js",
      "chunk-AOVEFNQR.js",
      "chunk-QTUTND7F.js",
      "chunk-AL63UZWR.js"
    ],
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-O6P2RJVC.js",
      "chunk-NVKA7XTJ.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-O6P2RJVC.js",
      "chunk-NVKA7XTJ.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CN6PANKF.js",
      "chunk-4LMQJG2F.js",
      "chunk-364UJXP3.js",
      "chunk-AOVEFNQR.js",
      "chunk-Z3WRMO63.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EWMZ5YYS.js",
      "chunk-22NFTRBI.js",
      "chunk-BHIZYTM2.js",
      "chunk-364UJXP3.js",
      "chunk-AOVEFNQR.js",
      "chunk-LXRZVBFU.js"
    ],
    "route": "/*/partners"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FGAMN3EU.js"
    ],
    "route": "/*/sectors"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FGAMN3EU.js"
    ],
    "route": "/*/sectors/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WDFR4QKV.js",
      "chunk-TLMDHQIH.js",
      "chunk-BHIZYTM2.js",
      "chunk-364UJXP3.js",
      "chunk-AOVEFNQR.js",
      "chunk-QTUTND7F.js",
      "chunk-AL63UZWR.js",
      "chunk-OPT2SGER.js",
      "chunk-LXRZVBFU.js"
    ],
    "route": "/*/media"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZEVEX324.js",
      "chunk-BHIZYTM2.js",
      "chunk-364UJXP3.js",
      "chunk-AOVEFNQR.js",
      "chunk-QTUTND7F.js",
      "chunk-AL63UZWR.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YTBJUIAL.js",
      "chunk-364UJXP3.js",
      "chunk-AL63UZWR.js",
      "chunk-Z3WRMO63.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Y2VFLPP7.js"
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
    'index.csr.html': {size: 41928, hash: '69d1bf7a04cd44638dac8c4b617714d3708c6a7df0aa010edf49e240283487ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3577, hash: 'a3623d5464cce2381da9efff47a3deafa6ff97b8669d36fb55bb89fba6e4eae1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7NSTMOMC.css': {size: 206451, hash: 'TYCVwSQUbd0', text: () => import('./assets-chunks/styles-7NSTMOMC_css.mjs').then(m => m.default)}
  },
};
