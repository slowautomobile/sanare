"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[49],{7049:(rt,F,d)=>{d.d(F,{$C:()=>D,$l:()=>u,El:()=>C,LG:()=>T,US:()=>O,qe:()=>M});var l=d(9975),t=d(8559),w=d(2102),U=d(3680),_=d(2814),E=d(4879),P=d(7699),I=d(316),p=d(4205),V=d(8537),G=d(3617),m=d(1567),y=d(271),B=d(7378),c=d(3900),W=d(1817),j=d(4334),S=d(3037),X=d(2575),h=d(7172);const g=["*"],z=["content"],K=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],L=["mat-drawer","mat-drawer-content","*"];function N(i,v){if(1&i){const e=t.RV6();t.j41(0,"div",1),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a._onBackdropClicked())}),t.k0s()}if(2&i){const e=t.XpG();t.AVh("mat-drawer-shown",e._isShowingBackdrop())}}function Q(i,v){1&i&&(t.j41(0,"mat-drawer-content"),t.SdG(1,2),t.k0s())}const H=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Z=["mat-sidenav","mat-sidenav-content","*"];function $(i,v){if(1&i){const e=t.RV6();t.j41(0,"div",1),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a._onBackdropClicked())}),t.k0s()}if(2&i){const e=t.XpG();t.AVh("mat-drawer-shown",e._isShowingBackdrop())}}function J(i,v){1&i&&(t.j41(0,"mat-sidenav-content"),t.SdG(1,2),t.k0s())}const A={transformDrawer:(0,h.hZ)("transform",[(0,h.wk)("open, open-instant",(0,h.iF)({transform:"none",visibility:"visible"})),(0,h.wk)("void",(0,h.iF)({"box-shadow":"none",visibility:"hidden"})),(0,h.kY)("void => open-instant",(0,h.i0)("0ms")),(0,h.kY)("void <=> open, open-instant => void",(0,h.i0)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},q=new t.nKC("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function tt(){return!1}}),b=new t.nKC("MAT_DRAWER_CONTAINER");let u=(()=>{class i extends l.uv{constructor(e,r,a,o,s){super(a,o,s),this._changeDetectorRef=e,this._container=r}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(t.gRc),t.rXU((0,t.Rfq)(()=>D)),t.rXU(t.aKT),t.rXU(l.R),t.rXU(t.SKi))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(r,a){2&r&&t.xc7("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px")},standalone:!0,features:[t.Jv_([{provide:l.uv,useExisting:i}]),t.Vt3,t.aNF],ngContentSelectors:g,decls:1,vars:0,template:function(r,a){1&r&&(t.NAR(),t.SdG(0))},encapsulation:2,changeDetection:0})}}return i})(),M=(()=>{class i{get position(){return this._position}set position(e){(e="end"===e?"end":"start")!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=(0,_.he)(e)}get autoFocus(){return this._autoFocus??("side"===this.mode?"dialog":"first-tabbable")}set autoFocus(e){("true"===e||"false"===e||null==e)&&(e=(0,_.he)(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle((0,_.he)(e))}constructor(e,r,a,o,s,k,x,et){this._elementRef=e,this._focusTrapFactory=r,this._focusMonitor=a,this._platform=o,this._ngZone=s,this._interactivityChecker=k,this._doc=x,this._container=et,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new p.B,this._animationEnd=new p.B,this._animationState="void",this.openedChange=new t.bkB(!0),this._openedStream=this.openedChange.pipe((0,m.p)(n=>n),(0,y.T)(()=>{})),this.openedStart=this._animationStarted.pipe((0,m.p)(n=>n.fromState!==n.toState&&0===n.toState.indexOf("open")),(0,B.u)(void 0)),this._closedStream=this.openedChange.pipe((0,m.p)(n=>!n),(0,y.T)(()=>{})),this.closedStart=this._animationStarted.pipe((0,m.p)(n=>n.fromState!==n.toState&&"void"===n.toState),(0,B.u)(void 0)),this._destroyed=new p.B,this.onPositionChanged=new t.bkB,this._modeChanged=new p.B,this._injector=(0,t.WQX)(t.zZn),this._changeDetectorRef=(0,t.WQX)(t.gRc),this.openedChange.pipe((0,c.Q)(this._destroyed)).subscribe(n=>{n?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{(0,V.R)(this._elementRef.nativeElement,"keydown").pipe((0,m.p)(n=>n.keyCode===E._f&&!this.disableClose&&!(0,E.rp)(n)),(0,c.Q)(this._destroyed)).subscribe(n=>this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()}))}),this._animationEnd.pipe((0,W.F)((n,f)=>n.fromState===f.fromState&&n.toState===f.toState)).subscribe(n=>{const{fromState:f,toState:R}=n;(0===R.indexOf("open")&&"void"===f||"void"===R&&0===f.indexOf("open"))&&this.openedChange.emit(this._opened)})}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const a=()=>{e.removeEventListener("blur",a),e.removeEventListener("mousedown",a),e.removeAttribute("tabindex")};e.addEventListener("blur",a),e.addEventListener("mousedown",a)})),e.focus(r)}_focusByCssSelector(e,r){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,r)}_takeFocus(){if(!this._focusTrap)return;const e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":(0,t.mal)(()=>{!this._focusTrap.focusInitialElement()&&"function"==typeof e.focus&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){"dialog"!==this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){const e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,"end"===this._position&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,r){e&&r&&(this._openedVia=r);const a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,r,a){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",r&&this._restoreFocus(a)),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe((0,j.s)(1)).subscribe(s=>o(s?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;const r=this._elementRef.nativeElement,a=r.parentNode;"end"===e?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,r)),a.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(t.aKT),t.rXU(w.GX),t.rXU(w.FN),t.rXU(P.OD),t.rXU(t.SKi),t.rXU(w.Z7),t.rXU(I.qQ,8),t.rXU(b,8))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-drawer"]],viewQuery:function(r,a){if(1&r&&t.GBs(z,5),2&r){let o;t.mGM(o=t.lsd())&&(a._content=o.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(r,a){1&r&&t.Kam("@transform.start",function(s){return a._animationStarted.next(s)})("@transform.done",function(s){return a._animationEnd.next(s)}),2&r&&(t.zvX("@transform",a._animationState),t.BMQ("align",null),t.AVh("mat-drawer-end","end"===a.position)("mat-drawer-over","over"===a.mode)("mat-drawer-push","push"===a.mode)("mat-drawer-side","side"===a.mode)("mat-drawer-opened",a.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[t.aNF],ngContentSelectors:g,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,a){1&r&&(t.NAR(),t.j41(0,"div",1,0),t.SdG(2),t.k0s())},dependencies:[l.uv],encapsulation:2,data:{animation:[A.transformDrawer]},changeDetection:0})}}return i})(),D=(()=>{class i{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=(0,_.he)(e)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=null==e?null:(0,_.he)(e)}get scrollable(){return this._userContent||this._content}constructor(e,r,a,o,s,k=!1,x){this._dir=e,this._element=r,this._ngZone=a,this._changeDetectorRef=o,this._animationMode=x,this._drawers=new t.rOR,this.backdropClick=new t.bkB,this._destroyed=new p.B,this._doCheckSubject=new p.B,this._contentMargins={left:null,right:null},this._contentMarginChanges=new p.B,this._injector=(0,t.WQX)(t.zZn),e&&e.change.pipe((0,c.Q)(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),s.change().pipe((0,c.Q)(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=k}ngAfterContentInit(){this._allDrawers.changes.pipe((0,S.Z)(this._allDrawers),(0,c.Q)(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe((0,S.Z)(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe((0,X.B)(10),(0,c.Q)(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,r=0;if(this._left&&this._left.opened)if("side"==this._left.mode)e+=this._left._getWidth();else if("push"==this._left.mode){const a=this._left._getWidth();e+=a,r-=a}if(this._right&&this._right.opened)if("side"==this._right.mode)r+=this._right._getWidth();else if("push"==this._right.mode){const a=this._right._getWidth();r+=a,e-=a}e=e||null,r=r||null,(e!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:e,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe((0,m.p)(r=>r.fromState!==r.toState),(0,c.Q)(this._drawers.changes)).subscribe(r=>{"open-instant"!==r.toState&&"NoopAnimations"!==this._animationMode&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),"side"!==e.mode&&e.openedChange.pipe((0,c.Q)(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe((0,c.Q)(this._drawers.changes)).subscribe(()=>{(0,t.mal)(()=>{this._validateDrawers()},{injector:this._injector,phase:t.wjH.Read})})}_watchDrawerMode(e){e&&e._modeChanged.pipe((0,c.Q)((0,G.h)(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){const r=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?r.add(a):r.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{"end"==e.position?this._end=e:this._start=e}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return null!=e&&e.opened}_drawerHasBackdrop(e){return null==this._backdropOverride?!!e&&"side"!==e.mode:this._backdropOverride}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(U.dS,8),t.rXU(t.aKT),t.rXU(t.SKi),t.rXU(t.gRc),t.rXU(l.Xj),t.rXU(q),t.rXU(t.bc$,8))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(r,a,o){if(1&r&&(t.wni(o,u,5),t.wni(o,M,5)),2&r){let s;t.mGM(s=t.lsd())&&(a._content=s.first),t.mGM(s=t.lsd())&&(a._allDrawers=s)}},viewQuery:function(r,a){if(1&r&&t.GBs(u,5),2&r){let o;t.mGM(o=t.lsd())&&(a._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,a){2&r&&t.AVh("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[t.Jv_([{provide:b,useExisting:i}]),t.aNF],ngContentSelectors:L,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,a){1&r&&(t.NAR(K),t.DNE(0,N,1,2,"div",0),t.SdG(1),t.SdG(2,1),t.DNE(3,Q,2,0,"mat-drawer-content")),2&r&&(t.vxM(a.hasBackdrop?0:-1),t.R7$(3),t.vxM(a._content?-1:3))},dependencies:[u],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0})}}return i})(),C=(()=>{class i extends u{constructor(e,r,a,o,s){super(e,r,a,o,s)}static{this.\u0275fac=function(r){return new(r||i)(t.rXU(t.gRc),t.rXU((0,t.Rfq)(()=>O)),t.rXU(t.aKT),t.rXU(l.R),t.rXU(t.SKi))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(r,a){2&r&&t.xc7("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px")},standalone:!0,features:[t.Jv_([{provide:l.uv,useExisting:i}]),t.Vt3,t.aNF],ngContentSelectors:g,decls:1,vars:0,template:function(r,a){1&r&&(t.NAR(),t.SdG(0))},encapsulation:2,changeDetection:0})}}return i})(),T=(()=>{class i extends M{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=(0,_.he)(e)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=(0,_.OE)(e)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=(0,_.OE)(e)}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=t.xGo(i)))(a||i)}})()}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(r,a){2&r&&(t.BMQ("align",null),t.xc7("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),t.AVh("mat-drawer-end","end"===a.position)("mat-drawer-over","over"===a.mode)("mat-drawer-push","push"===a.mode)("mat-drawer-side","side"===a.mode)("mat-drawer-opened",a.opened)("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],standalone:!0,features:[t.Vt3,t.aNF],ngContentSelectors:g,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,a){1&r&&(t.NAR(),t.j41(0,"div",1,0),t.SdG(2),t.k0s())},dependencies:[l.uv],encapsulation:2,data:{animation:[A.transformDrawer]},changeDetection:0})}}return i})(),O=(()=>{class i extends D{constructor(){super(...arguments),this._allDrawers=void 0,this._content=void 0}static{this.\u0275fac=(()=>{let e;return function(a){return(e||(e=t.xGo(i)))(a||i)}})()}static{this.\u0275cmp=t.VBU({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(r,a,o){if(1&r&&(t.wni(o,C,5),t.wni(o,T,5)),2&r){let s;t.mGM(s=t.lsd())&&(a._content=s.first),t.mGM(s=t.lsd())&&(a._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,a){2&r&&t.AVh("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],standalone:!0,features:[t.Jv_([{provide:b,useExisting:i}]),t.Vt3,t.aNF],ngContentSelectors:Z,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,a){1&r&&(t.NAR(H),t.DNE(0,$,1,2,"div",0),t.SdG(1),t.SdG(2,1),t.DNE(3,J,2,0,"mat-sidenav-content")),2&r&&(t.vxM(a.hasBackdrop?0:-1),t.R7$(3),t.vxM(a._content?-1:3))},dependencies:[C],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0})}}return i})()}}]);
//# sourceMappingURL=49.fc29d93cbfad0115.js.map