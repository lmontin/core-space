if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>l(s,i),a={module:{uri:i},exports:o,require:u};e[i]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"e3f00159b34586795a90acd5405dfe0a"},{url:"assets/Action2Icon.850c5bf5.js",revision:null},{url:"assets/Ammo7Icon.a3147156.js",revision:null},{url:"assets/AmmoBoxIcon.76b2bf7e.js",revision:null},{url:"assets/AmmoD6Icon.8abd41a6.js",revision:null},{url:"assets/AmmoIcon.e0152304.js",revision:null},{url:"assets/AmmoReturnsIcon.6a35d491.js",revision:null},{url:"assets/ArtifactIcon.a345da53.js",revision:null},{url:"assets/AutoCloseHitIcon.aafa97a3.js",revision:null},{url:"assets/BackButton.vue_vue_type_script_setup_true_lang.9363c02a.js",revision:null},{url:"assets/BackpackAllIcon.c56a42b6.js",revision:null},{url:"assets/BackpackNanoIcon.75ec078d.js",revision:null},{url:"assets/BaseIcon.vue_vue_type_script_setup_true_lang.572532a2.js",revision:null},{url:"assets/BeltIcon.bdce874b.js",revision:null},{url:"assets/Blast2Icon.0ab9d190.js",revision:null},{url:"assets/BlueArmourIcon.39415d7f.js",revision:null},{url:"assets/BlueArmourRegenIcon.7211eba5.js",revision:null},{url:"assets/BombIcon.4347b3f8.js",revision:null},{url:"assets/BoomerangIcon.6f35ef48.js",revision:null},{url:"assets/BreachIcon.ec28189d.js",revision:null},{url:"assets/Burst1Icon.23d36239.js",revision:null},{url:"assets/Burst2Icon.28b34364.js",revision:null},{url:"assets/BurstIcon.feab7efb.js",revision:null},{url:"assets/CannotReloadIcon.1c0a5633.js",revision:null},{url:"assets/CloseIcon.f7517090.js",revision:null},{url:"assets/DangerousIcon.bec745c4.js",revision:null},{url:"assets/DataIcon.fdb8a9ce.js",revision:null},{url:"assets/DeflectIcon.b8831f2a.js",revision:null},{url:"assets/DiscardIcon.4cd44279.js",revision:null},{url:"assets/DysonIcon.fa734359.js",revision:null},{url:"assets/DysonRangeIcon.edc6ff98.js",revision:null},{url:"assets/DysonThrowIcon.4afed169.js",revision:null},{url:"assets/EffortlessArmourIcon.ae931686.js",revision:null},{url:"assets/EffortlessIcon.36882834.js",revision:null},{url:"assets/EffortlessReloadIcon.44e20916.js",revision:null},{url:"assets/EventIcon.833a9ab6.js",revision:null},{url:"assets/ExplodeIcon.a581cf21.js",revision:null},{url:"assets/FadeToBlack3Icon.3608f472.js",revision:null},{url:"assets/FearIcon.29a9bbe3.js",revision:null},{url:"assets/FfIcon.ecd4df1d.js",revision:null},{url:"assets/FireIcon.51495d3b.js",revision:null},{url:"assets/FlashIcon.ae832e52.js",revision:null},{url:"assets/FlipIcon.c7ffd1bb.js",revision:null},{url:"assets/FreeCloseIcon.34bbd9ad.js",revision:null},{url:"assets/FreezeIcon.566b8710.js",revision:null},{url:"assets/FuelIcon.973bb43f.js",revision:null},{url:"assets/FullChargeIcon.7e0c0ce7.js",revision:null},{url:"assets/GearIcon.2a451b36.js",revision:null},{url:"assets/GrenadeIcon.887e6754.js",revision:null},{url:"assets/GrenadeLauncherIcon.2bd68624.js",revision:null},{url:"assets/Heal2Icon.a05ab847.js",revision:null},{url:"assets/HeavyIcon.b892f144.js",revision:null},{url:"assets/HoverIcon.30515449.js",revision:null},{url:"assets/IgnoreArmourIcon.8a757a4c.js",revision:null},{url:"assets/IgnoreKnowledgeIcon.ad6f62c8.js",revision:null},{url:"assets/IgnoreShieldIcon.86b835f1.js",revision:null},{url:"assets/Impervious1Icon.7acac75a.js",revision:null},{url:"assets/index.ba6f5fee.js",revision:null},{url:"assets/InfiniteIcon.65858a4c.js",revision:null},{url:"assets/InfraLensIcon.733499ba.js",revision:null},{url:"assets/InterruptIcon.ca1e4c28.js",revision:null},{url:"assets/JamIcon.73ed525b.js",revision:null},{url:"assets/KeyIcon.038facd2.js",revision:null},{url:"assets/main.512d8d9e.css",revision:null},{url:"assets/main.c6eecde3.js",revision:null},{url:"assets/Manipulate3Icon.dbafbf7e.js",revision:null},{url:"assets/MechIcon.91ce333f.js",revision:null},{url:"assets/MineIcon.0b832f61.js",revision:null},{url:"assets/MissionKeyIcon.c3367aaf.js",revision:null},{url:"assets/MoveIcon.3ade80f2.js",revision:null},{url:"assets/NaIcon.64ac0773.js",revision:null},{url:"assets/NecroFlaskIcon.f580285f.js",revision:null},{url:"assets/notFound.fc3cc18d.js",revision:null},{url:"assets/ObjectiveIcon.c282ad44.js",revision:null},{url:"assets/PairsIcon.2772b424.js",revision:null},{url:"assets/PhaseIcon.429f6225.js",revision:null},{url:"assets/PhysicalArmourIcon.43104371.js",revision:null},{url:"assets/RangeIcon.71687ae3.js",revision:null},{url:"assets/RareIcon.a866c68e.js",revision:null},{url:"assets/ReliableIcon.92373d77.js",revision:null},{url:"assets/Repair2Icon.07622290.js",revision:null},{url:"assets/RepairIcon.96746dcd.js",revision:null},{url:"assets/ReRollIcon.16c91128.js",revision:null},{url:"assets/ReRollRangedIcon.50f6ea1d.js",revision:null},{url:"assets/ScatterIcon.84a17975.js",revision:null},{url:"assets/ScrambleIcon.c41981cb.js",revision:null},{url:"assets/ScytheIcon.d86ecf06.js",revision:null},{url:"assets/SearchIcon.09a1862a.js",revision:null},{url:"assets/SettingsPage.8c1abc2e.css",revision:null},{url:"assets/SettingsPage.e079a9e2.js",revision:null},{url:"assets/ShieldArmourIcon.a9f28ca2.js",revision:null},{url:"assets/SilentIcon.d2187dd7.js",revision:null},{url:"assets/SpecialArmourIcon.1a8c1cf1.js",revision:null},{url:"assets/StimCombatIcon.3de4feab.js",revision:null},{url:"assets/StimHealIcon.021d4c85.js",revision:null},{url:"assets/StimHealPlusIcon.b73697ae.js",revision:null},{url:"assets/StimSkillIcon.ec6dac3c.js",revision:null},{url:"assets/StimSkillPlusIcon.b9e6d0cf.js",revision:null},{url:"assets/SuperAmmoIcon.6a563812.js",revision:null},{url:"assets/SuperReliableIcon.d9b4ab3c.js",revision:null},{url:"assets/SupplyDropIcon.93adbaf6.js",revision:null},{url:"assets/SustainedFireIcon.bd428abb.js",revision:null},{url:"assets/SwapIcon.b2820f33.js",revision:null},{url:"assets/TargetLockIcon.5c8d9f21.js",revision:null},{url:"assets/TempArmourIcon.1df58e91.js",revision:null},{url:"assets/ThrowIcon.be46cc4b.js",revision:null},{url:"assets/TimePulseIcon.c6834641.js",revision:null},{url:"assets/TimewarpIcon.31590b3c.js",revision:null},{url:"assets/TokenDetails.adbd7a8f.js",revision:null},{url:"assets/TokenDetails.ed786d46.css",revision:null},{url:"assets/TokenPage.2456ea3e.css",revision:null},{url:"assets/TokenPage.a9beb9c2.js",revision:null},{url:"assets/TokensPage.c35bbfbb.js",revision:null},{url:"assets/TokensPage.f2a849fe.css",revision:null},{url:"assets/ToxicIcon.5f71ba57.js",revision:null},{url:"assets/TripleChargeIcon.a9c064d1.js",revision:null},{url:"assets/TrophyIcon.fa0ac0f2.js",revision:null},{url:"assets/TrueBornIcon.6a0bd026.js",revision:null},{url:"assets/WeaponMountIcon.6dfa9e39.js",revision:null},{url:"index.html",revision:"e3f00159b34586795a90acd5405dfe0a"},{url:"registerSW.js",revision:"3ac8fe5223dad1361b1a0ed876f53751"},{url:"favicon.ico",revision:"4570d517380ed45ead51e67d31601dcd"},{url:"apple-touch-icon.png",revision:"85cc02e5f0d0b2381ee5817608149ea6"},{url:"logo.svg",revision:"9e476a498687c54cf96ff2ddb276d894"},{url:"pwa-192x192.png",revision:"9cb3c5e6cc2a2e206670ce5191cfaba2"},{url:"pwa-512x512.png",revision:"71b2cb0b8f9464d2c90f62797fee9ca7"},{url:"manifest.webmanifest",revision:"edac96dc497f4993f0e43d4634fd4a48"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
