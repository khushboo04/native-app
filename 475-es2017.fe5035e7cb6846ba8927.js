(self.webpackChunkangular_io_example=self.webpackChunkangular_io_example||[]).push([[475],{4475:function(t,n,e){"use strict";e.r(n),e.d(n,{OrdersModule:function(){return u}});var o=e(8583),r=e(5855),s=e(639);function l(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"button",1),s.NdJ("click",function(){return s.CHM(t),s.oxw().installApp()}),s.qZA()}}const c=[{path:"",component:(()=>{class t{constructor(t){this.router=t,this.showInstallButton=!1}ngOnInit(){console.log(":::::: in orders component &&&&")}onBeforeInstallPrompt(t){console.log(":::::; in beforeInstall"),this.deferredPrompt=t,t.preventDefault(),this.showInstallButton=!0}installApp(){this.deferredPrompt.prompt(),this.showInstallButton=!1,this.deferredPrompt.userChoice.then(t=>{"accepted"===t.outcome?console.log("installation setup accepted"):console.log("installation setup rejected"),this.deferredPrompt=null})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(r.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-orders"]],hostBindings:function(t,n){1&t&&s.NdJ("beforeinstallprompt",function(t){return n.onBeforeInstallPrompt(t)},!1,s.Jf7)},decls:3,vars:1,consts:[["id","install_button",3,"click",4,"ngIf"],["id","install_button",3,"click"]],template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1," orders works!\n"),s.qZA(),s.YNc(2,l,1,0,"button",0)),2&t&&(s.xp6(2),s.Q6J("ngIf",n.showInstallButton))},directives:[o.O5],styles:[""]}),t})()}];let i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(c)],r.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,i]]}),t})()}}]);