"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[271],{271:(Dt,x,r)=>{r.r(x),r.d(x,{NavigationRailComponent:()=>Lt});var t=r(4438),tt=r(9327),b=r(8359),k=r(6354),G=r(4668),$=r(7660),T=r(7855),P=r(5245),N=r(177),et=r(3902),E=r(882),v=r(8617),d=r(7336),O=r(1413),y=r(7786),F=r(7673),V=r(5007),w=r(9172),X=r(5558),L=r(6977),R=r(5964),B=r(6697),H=r(1986),nt=r(6600),it=r(6939),c=r(9969),at=r(8203),I=r(6969),j=r(6860);const ot=["mat-menu-item",""],st=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],rt=["mat-icon, [matMenuItemIcon]","*"];function lt(a,m){1&a&&(t.qSk(),t.j41(0,"svg",2),t.nrm(1,"polygon",3),t.k0s())}const ct=["*"];function mt(a,m){if(1&a){const e=t.RV6();t.j41(0,"div",0),t.bIt("keydown",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o._handleKeydown(i))})("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.closed.emit("click"))})("@transformMenu.start",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o._onAnimationStart(i))})("@transformMenu.done",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o._onAnimationDone(i))}),t.j41(1,"div",1),t.SdG(2),t.k0s()()}if(2&a){const e=t.XpG();t.HbH(e._classList),t.Y8G("id",e.panelId)("@transformMenu",e._panelAnimationState),t.BMQ("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const D=new t.nKC("MAT_MENU_PANEL");let C=(()=>{class a{constructor(e,n,i,o,s){this._elementRef=e,this._document=n,this._focusMonitor=i,this._parentMenu=o,this._changeDetectorRef=s,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new O.B,this._focused=new O.B,this._highlighted=!1,this._triggersSubmenu=!1,o?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<n.length;i++)n[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static{this.\u0275fac=function(n){return new(n||a)(t.rXU(t.aKT),t.rXU(N.qQ),t.rXU(v.FN),t.rXU(D,8),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(n,i){1&n&&t.bIt("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),2&n&&(t.BMQ("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),t.AVh("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",t.L39],disableRipple:[2,"disableRipple","disableRipple",t.L39]},exportAs:["matMenuItem"],standalone:!0,features:[t.GFd,t.aNF],attrs:ot,ngContentSelectors:rt,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,i){1&n&&(t.NAR(st),t.SdG(0),t.j41(1,"span",0),t.SdG(2,1),t.k0s(),t.nrm(3,"div",1),t.DNE(4,lt,2,0,":svg:svg",2)),2&n&&(t.R7$(3),t.Y8G("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),t.R7$(),t.vxM(i._triggersSubmenu?4:-1))},dependencies:[nt.r6],encapsulation:2,changeDetection:0})}}return a})();const _t=new t.nKC("MatMenuContent"),S={transformMenu:(0,c.hZ)("transformMenu",[(0,c.wk)("void",(0,c.iF)({opacity:0,transform:"scale(0.8)"})),(0,c.kY)("void => enter",(0,c.i0)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,c.iF)({opacity:1,transform:"scale(1)"}))),(0,c.kY)("* => void",(0,c.i0)("100ms 25ms linear",(0,c.iF)({opacity:0})))]),fadeInItems:(0,c.hZ)("fadeInItems",[(0,c.wk)("showing",(0,c.iF)({opacity:1})),(0,c.kY)("void => *",[(0,c.iF)({opacity:0}),(0,c.i0)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let dt=0;const ut=new t.nKC("mat-menu-default-options",{providedIn:"root",factory:function gt(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let f=(()=>{class a{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){const n=this._previousPanelClass,i={...this._classList};n&&n.length&&n.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,n,i,o){this._elementRef=e,this._changeDetectorRef=o,this._elevationPrefix="mat-elevation-z",this._baseElevation=null,this._directDescendantItems=new t.rOR,this._classList={},this._panelAnimationState="void",this._animationDone=new O.B,this.closed=new t.bkB,this.close=this.closed,this.panelId="mat-menu-panel-"+dt++,this._injector=(0,t.WQX)(t.zZn),this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new v.Bu(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,w.Z)(this._directDescendantItems),(0,X.n)(e=>(0,y.h)(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const i=e.toArray(),o=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[o]&&!i[o].disabled?n.setActiveItem(o):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe((0,w.Z)(this._directDescendantItems),(0,X.n)(n=>(0,y.h)(...n.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const n=e.keyCode,i=this._keyManager;switch(n){case d._f:(0,d.rp)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case d.UQ:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case d.LE:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===d.i7||n===d.n6)&&i.setFocusOrigin("keyboard"),void i.onKeydown(e)}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=(0,t.mal)(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){if(null===this._baseElevation){const _=("function"==typeof getComputedStyle?getComputedStyle(this._elementRef.nativeElement):null)?.getPropertyValue("--mat-menu-base-elevation-level")||"8";this._baseElevation=parseInt(_)}const n=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${n}`,o=Object.keys(this._classList).find(s=>s.startsWith(this._elevationPrefix));if(!o||o===this._previousElevation){const s={...this._classList};this._previousElevation&&(s[this._previousElevation]=!1),s[i]=!0,this._previousElevation=i,this._classList=s}}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList={...this._classList,"mat-menu-before":"before"===e,"mat-menu-after":"after"===e,"mat-menu-above":"above"===n,"mat-menu-below":"below"===n},this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,w.Z)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static{this.\u0275fac=function(n){return new(n||a)(t.rXU(t.aKT),t.rXU(t.SKi),t.rXU(ut),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["mat-menu"]],contentQueries:function(n,i,o){if(1&n&&(t.wni(o,_t,5),t.wni(o,C,5),t.wni(o,C,4)),2&n){let s;t.mGM(s=t.lsd())&&(i.lazyContent=s.first),t.mGM(s=t.lsd())&&(i._allItems=s),t.mGM(s=t.lsd())&&(i.items=s)}},viewQuery:function(n,i){if(1&n&&t.GBs(t.C4Q,5),2&n){let o;t.mGM(o=t.lsd())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(n,i){2&n&&t.BMQ("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",t.L39],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>null==e?null:(0,t.L39)(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[t.Jv_([{provide:D,useExisting:a}]),t.GFd,t.aNF],ngContentSelectors:ct,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(n,i){1&n&&(t.NAR(),t.DNE(0,mt,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[S.transformMenu,S.fadeInItems]},changeDetection:0})}}return a})();const U=new t.nKC("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{const a=(0,t.WQX)(I.hJ);return()=>a.scrollStrategies.reposition()}}),z=(0,j.BQ)({passive:!0});let pt=(()=>{class a{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,n,i,o,s,_,u,g,h){this._overlay=e,this._element=n,this._viewContainerRef=i,this._menuItemInstance=_,this._dir=u,this._focusMonitor=g,this._ngZone=h,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=b.yU.EMPTY,this._hoverSubscription=b.yU.EMPTY,this._menuCloseSubscription=b.yU.EMPTY,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._handleTouchStart=p=>{(0,v.w6)(p)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new t.bkB,this.onMenuOpen=this.menuOpened,this.menuClosed=new t.bkB,this.onMenuClose=this.menuClosed,this._scrollStrategy=o,this._parentMaterialMenu=s instanceof f?s:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,z)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,z),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const e=this.menu;if(this._menuOpen||!e)return;const n=this._createOverlay(e),i=n.getConfig(),o=i.positionStrategy;this._setPosition(e,o),i.hasBackdrop=null==e.hasBackdrop?!this.triggersSubmenu():e.hasBackdrop,n.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof f&&(e._startAnimation(),e._directDescendantItems.changes.pipe((0,L.Q)(e.close)).subscribe(()=>{o.withLockedPosition(!1).reapplyLastPosition(),o.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof f?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,R.p)(i=>"void"===i.toState),(0,B.s)(1),(0,L.Q)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let n=0,i=e.parentMenu;for(;i;)n++,i=i.parentMenu;e.setElevation(n)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){const n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new I.rR({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(i=>{const o="start"===i.connectionPair.overlayX?"after":"before",s="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(o,s)):e.setPositionClasses(o,s)})}_setPosition(e,n){let[i,o]="before"===e.xPosition?["end","start"]:["start","end"],[s,_]="above"===e.yPosition?["bottom","top"]:["top","bottom"],[u,g]=[s,_],[h,p]=[i,o],A=0;if(this.triggersSubmenu()){if(p=i="before"===e.xPosition?"start":"end",o=h="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const M=this._parentMaterialMenu.items.first;this._parentInnerPadding=M?M._getHostElement().offsetTop:0}A="bottom"===s?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u="top"===s?"bottom":"top",g="top"===_?"bottom":"top");n.withPositions([{originX:i,originY:u,overlayX:h,overlayY:s,offsetY:A},{originX:o,originY:u,overlayX:p,overlayY:s,offsetY:A},{originX:i,originY:g,overlayX:h,overlayY:_,offsetY:-A},{originX:o,originY:g,overlayX:p,overlayY:_,offsetY:-A}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,F.of)(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,R.p)(s=>s!==this._menuItemInstance),(0,R.p)(()=>this._menuOpen)):(0,F.of)();return(0,y.h)(e,i,o,n)}_handleMousedown(e){(0,v._G)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const n=e.keyCode;(n===d.Fm||n===d.t6)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===d.LE&&"ltr"===this.dir||n===d.UQ&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,R.p)(e=>e===this._menuItemInstance&&!e.disabled),(0,H.c)(0,V.$)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof f&&this.menu._isAnimating?this.menu._animationDone.pipe((0,B.s)(1),(0,H.c)(0,V.$),(0,L.Q)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new it.VA(e.templateRef,this._viewContainerRef)),this._portal}static{this.\u0275fac=function(n){return new(n||a)(t.rXU(I.hJ),t.rXU(t.aKT),t.rXU(t.c1b),t.rXU(U),t.rXU(D,8),t.rXU(C,10),t.rXU(at.dS,8),t.rXU(v.FN),t.rXU(t.SKi))}}static{this.\u0275dir=t.FsC({type:a,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,i){1&n&&t.bIt("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),2&n&&t.BMQ("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0})}}return a})();var At=r(4823),vt=r(9213),Y=r(8834);const ft=["*",[["mat-toolbar-row"]]],Mt=["*","mat-toolbar-row"];let bt=(()=>{class a{static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275dir=t.FsC({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0})}}return a})(),Pt=(()=>{class a{constructor(e,n,i){this._elementRef=e,this._platform=n,this._document=i}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}static{this.\u0275fac=function(n){return new(n||a)(t.rXU(t.aKT),t.rXU(j.OD),t.rXU(N.qQ))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["mat-toolbar"]],contentQueries:function(n,i,o){if(1&n&&t.wni(o,bt,5),2&n){let s;t.mGM(s=t.lsd())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){2&n&&(t.HbH(i.color?"mat-"+i.color:""),t.AVh("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",0===i._toolbarRows.length))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[t.aNF],ngContentSelectors:Mt,decls:2,vars:0,template:function(n,i){1&n&&(t.NAR(ft),t.SdG(0),t.SdG(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0})}}return a})();var Nt=r(9828);const Rt=a=>({"expanded-custom-nav":a});function It(a,m){1&a&&t.nrm(0,"img",14)}function Ct(a,m){1&a&&t.nrm(0,"img",15)}function St(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,4),t.k0s())}function Tt(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,5),t.k0s())}function Et(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,6),t.k0s())}function Ot(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,7),t.k0s())}function yt(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,8),t.k0s())}function wt(a,m){1&a&&(t.j41(0,"span"),t.pXf(1,9),t.k0s())}let Lt=(()=>{class a{constructor(){this.shareDataService=(0,t.WQX)($.LU),this.shareStateService=(0,t.WQX)($.kN),this.authService=(0,t.WQX)(T.uR),this.router=(0,t.WQX)(P.Ix),this.tokenService=(0,t.WQX)(T.ms),this.usersService=(0,t.WQX)(T.gs),this.themeManager=(0,t.WQX)(Nt.YP),this.isDark=this.themeManager.isDark,this.breakpointObserver=(0,t.WQX)(tt.QP),this.navDrawerToggler=!1,this.userId=this.usersService.userId,this.isAdmin=this.usersService.isAdmin,this.userFavorites=this.usersService.userFavorites,this.subscriptions=new b.yU,this.isCompact$=this.breakpointObserver.observe(["(max-width: 600px)"]).pipe((0,k.T)(e=>e.matches),(0,G.t)()),this.isTablet$=this.breakpointObserver.observe(["(max-width: 1168px)"]).pipe((0,k.T)(e=>(this.navDrawerToggler=!1,e.matches)),(0,G.t)())}ngOnInit(){this.drawerOpen=this.shareStateService.drawerSignal,this.getUserInfo(),(0,t.EWP)(()=>this.isDark())}toggleNavDrawer(){this.navDrawerToggler=!this.navDrawerToggler}toggleDrawer(){this.shareStateService.drawerSignal.update(e=>!e)}onBackdropClick(){this.shareStateService.drawerSignal.update(e=>!e)}getUserInfo(){const e=this.tokenService.getToken("jwtToken");if(e){const n=JSON.parse(atob(e.split(".")[1]));this.userId.set(n.userId),this.isAdmin.set(n.isAdmin),this._getFavorites(this.userId())}}_getFavorites(e){const n=this.usersService.getFavorites(e).subscribe(i=>{this.userFavorites.set(i)});this.subscriptions.add(n)}logoutUser(){this.authService.logout()}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["sanareapp-navigation-rail"]],standalone:!0,features:[t.aNF],decls:59,vars:20,consts:()=>{let e,n,i,o,s,_,u,g,h,p,A,M,Q,W,K,Z,J,q;return e="Toggle sidenav",n="Settings",i="Settings icon-button",o="Profile",s="User icon-button with a menu",_="Disabled in demo",u="Search icon button",g="Sidenav dashboard icon",h="Sidenav clients icon",p="Sidenav programs icon",A="Profile",M="Logout",Q="Dashboard",W="Dashboard",K="Clients",Z="Clients",J="Programs",q="Programs",[["menu","matMenu"],["drawer",""],A,M,Q,W,K,Z,J,q,[1,"mat-toolbar"],[1,"menu-logo-wrapper"],["type","button","aria-label",e,"mat-icon-button","",2,"display","none",3,"click"],[1,"logo"],["src","assets/images/leaf-sanare-thin-dark-logo-2.svg","alt",""],["src","assets/images/leaf-sanare-thin-light-logo-2.svg","alt",""],["mat-icon-button","","matTooltip",n,"routerLink","settings","aria-label",i,1,"user-icon"],["mat-icon-button","","matTooltip",o,"aria-label",s,1,"user-icon",3,"matMenuTriggerFor"],["mat-menu-item","","routerLink","profile",2,"width","200px"],["mat-menu-item","",3,"click"],["autosize","",1,"sidenav-container"],[1,"sidenav",3,"mode","opened"],[1,"custom-nav",3,"ngClass"],[1,"nav-drawer"],["matTooltip",_,2,"margin-bottom","30px","visibility","hidden"],["mat-fab","","aria-label",u,1,"custom-fab"],[1,"nav-list-wrapper"],["routerLink","dashboard","routerLinkActive","active-link",1,"nav-list"],["aria-label",g],["routerLink","clients","routerLinkActive","active-link",1,"nav-list"],["aria-label",h],["routerLink","programs","routerLinkActive","active-link",1,"nav-list"],["aria-label",p],[1,"navigation-sidenav"],[1,"main"]]},template:function(n,i){if(1&n){const o=t.RV6();t.j41(0,"mat-toolbar",10)(1,"div",11)(2,"button",12),t.bIt("click",function(){return t.eBV(o),t.Njj(i.toggleNavDrawer())}),t.j41(3,"mat-icon"),t.EFF(4,"menu"),t.k0s()(),t.j41(5,"div",13),t.DNE(6,It,1,0,"img",14)(7,Ct,1,0,"img",15),t.k0s()(),t.j41(8,"button",16)(9,"mat-icon"),t.EFF(10,"settings"),t.k0s()(),t.j41(11,"button",17)(12,"mat-icon"),t.EFF(13,"person"),t.k0s()(),t.j41(14,"mat-menu",null,0)(16,"button",18)(17,"mat-icon"),t.EFF(18,"account_circle"),t.k0s(),t.j41(19,"span"),t.pXf(20,2),t.k0s()(),t.j41(21,"button",19),t.bIt("click",function(){return t.eBV(o),t.Njj(i.logoutUser())}),t.j41(22,"mat-icon"),t.EFF(23,"logout"),t.k0s(),t.j41(24,"span"),t.pXf(25,3),t.k0s()()()(),t.j41(26,"mat-sidenav-container",20)(27,"mat-sidenav",21,1),t.nI1(29,"async"),t.nI1(30,"async"),t.nI1(31,"async"),t.j41(32,"mat-nav-list",22)(33,"div",23)(34,"div",24)(35,"button",25)(36,"mat-icon"),t.EFF(37,"search"),t.k0s()()(),t.j41(38,"div",26)(39,"a",27)(40,"mat-icon",28),t.EFF(41,"grid_view"),t.k0s(),t.DNE(42,St,2,0,"span"),t.k0s(),t.DNE(43,Tt,2,0,"span"),t.k0s(),t.j41(44,"div",26)(45,"a",29)(46,"mat-icon",30),t.EFF(47,"people_outline"),t.k0s(),t.DNE(48,Et,2,0,"span"),t.k0s(),t.DNE(49,Ot,2,0,"span"),t.k0s(),t.j41(50,"div",26)(51,"a",31)(52,"mat-icon",32),t.EFF(53,"list"),t.k0s(),t.DNE(54,yt,2,0,"span"),t.k0s(),t.DNE(55,wt,2,0,"span"),t.k0s()()()(),t.j41(56,"mat-sidenav-content",33)(57,"div",34),t.nrm(58,"router-outlet"),t.k0s()()()}if(2&n){const o=t.sdS(15);t.R7$(6),t.vxM(i.isDark()?6:7),t.R7$(5),t.Y8G("matMenuTriggerFor",o),t.R7$(16),t.Y8G("mode",t.bMT(29,12,i.isCompact$)?"over":"side")("opened",i.navDrawerToggler||!1===t.bMT(30,14,i.isCompact$)),t.BMQ("role",t.bMT(31,16,i.isCompact$)?"dialog":"navigation"),t.R7$(5),t.Y8G("ngClass",t.eq3(18,Rt,i.navDrawerToggler)),t.R7$(10),t.vxM(i.navDrawerToggler?42:-1),t.R7$(),t.vxM(i.navDrawerToggler?-1:43),t.R7$(5),t.vxM(i.navDrawerToggler?48:-1),t.R7$(),t.vxM(i.navDrawerToggler?-1:49),t.R7$(5),t.vxM(i.navDrawerToggler?54:-1),t.R7$(),t.vxM(i.navDrawerToggler?-1:55)}},dependencies:[Pt,Y.iY,vt.An,At.oV,pt,f,C,P.Wk,E.US,E.LG,et._L,N.YU,Y.Sr,P.wQ,E.El,P.n3,N.Jj],styles:[".mat-toolbar[_ngcontent-%COMP%]{position:relative;z-index:3;width:100%}.mat-toolbar[_ngcontent-%COMP%]   .menu-logo-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;min-width:238px;padding-right:30px;padding-left:4px;flex:1 1 100%}.mat-toolbar[_ngcontent-%COMP%]   .toolbar-search[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin:18px 0 0 -4px;width:171px}.mat-toolbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 64px);position:sticky}.sidenav[_ngcontent-%COMP%]{width:auto;border:none;border-top-right-radius:0;border-bottom-right-radius:0}.custom-nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]{margin-top:-24px;display:flex;flex-direction:column;align-items:center;gap:6px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .custom-fab[_ngcontent-%COMP%]{box-shadow:none}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:80px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]:first-of-type{margin-top:30px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]{text-align:center;width:48px;height:30px;border-radius:100px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-decoration:none;transition:width .3s ease-in-out}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:30px;line-height:1.2}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:hover{width:3rem;text-align:center;width:48px;height:30px;border-radius:100px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:600}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]{align-items:flex-start;padding-left:12px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]{gap:0;width:360px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .custom-fab[_ngcontent-%COMP%]{align-self:flex-start;margin-bottom:16px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]{align-items:start;width:360px;padding-right:12px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]:first-of-type{margin-top:0}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{flex-direction:row;gap:16px;width:100%;padding:0 16px;height:56px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:hover{width:100%;height:56px;border-radius:100px}.navigation-sidenav[_ngcontent-%COMP%]{height:inherit;overflow:inherit}.navigation-sidenav[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:calc(100vh - 78px);overflow:hidden;border-radius:16px;padding:16px;margin-right:16px;margin-bottom:16px}"]})}}return a})()}}]);