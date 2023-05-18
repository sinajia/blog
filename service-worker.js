/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15d4393845c9a0a5a356efcd4bc0a996"
  },
  {
    "url": "api/cli.html",
    "revision": "71ba92133f36c412a25e305565f4d413"
  },
  {
    "url": "api/node.html",
    "revision": "90b560b228e4ad57790ad67f33c062d8"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.93883742.css",
    "revision": "c777ce10a53c51bb8756bb1b9de5393b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.acf6dabb.js",
    "revision": "51ec42d627b99c9f956e4765f972a357"
  },
  {
    "url": "assets/js/100.8e617efc.js",
    "revision": "b373a08e973be8b8bee3b224ef45d990"
  },
  {
    "url": "assets/js/101.e230a5be.js",
    "revision": "2472d6bff1f72ed742d497034101ba45"
  },
  {
    "url": "assets/js/102.892fe721.js",
    "revision": "bba6cdfb27bacc9a53b218ef0da14899"
  },
  {
    "url": "assets/js/103.be930db8.js",
    "revision": "fc6b31164e0f11ce868313515711dcac"
  },
  {
    "url": "assets/js/104.4a81f743.js",
    "revision": "2a2ca7324264cabce40b8d341e4014b6"
  },
  {
    "url": "assets/js/105.424aaacc.js",
    "revision": "11dc026ec8a4a3faf9f426889ea5a751"
  },
  {
    "url": "assets/js/106.1978416e.js",
    "revision": "3f512e5b9be52b5079283e700065aa39"
  },
  {
    "url": "assets/js/107.4b87b5e0.js",
    "revision": "081169a54d46dc844ba857dfc7b6a4de"
  },
  {
    "url": "assets/js/108.1de58bea.js",
    "revision": "d2dfe63c4630aef23138f00a20e9c436"
  },
  {
    "url": "assets/js/109.60e958f2.js",
    "revision": "44438ede7c2c6074b9414386813e0f1f"
  },
  {
    "url": "assets/js/11.41efa7e5.js",
    "revision": "97665f27cad1ee46fc8e563274b11a5d"
  },
  {
    "url": "assets/js/12.97fc9c94.js",
    "revision": "5078a83fdbbf81a09b0ef2f18f6901e3"
  },
  {
    "url": "assets/js/13.9072f1ab.js",
    "revision": "bdbfe232343c971c2918c31c6bb16c0d"
  },
  {
    "url": "assets/js/14.d84b835f.js",
    "revision": "f1fee471f4af992c442d3beeebb90909"
  },
  {
    "url": "assets/js/15.f3dcd79e.js",
    "revision": "e0c9a70d7400a0794b321f6f6781472f"
  },
  {
    "url": "assets/js/16.b1ee0424.js",
    "revision": "5a7989c93cf968849fd6ecb9e4317ac4"
  },
  {
    "url": "assets/js/17.b5629770.js",
    "revision": "78260462071cc3e5685bfe8ddbf77877"
  },
  {
    "url": "assets/js/18.53f36a61.js",
    "revision": "fdb7c89f17e88fc5a9a589e450bea6c1"
  },
  {
    "url": "assets/js/19.8ff6299f.js",
    "revision": "239726f2a288eb44db983c9046ed1011"
  },
  {
    "url": "assets/js/20.4306003a.js",
    "revision": "5496240ad87539c9af872e6b7faeeb0b"
  },
  {
    "url": "assets/js/21.b1b24063.js",
    "revision": "d575855437cab2cbc09507ed51a02c45"
  },
  {
    "url": "assets/js/22.2c31c649.js",
    "revision": "d36e606ad52f841ecfbe1711cfdcd197"
  },
  {
    "url": "assets/js/23.4acd384c.js",
    "revision": "9b882dc789c8dbb95a286d94898f9d6e"
  },
  {
    "url": "assets/js/24.d58de7f6.js",
    "revision": "8a60d24d216f92d35b0eddd4fc17baaa"
  },
  {
    "url": "assets/js/25.e5fc64e6.js",
    "revision": "8f0054fafbe8666451cabfa556334a9c"
  },
  {
    "url": "assets/js/26.f7d96fc2.js",
    "revision": "2c99d2d3b6d2ea9042f72e30a3026c88"
  },
  {
    "url": "assets/js/27.c1214559.js",
    "revision": "98a1c2b3d058409b652629db706c3d31"
  },
  {
    "url": "assets/js/28.46ea13bc.js",
    "revision": "a55c9a707facbb130d296bc009837662"
  },
  {
    "url": "assets/js/29.74fb8e40.js",
    "revision": "b26cb651a89ee4e8c5cfb97731af3ad2"
  },
  {
    "url": "assets/js/30.a7fac625.js",
    "revision": "c24300b14119d96d8782a941f9068a86"
  },
  {
    "url": "assets/js/31.40908987.js",
    "revision": "73201cad422ccf5c299fa3fdc56ea785"
  },
  {
    "url": "assets/js/32.729eae48.js",
    "revision": "186b4e6e770ea636de1aa5612245c38b"
  },
  {
    "url": "assets/js/33.3aae2eb9.js",
    "revision": "4902a2febc8bab97f1ebad1e6418acd6"
  },
  {
    "url": "assets/js/34.15ce5d1d.js",
    "revision": "e7defb481da997b4de0a0a39f56d9e92"
  },
  {
    "url": "assets/js/35.94f907a2.js",
    "revision": "6759ba1acfe7944e89152dfd5dfc8bca"
  },
  {
    "url": "assets/js/36.802fc9a1.js",
    "revision": "4ed6abe93427754786311ba2634a3b2b"
  },
  {
    "url": "assets/js/37.d2a35352.js",
    "revision": "bff1e9d8724d3b551febed5ea53fae8a"
  },
  {
    "url": "assets/js/38.748adb9f.js",
    "revision": "eb5ec6bcdae0c6ccf1430366bc62e2f1"
  },
  {
    "url": "assets/js/39.05bcaba4.js",
    "revision": "2edc2370a13adef9a7b7fd704679b67d"
  },
  {
    "url": "assets/js/40.b9bfdc39.js",
    "revision": "a9a68e1462bd7ae14d22dbb6888844a5"
  },
  {
    "url": "assets/js/41.9b741abd.js",
    "revision": "d772b557c40a6ff8a7fdb7f5ad7b9712"
  },
  {
    "url": "assets/js/42.9c6b5616.js",
    "revision": "c9eb11202c640308161542fe3179dbbe"
  },
  {
    "url": "assets/js/43.cfbc9876.js",
    "revision": "0f41407aabf6bf2d19c9810e10b6d000"
  },
  {
    "url": "assets/js/44.ae2778f6.js",
    "revision": "61dc00eec19aa009382832f31c5bc671"
  },
  {
    "url": "assets/js/45.b52148df.js",
    "revision": "4d8eaa21c4bcb814275a75c84d303876"
  },
  {
    "url": "assets/js/46.12a45eea.js",
    "revision": "45b9482a3fb689620d1a27a4aef44434"
  },
  {
    "url": "assets/js/47.5c50a129.js",
    "revision": "c46e40d7f52cf62883a1987a3a14b8b8"
  },
  {
    "url": "assets/js/48.7151b8a6.js",
    "revision": "c5aea13c73027c1ad0020bb167d95075"
  },
  {
    "url": "assets/js/49.0405dc1f.js",
    "revision": "d9f136d4f7d0323e8e2e2346de75a15a"
  },
  {
    "url": "assets/js/5.9c1513fd.js",
    "revision": "5935920901e811d92afce34b4790c62f"
  },
  {
    "url": "assets/js/50.11261fe7.js",
    "revision": "1413456e2013b7325cc92bd6cd058ae7"
  },
  {
    "url": "assets/js/51.5caeff4e.js",
    "revision": "98d3c1ee60e160bab45c1194513c7835"
  },
  {
    "url": "assets/js/52.048a9476.js",
    "revision": "919753b7c3dec95fbf14194431eda149"
  },
  {
    "url": "assets/js/53.f94203b3.js",
    "revision": "e9373797da6f9de61b3f9b5c39d0cea6"
  },
  {
    "url": "assets/js/54.3d9d272b.js",
    "revision": "63fc1f1a2e471b619b3ec223d1017146"
  },
  {
    "url": "assets/js/55.b376a384.js",
    "revision": "2d8446f51a901424d368da8b34a55227"
  },
  {
    "url": "assets/js/56.d3519764.js",
    "revision": "1f3417fd871d842686d52ccde79a9ff2"
  },
  {
    "url": "assets/js/57.2319ee15.js",
    "revision": "ce2e02b0f1e00daca6a8fcd60fd99862"
  },
  {
    "url": "assets/js/58.7eb08ec1.js",
    "revision": "419d985c62c1a3f0ccff9ebbabbe5228"
  },
  {
    "url": "assets/js/59.ece84265.js",
    "revision": "5dc7d6fe4f593387516e706710609bec"
  },
  {
    "url": "assets/js/6.33e46146.js",
    "revision": "ece951023ac463c099f290c590309895"
  },
  {
    "url": "assets/js/60.5d524e2e.js",
    "revision": "e30b93c6e9c3e3bf4ad2fc451a98f152"
  },
  {
    "url": "assets/js/61.6b5f70c9.js",
    "revision": "d2ab9783541695c2393fa78ff9577257"
  },
  {
    "url": "assets/js/62.e0a5e7a6.js",
    "revision": "add8fdee8fdbfcc933a7b5d42f0e0c42"
  },
  {
    "url": "assets/js/63.11b72ffa.js",
    "revision": "255c6d9b13695376dd8ca179c47d120f"
  },
  {
    "url": "assets/js/64.6dfd4a8b.js",
    "revision": "88194e57223265fd8325423d6749f857"
  },
  {
    "url": "assets/js/65.7eeea0bb.js",
    "revision": "e034a3cb712a52c83db54741d91daead"
  },
  {
    "url": "assets/js/66.64fb634e.js",
    "revision": "e2feeb57104c9cac60d8e964c3f52a1a"
  },
  {
    "url": "assets/js/67.a0df6f5e.js",
    "revision": "f612438a8526935c16407df71fa82c3b"
  },
  {
    "url": "assets/js/68.9f61f990.js",
    "revision": "cc9352d8b8bd008ab1b4d86c5f668fba"
  },
  {
    "url": "assets/js/69.a471d235.js",
    "revision": "943f478acbb8a57edfa3283cc023bd53"
  },
  {
    "url": "assets/js/7.a181359b.js",
    "revision": "e744bb5847e56e02297c0fec49388a9a"
  },
  {
    "url": "assets/js/70.2f6b4d93.js",
    "revision": "d6343919156c415f01b12973ba185270"
  },
  {
    "url": "assets/js/71.d1e349e7.js",
    "revision": "2a8ff13867eeb1fe67f3d2a27b3c21dc"
  },
  {
    "url": "assets/js/72.20c3c993.js",
    "revision": "761945108942da7c9d83986d7940d3b4"
  },
  {
    "url": "assets/js/73.965b4ddb.js",
    "revision": "77c654675728397450ed40cd6732a0e5"
  },
  {
    "url": "assets/js/74.eb1ff6a4.js",
    "revision": "24e69120f2af0026f91cb5249447b311"
  },
  {
    "url": "assets/js/75.fd418983.js",
    "revision": "769dd2c2b6668bd0e156c663b757611d"
  },
  {
    "url": "assets/js/76.df820c42.js",
    "revision": "68ac137b32ba10ceb402f53b22d57e15"
  },
  {
    "url": "assets/js/77.7753391b.js",
    "revision": "52ecd27b2cc6d4d7c078ebc37968a0c0"
  },
  {
    "url": "assets/js/78.840c38a0.js",
    "revision": "942b7e4dbc512d60a2a61260c08a3a15"
  },
  {
    "url": "assets/js/79.17909113.js",
    "revision": "e01a503505efd82fb3aede84ecdb8e62"
  },
  {
    "url": "assets/js/8.7f57b14a.js",
    "revision": "568dfc35d493235f94edbdd0de15a643"
  },
  {
    "url": "assets/js/80.fe3679ff.js",
    "revision": "ede2053a4fddcc7ce82436aaba209a53"
  },
  {
    "url": "assets/js/81.28705d94.js",
    "revision": "f305770807bea9f34caacbff71a017ba"
  },
  {
    "url": "assets/js/82.c33b6a1e.js",
    "revision": "ecfc9944a859c52f7c8da2bce4bd65ca"
  },
  {
    "url": "assets/js/83.a7667c43.js",
    "revision": "8f90c6fc45a2e15133888f2245646aff"
  },
  {
    "url": "assets/js/84.5b081427.js",
    "revision": "74cc9a3d194a77ec184aa1b92b0aeb06"
  },
  {
    "url": "assets/js/85.d1d57ea5.js",
    "revision": "218fb0ce9e9deac9906f2f86e0f5e1d0"
  },
  {
    "url": "assets/js/86.09c15a6a.js",
    "revision": "557ca8adf23c664c48fe13afdaaa2a52"
  },
  {
    "url": "assets/js/87.efbaa558.js",
    "revision": "12a37e58d395380e8d97521203004473"
  },
  {
    "url": "assets/js/88.3b26889a.js",
    "revision": "7069fc15309ea8aba931776d8f37ee64"
  },
  {
    "url": "assets/js/89.8e171527.js",
    "revision": "55e983789d5d95f92fff793836d8b8d7"
  },
  {
    "url": "assets/js/9.7f061a98.js",
    "revision": "d1bb633eeb390025bb1cb3624c4ab66c"
  },
  {
    "url": "assets/js/90.29005871.js",
    "revision": "ab3c30b5db023fb2a97cefe70543328e"
  },
  {
    "url": "assets/js/91.25c71437.js",
    "revision": "bf4daa10b7b6bb4f5e358895bbc8bbaa"
  },
  {
    "url": "assets/js/92.e2cebe1c.js",
    "revision": "2a756aebaf75c7bdc1bbe5b28eedec0a"
  },
  {
    "url": "assets/js/93.6c81f82f.js",
    "revision": "f0b9a8cb1618ad3078d64f370c42284e"
  },
  {
    "url": "assets/js/94.2e57395d.js",
    "revision": "1b06e42e69df581f206e3c2368a5c395"
  },
  {
    "url": "assets/js/95.8db429e4.js",
    "revision": "18c2018fd942eecd20c7762dc7559e3f"
  },
  {
    "url": "assets/js/96.b1470b0e.js",
    "revision": "0828b10c2cd9cf75c45ac0fb9d7261db"
  },
  {
    "url": "assets/js/97.89ffbbba.js",
    "revision": "62e2e8113e37bc63b6a3483afa872625"
  },
  {
    "url": "assets/js/98.45570a16.js",
    "revision": "985f6e7074478cac0b55a0f76408510b"
  },
  {
    "url": "assets/js/99.41c5e840.js",
    "revision": "ca79861b34bc57ccdd73494f79a3cdaf"
  },
  {
    "url": "assets/js/app.ffae6e0a.js",
    "revision": "b03cbbc11a312455544743e3ce1431fb"
  },
  {
    "url": "assets/js/vendors~docsearch.41fff005.js",
    "revision": "f4aa634c17702558519d8f32aaaa4aea"
  },
  {
    "url": "assets/js/vendors~flowchart.338aebc6.js",
    "revision": "f9a471336f158c934ae7e8f31542ba12"
  },
  {
    "url": "assets/js/vendors~notification.96ceaf0b.js",
    "revision": "2a1dafa8cf23250745518b474a26a948"
  },
  {
    "url": "config/index.html",
    "revision": "f2075597a5300019b84ba9a88c5c7963"
  },
  {
    "url": "faq/index.html",
    "revision": "a0a5b801dbf6d95b2c5a25cf0312332c"
  },
  {
    "url": "guide/assets.html",
    "revision": "fe4d407425a482d55d57d9b8e68fbf59"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "69b6d2e7b2d58252e299fb59aa83b819"
  },
  {
    "url": "guide/deploy.html",
    "revision": "588815d4b0a4ecf6d873dad3b6667a9e"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8fc23f141c61ef6619a2905720756d51"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d4098365bc84287f40a71a5ac68c34c8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d98ad3da4f3a81f21ff6b1021c2a1e70"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "c45231d470aaf3b40e25b07f2fce2729"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8e43f74d4dce09474a7aef8eaf0f5899"
  },
  {
    "url": "guide/index.html",
    "revision": "0c52e912ab4daf979448eb2f5c499bc3"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "9eb0ca5cca9dd41658b65fbe8c56d56c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "02efc8d21b4ac401f1a542acd034d0e8"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "23abf49ea3efedc6d3e19dd64a65d5d1"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "6b3fe318995efe7e2a07fee92408e852"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ead7098d3255d55df0e0e8ce85de03fc"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1e83111df0b3d2cc7f6036a6accc2823"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "e08c06e989da0c8df480c7d07878ca74"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "f73911ab466844ec80d27d7f57285038"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "dba547502269e7ecbf3253eace78570a"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "9a96585a865bc99a51ba62cd7236d506"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "ad5a23582624157ef20ea00b915ac321"
  },
  {
    "url": "plugin/index.html",
    "revision": "cf0a86e6aa5865fd12a413da3829404d"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "6a6b1a6251d2ac7286e29d2fb7d2cb14"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "428bcdcf99463ebfd9399ce8afb4360a"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "e1eeb65ab744c657236df1a0f3e0d127"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "2d453c590b6a2b279aee82c1005e0744"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "066669fff128c96b657964a5d623d031"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "04da3cfb51a74972bc8b6a91b75b01a3"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cbf139310ed5c48213f34eb2693c26b3"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "02826633ee7bfbd9678a81d0552c4ead"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "5ef14cd5f2fffe24410a84359bb7a3af"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "f27954df76cd1e9097985a969d673a64"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "19a7ca1d05cce3a064744810dbe25d48"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "cd0f8bd5fb8168b97432ec718e72ca13"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "8ceacd9d6c0ee10e51ef55bd44352ecc"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "74411004624632f15647e65952479e6a"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "d208e56d97ccaa55e57f824a4725d44c"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "c41166a819f3d9b6e6819a0b49154130"
  },
  {
    "url": "theme/index.html",
    "revision": "2b1bd9b764b5c4d49bc76e58f184a8a1"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "6b907ac36a7312d4696d07f759d9a35f"
  },
  {
    "url": "theme/option-api.html",
    "revision": "2e03df0cc719f8f46f9ad00510a9c332"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "820ccd1ac8b369693101c71eb1b52506"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "703c9f75b923e9460561c9f70fc6fb85"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "b02336a3dce7cbad9b415547b3133c79"
  },
  {
    "url": "zh/api/node.html",
    "revision": "8cc527dd80788f586cb076c216cae17d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "bc537f19d4906b5f9809bfbdba27ce37"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "c45bf32a4e6d76dd94a83167ec506d93"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "32564a5e26de7c9425d578bfb13c600c"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "5ccc1dcdb05b359e505064c6e84ddfae"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "fb312e4b38aa47bc02073a362ea5489a"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "501d69e775785c848f3944e3dc2e5ee2"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "30576d6170a67ae8157b02ee3a58c612"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9d7b14bfef5a5ad32f92c73d0c3ba8a5"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "04acc481f2a5daebf0c2909f8c815817"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "afd34e18efa46cd038d4a0d684a808a5"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "93f63d9cce82bd6a78336cace2df090b"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "4fc61765a730fd95a23befb4bb427aa3"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "715e91675763ec21a1db3b11144309e2"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "51d7a74a301588f5f16a8602ce9e8d33"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "cd1b67199751bd3c9eaad63b2b434224"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "501eb68fe591326050add8a758a3d398"
  },
  {
    "url": "zh/index.html",
    "revision": "5552852aed16a116aedd00550674b17f"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "6ca4a6329554c8e3ce986ac190a187fa"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "eb93282f1f3c5c9db58660a09823cd4f"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "f2e045e26cc9a84c3d5c20794b66f071"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "57e672ce6f2850e469f32f96c25bff61"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "b67feccf19f858b2c21b44a0b2b79f24"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9894449c4f8c8863477b74b840b8944a"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "f39349b4029bdfbd67e5cac6c886a8af"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "bf236a052080b0256d4a9b0b686eeea8"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "d6562f36c28cc1b995934f97a69f44b4"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "10da90194aad6b07ee618859fcab9877"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "70c087c97c276502551582b7d02c0342"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "c6d2846b09b2fc041dbf235fffe6552a"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "cd02a880db4871b43ee2a1eacde99b7f"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "42d4f97b3ccfcd0e02346f4c623dd68e"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "16e024b136ca0f066b03624fb89abf8e"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "f3ada8037872608cbd7afd798aaff153"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "37e2916a10f69f56679d3675e5bfb8f4"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "047a2905ca5a508c0443d6e7da2f9d3a"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "bc9e40494eddc514121ffc2688aa2705"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "1c936c9ad064332a1737bc19d1d7c0ee"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "87618591963a2411825f86dcc7ce9ec3"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "12f04c0df57380a7d3dceb47dfff7aed"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "9f5ebe066a4133ec456a8900698d3cb3"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "24669f43542db7bcd124dada86b3af30"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "d963b78585e1c8203aa2743c52b0fbbe"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "30cc921f8e5ecf0c7a5e26dad2cbb916"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "31d48c6eb247465b26a8de18a3a0c31a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
