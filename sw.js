if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const a=s=>l(s,r),u={module:{uri:r},exports:o,require:a};e[r]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(i(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"3bdad813f9d0facfc6a52a3dcfe5b93d"},{url:"assets/ArtifactIcon.b7e46397.js",revision:null},{url:"assets/BaseIcon.vue_vue_type_script_setup_true_lang.32323903.js",revision:null},{url:"assets/Blast2Icon.379f05bc.js",revision:null},{url:"assets/BoomerangIcon.db5cd45b.js",revision:null},{url:"assets/Burst1Icon.18a6731d.js",revision:null},{url:"assets/Burst2Icon.9b1b066f.js",revision:null},{url:"assets/CloseIcon.05cf71e6.js",revision:null},{url:"assets/DeflectIcon.184115a0.js",revision:null},{url:"assets/DiscardIcon.54d6ff37.js",revision:null},{url:"assets/DysonIcon.49c889b7.js",revision:null},{url:"assets/DysonRangeIcon.45e57134.js",revision:null},{url:"assets/DysonThrowIcon.65fb363e.js",revision:null},{url:"assets/EffortlessIcon.efbaa662.js",revision:null},{url:"assets/EffortlessReloadIcon.15b0c861.js",revision:null},{url:"assets/EventIcon.0dc76f26.js",revision:null},{url:"assets/ExplodeIcon.94410948.js",revision:null},{url:"assets/FadeToBlack3Icon.a9dc2308.js",revision:null},{url:"assets/FlipIcon.b609f4e5.js",revision:null},{url:"assets/FreeCloseIcon.dc7a2526.js",revision:null},{url:"assets/FreezeIcon.cb4a62d6.js",revision:null},{url:"assets/FullChargeIcon.7ed9b72c.js",revision:null},{url:"assets/GrenadeIcon.d1213ff8.js",revision:null},{url:"assets/HeavyIcon.294b9adc.js",revision:null},{url:"assets/InfiniteIcon.08778c66.js",revision:null},{url:"assets/InfraLensIcon.84bedd5d.js",revision:null},{url:"assets/KeyIcon.de05b55d.js",revision:null},{url:"assets/main.ae86477c.js",revision:null},{url:"assets/main.da6e47b6.css",revision:null},{url:"assets/Manipulate3Icon.4ba68b95.js",revision:null},{url:"assets/MechIcon.a8fd6afa.js",revision:null},{url:"assets/MineIcon.31d304d7.js",revision:null},{url:"assets/MoveIcon.2813576c.js",revision:null},{url:"assets/NaIcon.f7ba6737.js",revision:null},{url:"assets/NecroFlaskIcon.df9f2de7.js",revision:null},{url:"assets/PairsIcon.9a21fdbf.js",revision:null},{url:"assets/PhaseIcon.f22609e4.js",revision:null},{url:"assets/PhysicalArmourIcon.921880e7.js",revision:null},{url:"assets/RangeIcon.14abc3e2.js",revision:null},{url:"assets/RareIcon.7110c018.js",revision:null},{url:"assets/ReliableIcon.cd3ff6bb.js",revision:null},{url:"assets/RepairIcon.6bb0e2a2.js",revision:null},{url:"assets/ReRollIcon.775338a4.js",revision:null},{url:"assets/ScatterIcon.d2054319.js",revision:null},{url:"assets/ScrambleIcon.d9cb62a8.js",revision:null},{url:"assets/SearchIcon.4b120d56.js",revision:null},{url:"assets/ShieldArmourIcon.5800b919.js",revision:null},{url:"assets/SilentIcon.3d710f48.js",revision:null},{url:"assets/StimActionsIcon.add3f17c.js",revision:null},{url:"assets/StimHealIcon.0bba5fc1.js",revision:null},{url:"assets/StimHealPlusIcon.0ac7fac6.js",revision:null},{url:"assets/StimSkillPlusIcon.2fe6e965.js",revision:null},{url:"assets/SuperReliableIcon.df93686f.js",revision:null},{url:"assets/ThrowIcon.f937ebd2.js",revision:null},{url:"assets/TokenDetails.6be441f6.css",revision:null},{url:"assets/TokenDetails.b7832dda.js",revision:null},{url:"assets/TokenPage.2456ea3e.css",revision:null},{url:"assets/TokenPage.5e7500b7.js",revision:null},{url:"assets/TokensPage.4fead62b.css",revision:null},{url:"assets/TokensPage.580ad9ff.js",revision:null},{url:"assets/TrophyIcon.3352b61c.js",revision:null},{url:"index.html",revision:"3bdad813f9d0facfc6a52a3dcfe5b93d"},{url:"registerSW.js",revision:"3ac8fe5223dad1361b1a0ed876f53751"},{url:"favicon.ico",revision:"eefaf239196ae9f4d135a4ced2a7cfc9"},{url:"apple-touch-icon.png",revision:"31255ef9b9892e139c27ac058cdf16fb"},{url:"logo.svg",revision:"c20210e91cad9c12d1a863afea62cef2"},{url:"pwa-192x192.png",revision:"311d782c286bca2cf5b1d3d72b6ea628"},{url:"pwa-512x512.png",revision:"9a809f48a9ac0110240815f254633386"},{url:"manifest.webmanifest",revision:"58fcc237fc64e9e6c298731c0041b714"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
