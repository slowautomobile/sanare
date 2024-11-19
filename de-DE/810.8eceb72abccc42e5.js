"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[810],{7810:(X,d,l)=>{l.r(d),l.d(d,{ClientsProgressComponent:()=>B});var r=l(8559),g=l(316);function p(n,a){1&n&&r.nrm(0,"div",2)}const u=new r.nKC("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let C=(()=>{class n{constructor(e,t,i,s,o){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=i,this._animationMode=s,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new r.bkB,this._mode="determinate",this._transitionendHandler=c=>{0===this.animationEnd.observers.length||!c.target||!c.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===s,o&&(o.color&&(this.color=this._defaultColor=o.color),this.mode=o.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(e){this._color=e}get value(){return this._value}set value(e){this._value=_(e||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=_(e||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}static{this.\u0275fac=function(t){return new(t||n)(r.rXU(r.aKT),r.rXU(r.SKi),r.rXU(r.gRc),r.rXU(r.bc$,8),r.rXU(u,8))}}static{this.\u0275cmp=r.VBU({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,i){2&t&&(r.BMQ("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),r.HbH("mat-"+i.color),r.AVh("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",r.Udg],bufferValue:[2,"bufferValue","bufferValue",r.Udg],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[r.GFd,r.aNF],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,i){1&t&&(r.j41(0,"div",0),r.nrm(1,"div",1),r.DNE(2,p,1,0,"div",2),r.k0s(),r.j41(3,"div",3),r.nrm(4,"span",4),r.k0s(),r.j41(5,"div",5),r.nrm(6,"span",4),r.k0s()),2&t&&(r.R7$(),r.xc7("flex-basis",i._getBufferBarFlexBasis()),r.R7$(),r.vxM("buffer"===i.mode?2:-1),r.R7$(),r.xc7("transform",i._getPrimaryBarTransform()))},styles:[".mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}"],encapsulation:2,changeDetection:0})}}return n})();function _(n,a=0,e=100){return Math.max(a,Math.min(e,n))}var b=l(4102),h=l(640),E=l(4175),P=l(3840),m=l(943);const S=()=>({height:"78px"}),M=()=>({height:"64px"});function v(n,a){1&n&&(r.j41(0,"span",5),r.pXf(1,0),r.k0s())}function O(n,a){if(1&n&&(r.j41(0,"span",10),r.EFF(1),r.k0s()),2&n){const e=r.XpG().$implicit;r.R7$(),r.JRh(e.name)}}function R(n,a){if(1&n&&(r.j41(0,"span",11),r.nrm(1,"mat-progress-bar",13),r.j41(2,"span")(3,"span"),r.pXf(4,1),r.k0s(),r.j41(5,"span"),r.EFF(6),r.nI1(7,"date"),r.k0s()()()),2&n){const e=r.XpG().$implicit,t=r.XpG(2);r.Y8G("ngClass",t.isDashboard?"":"progress-margin"),r.R7$(),r.Y8G("ngClass",t.isDashboard?"dash-progress-width":"")("value",e.progress),r.R7$(5),r.SpI("",r.i5U(7,4,e.dateRange.end,"d MMM yyyy")," ")}}function T(n,a){if(1&n&&(r.j41(0,"span",11),r.nrm(1,"mat-progress-bar",14),r.j41(2,"span")(3,"span"),r.pXf(4,2),r.k0s(),r.j41(5,"span"),r.EFF(6),r.nI1(7,"date"),r.k0s()()()),2&n){const e=r.XpG().$implicit,t=r.XpG(2);r.Y8G("ngClass",t.isDashboard?"":"progress-margin"),r.R7$(),r.Y8G("ngClass",t.isDashboard?"dash-progress-width":"")("value",e.progress),r.R7$(5),r.SpI(" ",r.i5U(7,4,e.dateRange.end,"d MMM yyyy")," ")}}function y(n,a){if(1&n){const e=r.RV6();r.j41(0,"button",17),r.bIt("click",function(i){r.eBV(e);const s=r.XpG(2).$implicit,o=r.XpG(2);return i.stopPropagation(),r.Njj(o.viewClientProgram(s))}),r.j41(1,"mat-icon"),r.EFF(2,"visibility"),r.k0s()()}}function N(n,a){if(1&n){const e=r.RV6();r.j41(0,"button",18),r.bIt("click",function(i){r.eBV(e);const s=r.XpG(2).$implicit,o=r.XpG(2);return i.stopPropagation(),r.Njj(o.openEditClientProgram(s))}),r.j41(1,"mat-icon"),r.EFF(2,"edit"),r.k0s()()}}function I(n,a){if(1&n&&r.DNE(0,y,3,0,"button",15)(1,N,3,0,"button",16),2&n){const e=r.XpG().$index,t=r.XpG(2);r.vxM(t.isProgramCompleted[e]?0:1)}}function L(n,a){if(1&n&&(r.j41(0,"div",6)(1,"mat-list-item",7)(2,"mat-icon",8),r.EFF(3),r.k0s(),r.j41(4,"span",9),r.EFF(5),r.k0s(),r.DNE(6,O,2,1,"span",10)(7,R,8,7,"span",11)(8,T,8,7,"span",11),r.nrm(9,"span",12),r.k0s(),r.DNE(10,I,2,1),r.k0s(),r.nrm(11,"mat-divider")),2&n){const e=a.$implicit,t=a.$index,i=r.XpG(2);r.R7$(),r.Y8G("ngStyle",i.isDashboard?r.lJ4(6,S):r.lJ4(7,M)),r.R7$(2),r.JRh(i.isDashboard?"account_circle":"description"),r.R7$(2),r.JRh(e.program?e.program.name:e.clientName),r.R7$(),r.vxM(i.isDashboard?6:-1),r.R7$(),r.vxM(i.isProgramCompleted[t]?7:8),r.R7$(3),r.vxM(i.isDashboard?10:-1)}}function x(n,a){if(1&n&&(r.DNE(0,v,2,0,"span",5),r.Z7z(1,L,12,8,null,null,r.fX1)),2&n){const e=r.XpG();r.vxM(e.isDashboard?-1:0),r.R7$(),r.Dyx(a)}}let B=(()=>{class n{constructor(){this.openEditClientProgramEvent=new r.bkB}openEditClientProgram(e){this.openEditClientProgramEvent.emit(e)}viewClientProgram(e){console.log(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=r.VBU({type:n,selectors:[["clients-progress"]],inputs:{programs$:"programs$",isProgramCompleted:"isProgramCompleted",isDashboard:"isDashboard"},outputs:{openEditClientProgramEvent:"openEditClientProgramEvent"},standalone:!0,features:[r.aNF],decls:4,vars:4,consts:()=>{let e,t,i,s,o;return e="Programme",t="Beendet: ",i="Endet: ",s="Bearbeiten",o="Bearbeiten-Symbolschaltfl\xE4che",[e,t,i,[1,"status-toggle"],[1,"program-list",3,"ngClass"],["mat-subheader","",1,"subheader-text","mat-body-large"],[1,"list-item-wrapper"],[1,"program-list-item",3,"ngStyle"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine","",1,"status-tooltip"],["matListItemLine","",1,"status-tooltip","progress-list-line",3,"ngClass"],["matListItemMeta","",1,"list-action-button"],["color","primary","mode","determinate",1,"progress-bar",3,"ngClass","value"],["color","accent","mode","determinate",1,"progress-bar",3,"ngClass","value"],["mat-icon-button","","matTooltip","View","aria-label","View icon button"],["mat-icon-button","","matTooltip",s,"aria-label",o],["mat-icon-button","","matTooltip","View","aria-label","View icon button",3,"click"],["mat-icon-button","","matTooltip",s,"aria-label",o,3,"click"]]},template:function(t,i){if(1&t&&(r.j41(0,"div",3)(1,"mat-list",4),r.DNE(2,x,3,1),r.nI1(3,"async"),r.k0s()()),2&t){let s;r.R7$(),r.Y8G("ngClass",i.isDashboard?"custom-height-background":""),r.R7$(),r.vxM((s=r.bMT(3,2,i.programs$))?2:-1,s)}},dependencies:[m.jt,g.YU,m.EI,m.YE,g.B3,P.An,m.ZV,m.yE,m.C_,C,m.BJ,E.iY,h.oV,b.q,g.Jj,g.vh],styles:[".status-toggle[_ngcontent-%COMP%]{display:flex;flex-direction:column}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]{padding-top:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .subheader-text[_ngcontent-%COMP%]{margin:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:12px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]{display:flex;align-items:center}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{margin-top:4px;display:inline-block;max-width:190px;margin-right:10px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]   .dash-progress-width[_ngcontent-%COMP%]{max-width:170px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .program-list-item[_ngcontent-%COMP%]   .mat-mdc-list-item-meta[_ngcontent-%COMP%]{margin-left:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .program-list-item[_ngcontent-%COMP%]   .list-action-button[_ngcontent-%COMP%]{align-self:center}"]})}}return n})()}}]);
//# sourceMappingURL=810.8eceb72abccc42e5.js.map