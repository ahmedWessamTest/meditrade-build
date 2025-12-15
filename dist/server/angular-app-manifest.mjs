
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
      "chunk-QLKRREON.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QLKRREON.js",
      "chunk-RX6MPJOQ.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OGRNWILR.js",
      "chunk-YVKCAVBT.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UZWN3SEL.js",
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
      "chunk-L6TWPAA2.js",
      "chunk-YVKCAVBT.js",
      "chunk-5C4FDEOP.js",
      "chunk-SS6G2IYT.js"
    ],
    "route": "/*/media"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-H2CKHMT5.js",
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
    'index.csr.html': {size: 41368, hash: '7f956ea3be6a9a2cbf394558511072d3be86b06efd9dcc507c8deed6f3bea13c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3059, hash: 'b0896401fc010c9c5a3dfa84994c17b9d7c30e850e287486fa51e39239ec85eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KRN5WX4M.css': {size: 206403, hash: 'LOZvI/ESHzI', text: () => import('./assets-chunks/styles-KRN5WX4M_css.mjs').then(m => m.default)}
  },
};
