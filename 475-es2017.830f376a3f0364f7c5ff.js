(self.webpackChunkangular_io_example=self.webpackChunkangular_io_example||[]).push([[475],{4475:function(e,t,o){"use strict";o.r(t),o.d(t,{OrdersModule:function(){return c}});var r=o(8583),n=o(5855),s=o(639);const l=[{path:"",component:(()=>{class e{constructor(e){this.router=e,this.showInstallButton=!1}ngOnInit(){console.log(":::::: in orders component :::::"),console.log(":::::: in ngAfterViewInit ::::::"),"/orders"===this.router.url&&(console.log(":::: in orders :::::"),this.deferredPrompt&&(console.log("Orders",this.router.url),this.deferredPrompt.preventDefault(),this.showInstallButton=!0))}onBeforeInstallPrompt(e){console.log(":::::; in beforeInstall"),this.deferredPrompt=e}installApp(){this.deferredPrompt.prompt(),this.showInstallButton=!1,this.deferredPrompt.userChoice.then(e=>{"accepted"===e.outcome?console.log("installation setup accepted"):console.log("installation setup rejected"),this.deferredPrompt=null})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(n.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-orders"]],hostBindings:function(e,t){1&e&&s.NdJ("beforeinstallprompt",function(e){return t.onBeforeInstallPrompt(e)},!1,s.Jf7)},decls:2,vars:0,template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1," orders works!\n"),s.qZA())},styles:[""]}),e})()}];let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.Bz.forChild(l)],n.Bz]}),e})(),c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,i]]}),e})()}}]);