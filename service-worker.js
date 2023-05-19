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
    "revision": "36d60d8279e2bd49d2815302bf098ef9"
  },
  {
    "url": "api/cli.html",
    "revision": "78b10f8b0d8827e4b320f039fe8568cb"
  },
  {
    "url": "api/node.html",
    "revision": "352f0ad2739bb5eb621b87644c43973b"
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
    "url": "assets/js/92.f0b5d478.js",
    "revision": "8f8232127da5ac2b1865e5ef589db86c"
  },
  {
    "url": "assets/js/93.dae30fc1.js",
    "revision": "ec421b863e60f2c624219e48d2fb6140"
  },
  {
    "url": "assets/js/94.eaee40b5.js",
    "revision": "157ad683aacdc8a075c8e7a5d74c45f8"
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
    "url": "assets/js/app.e4bc5737.js",
    "revision": "8ea8503d32367a3ac9d913085b6a7879"
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
    "revision": "8f2a37b69778eae7f104b23d1792f1e8"
  },
  {
    "url": "faq/index.html",
    "revision": "49e66918424388bcca56894d9a944009"
  },
  {
    "url": "guide/assets.html",
    "revision": "fa5dd3b2c83d85c073c2eb588644f124"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "80bf502101b758b1280aacec3d6b30e1"
  },
  {
    "url": "guide/deploy.html",
    "revision": "0612593d612d98dc5e78a8e638088951"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "e3579fc62155bd512ca0b7c51ebe46f1"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "acdad813956ec2cd59fff09f68dfbc88"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "810fca3624eb635723b0f7e89b9473e8"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "d14696d58d9c4489127acde9e5b3e567"
  },
  {
    "url": "guide/i18n.html",
    "revision": "0b4d8c0baff1472dbb07f65b42e62bfa"
  },
  {
    "url": "guide/index.html",
    "revision": "a043d1eb3aa3c5b33b0999f7b1ef9b14"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "97db239131bbbd41e2159ed905066ba7"
  },
  {
    "url": "guide/markdown.html",
    "revision": "af978094b880e938b2dcfabdee2cdd4d"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "78e7a73b6c0f2c86ff39d52a683a57c9"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "970fbc2bdbfc4316b87b53120e170c4d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e8056679ed90461fc21dc84ceeb10cc7"
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
    "revision": "f66858e1e6ba4feabf976e758fcdb884"
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
    "revision": "c6c7c1d56d44af022709414d16c3fdac"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "8ea9e80bac9e40d79d1590baf6b50e75"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "605f68d54acfdccab751e6bf5e361d86"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "389374f29b650788c158b2ff51daee60"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "a57a5302fa5700e92c03849bfd13aac6"
  },
  {
    "url": "plugin/index.html",
    "revision": "ec3ddc0eb639433814e50d58008f39d6"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "66e6a088a9cbc1ee3a40cbdf421380c6"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "0a92ad10353be9b1a176cd0b14c5d6e2"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "6f2577abf18889b83a3c7aa3b90c5622"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "4e4246fb0f0703b1ec2c06e0464fb781"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "285388c03280f5df24dd23c49e762ee1"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "29e4f52513d10020b7d8aef9c6c83afb"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "8a0099dd7f0af810b6a7c73abcfbb536"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "1817ea758eea2100af678b88e7723fee"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "fc7ef58bc7a964713cd8ec0167dbd1b6"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c8d55b3ba7253d443d6eb30e5a7c633b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "322886b3bcccd0f48538aba362e36d63"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f9aa971a4654b51ec6148b773a634514"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "9aaa31cdf49060cd038b7c2465155aa0"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "b13a2b7fd1969e9e5de5db84d76373dc"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "95189982382f3223ed4920c98cddaaa0"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "02370428c07db08f439de1d3a46bb3ea"
  },
  {
    "url": "theme/index.html",
    "revision": "f9ba3b0f23dcce613ed1d695ab25476d"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "35bdd8a67d93b9f2543a07955063f7c8"
  },
  {
    "url": "theme/option-api.html",
    "revision": "b6a47887c275c1493d81e0f6ef833d32"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "34024a3c1cea7caa623a46c23274bff5"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "139ac62cbe2ae427e2890d862b20f521"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "f7a2d0dfbf0e392de27c789d8bce24bf"
  },
  {
    "url": "zh/api/node.html",
    "revision": "0c3ccef0cebdd23b7217ab485d812c7c"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0510d065060eb1d81c887e244a85f1d1"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "72b62208bb9b9e2c0cfe891019308820"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "d5d1dc39c1911dc05c668ecd719d34e4"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "3323216bd6487cb09f2bf6f20a7dd140"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "6a12399a51d5e22d6bbd3b5aae12f89a"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "b5a794700220a572a1cff33704d1c98d"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "82bb02528c11d0c09219c36ee960f9f1"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8a4f47b3c133fbee86f66502fdc130cc"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "0726552fd491e0394da7bbd8f899a80c"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "7e0e814a15d004b9544cee9a27216c48"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "3153480c1ec828dfb958ced04cab48ab"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "49a77054b8961976036eaec563a7f71c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "20191cca13564487c6ef0d30ddc79178"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "3dd9ccc9987e1b6a1d67f7199958ec79"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "1d355f6c9b26de0ec25a4b1711db4365"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "c116a409df3cb4b88b738ed6ea505522"
  },
  {
    "url": "zh/index.html",
    "revision": "81020b5c73012a898ff1c61e6540edc5"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "532a9dc71932f09448fc86d919658227"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "98326e53f6260667286b094a96a8abe5"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "1250316ec120c01df8720f97622d6ee8"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "08220383ef8f10455eedaf4c8a6f9804"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "63739575ad7f4d8fa21520010156aca7"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "263b59ab8802625646f93d7802c57a3a"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "a98e3b60a9249bd4f85666eeaf39eaf6"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "86f217c9e7f3c9bf9ef13fcd2ee360b7"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "05c8ff584e02462cb4d641feb4dcf97f"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "716974f9212acd47f8beec7d1213909c"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "a6ccb07452e0553c57080f716679c192"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "82776fc41a5e9d79aca855be001f6728"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "bd0c655cdd12ff454e8fe8daee50f89b"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "6a11efb4f0163f28666cddadd95ba077"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "0b3ce697498c87f171298f8f5578a961"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "7a4be042450860ce3aa7fca5ef8210c4"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "aa6b85e7594ed2d5e0f55d509b66feab"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "1ea6e17f9a28157282162388f41f65df"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "93fd24dd66c067f5423f5815bece62c9"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "d24250e681fafa9fdd37a8dc031fdac4"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "eea10b21d1bfafb39e5c1b76a123eb17"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "a92a86fe64e065a441166f6bc39b6993"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "f83e85b2fdb82203b14a143c1ba3d739"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "21dc25ca72f13ddd2839d9bb58930aea"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "9d47f038e0f5ebedf86c1a0f027d9000"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "1224f11d9d73d4358155531ab1201af7"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "cb5a6534e3bbe39a4cffe7544062143b"
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
