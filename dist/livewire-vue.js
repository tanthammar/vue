!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e=e||self).LivewireVue=i()}(this,(function(){"use strict";if(void 0===window.livewire)throw"Livewire Vue Plugin: window.livewire is undefined. Make sure @livewireScripts is placed above this script include";return function(){window.livewire.hook("beforeDomUpdate",(e,i)=>{if(!window.Vue)return;const n=document.createElement("div");n.innerHTML=i.html,(new window.Vue).$mount(n.firstElementChild),i.html=n.firstElementChild.outerHTML}),window.livewire.hook("elementInitialized",e=>{e.rawNode().__vue__&&(e.rawNode().__livewire_ignore=!0)}),window.livewire.hook("interceptWireModelSetValue",(e,i)=>{if(!e.rawNode().__vue__)return;const n=window.Vue.config.silent;window.Vue.config.silent=!0,e.rawNode().__vue__.$props.value=i,window.Vue.config.silent=n}),window.livewire.hook("interceptWireModelAttachListener",(e,i,n,o)=>{if(!e.rawNode().__vue__)return;const t=i.modifiers.includes("debounce"),r=i.modifiers.includes("lazy");e.rawNode().__vue__.$on("input",o(t||!r,e=>{const o=i.value,t=e;n.set(o,t)},i.durationOr(150)))})}}));
//# sourceMappingURL=livewire-vue.js.map