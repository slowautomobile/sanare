"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[847],{5847:(f,S,n)=>{n.r(S),n.d(S,{SettingsComponent:()=>M});var e=n(8559),r=n(4456),m=n(5541),u=n(5175),l=n(4950),T=n(8827),h=n(2572),E=n(6694),P=n(6100),d=n(7092),A=n(5060);function p(_,c){if(1&_&&(e.j41(0,"mat-option",13),e.EFF(1),e.k0s()),2&_){const a=c.$implicit;e.Y8G("value",a.code),e.R7$(),e.JRh(a.name)}}function C(_,c){1&_&&(e.j41(0,"mat-hint"),e.pXf(1,4),e.k0s())}let M=(()=>{class _{constructor(){this.router=(0,e.WQX)(h.Ix),this.themeManager=(0,e.WQX)(E.YP),this.localstorageService=(0,e.WQX)(P.ms),this.usersService=(0,e.WQX)(P.gs),this.userId=this.usersService.userId,this.selectValueChanged=!1,this.pageTitle="Einstellungen",this.isDarkSignal=this.themeManager.isDark,this.isDark=!1,this.subscriptions=new d.yU,this.languages=[{name:"English",code:"en-US"},{name:"Deutsch",code:"de-DE"},{name:"Srpski",code:"sr-RS"}]}ngOnInit(){this.isDark=this.isDarkSignal(),this.selectedLanguage=this._getUserLanguageToken(),console.log(this.selectedLanguage)}switchTheme(){this.themeManager.changeTheme(this.isDark?"dark":"light")}onSubmit(){this.selectValueChanged?this._setAndUpdateUserLanguageToken(this.selectedLanguage):this.router.navigateByUrl("/"),console.log(this.selectedLanguage)}onBack(){this.router.navigateByUrl("")}_getUserLanguageToken(){return this.localstorageService.getToken("userLanguage")||"en-US"}_setAndUpdateUserLanguageToken(a){this.localstorageService.setToken("userLanguage",a);const i=this.usersService.updateUserLanguage(this.userId(),{langCode:a}).subscribe(()=>{location.replace(`${window.location.origin}/sanare/${a}/`)});this.subscriptions.add(i)}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(i){return new(i||_)}}static{this.\u0275cmp=e.VBU({type:_,selectors:[["sanareapp-settings"]],standalone:!0,features:[e.aNF],decls:17,vars:6,consts:()=>{let a,i,t,g,s;return a="Benutzeroberfl\xE4che",i="Dunkler Modus",t="Spracheinstellungen",g="W\xE4hlen Sie Ihre Standardsprache",s="\xC4nderungen werden nach dem Speichern wirksam",[a,i,t,g,s,[3,"cancelEvent","submitEvent","pageTitle","cancelButton","submitButton"],[1,"settings-wrapper"],[1,"mat-title-large"],[1,"theme-toggle-wrapper"],["labelPosition","before",1,"mat-headline-small",3,"ngModelChange","change","ngModel"],[1,"language-wrapper"],["appearance","outline"],[3,"valueChange","value"],[3,"value"]]},template:function(i,t){1&i&&(e.j41(0,"ui-page-toolbar",5),e.bIt("cancelEvent",function(){return t.onBack()})("submitEvent",function(){return t.onSubmit()}),e.k0s(),e.j41(1,"div",6)(2,"h3",7),e.pXf(3,0),e.k0s(),e.j41(4,"div",8)(5,"mat-slide-toggle",9),e.mxI("ngModelChange",function(s){return e.DH7(t.isDark,s)||(t.isDark=s),s}),e.bIt("change",function(){return t.switchTheme()}),e.pXf(6,1),e.k0s()(),e.j41(7,"div",10)(8,"p"),e.pXf(9,2),e.k0s(),e.j41(10,"mat-form-field",11)(11,"mat-label"),e.pXf(12,3),e.k0s(),e.j41(13,"mat-select",12),e.mxI("valueChange",function(s){return e.DH7(t.selectedLanguage,s)||(t.selectedLanguage=s),s}),e.bIt("valueChange",function(){return t.selectValueChanged=!0}),e.Z7z(14,p,2,2,"mat-option",13,e.fX1),e.k0s(),e.DNE(16,C,2,0,"mat-hint"),e.k0s()()()),2&i&&(e.Y8G("pageTitle",t.pageTitle)("cancelButton",!0)("submitButton",!0),e.R7$(5),e.R50("ngModel",t.isDark),e.R7$(8),e.R50("value",t.selectedLanguage),e.R7$(),e.Dyx(t.languages),e.R7$(2),e.vxM(t.selectValueChanged?16:-1))},dependencies:[r.YN,r.BC,r.vS,m.fS,l.rl,l.nJ,l.MV,u.Ve,u.VO,A.wT,l.RG,T.mV,T.sG,E.YL],styles:[".mat-mdc-slide-toggle .mat-internal-form-field{width:100%}  .mdc-label{flex-grow:1;font-family:Inter,sans-serif;font-size:16px}.settings-wrapper[_ngcontent-%COMP%]{width:30vw;padding:32px 16px 16px}.settings-wrapper[_ngcontent-%COMP%]   .theme-toggle-wrapper[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%}.settings-wrapper[_ngcontent-%COMP%]   .language-wrapper[_ngcontent-%COMP%]{margin-top:16px}"]})}}return _})()}}]);
//# sourceMappingURL=847.f5f0399bff802411.js.map