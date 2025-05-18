import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "./chunk-FYBTHQM6.js";
import { ActivePageService, OverlayScrollbarsComponent, OverlayscrollbarsModule, ScreenSizeService, ShareDataService, ShareStateService, ThemeManagerService, ToolbarButtonsComponent } from "./chunk-AZCPHFRJ.js";
import { MatNavList } from "./chunk-BMXRH6OH.js";
import "./chunk-7Q5ROX6O.js";
import { LocalstorageService, Router, RouterLink, RouterLinkActive, RouterOutlet, UsersService } from "./chunk-A2XSFK7T.js";
import { MatFabButton } from "./chunk-ETCGSIPQ.js";
import "./chunk-N7W276PV.js";
import { MatIcon, MatTooltip } from "./chunk-NCTODK62.js";
import "./chunk-LFO7H5VY.js";
import "./chunk-6KEP5RK3.js";
import "./chunk-CV435JUL.js";
import "./chunk-VZWK6WXM.js";
import { NgClass, Subscription, computed, inject, ɵsetClassDebugInfo, ɵɵadvance, ɵɵattribute, ɵɵconditional, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵi18n, ɵɵproperty, ɵɵpureFunction1, ɵɵpureFunction2, ɵɵstyleProp, ɵɵtemplate, ɵɵtext } from "./chunk-TTKC63AX.js";

// apps/sanare-app/src/app/shared/navigation-rail/navigation-rail.component.ts
var _c0 = (a0, a1) => ({
  "bottom-sidenav": a0,
  "bottom-sidenav-container": a1
});
var _c1 = a0 => ({
  "expanded-custom-nav": a0
});
function NavigationRailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 1);
    ɵɵelementEnd();
  }
}
function NavigationRailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 2);
    ɵɵelementEnd();
  }
}
function NavigationRailComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 3);
    ɵɵelementEnd();
  }
}
function NavigationRailComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 4);
    ɵɵelementEnd();
  }
}
function NavigationRailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 5);
    ɵɵelementEnd();
  }
}
function NavigationRailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵi18n(1, 6);
    ɵɵelementEnd();
  }
}
var NavigationRailComponent = class _NavigationRailComponent {
  constructor() {
    this.shareDataService = inject(ShareDataService);
    this.shareStateService = inject(ShareStateService);
    this.router = inject(Router);
    this.tokenService = inject(LocalstorageService);
    this.usersService = inject(UsersService);
    this.themeManager = inject(ThemeManagerService);
    this.activePageTitle = inject(ActivePageService);
    this.screenSizeService = inject(ScreenSizeService);
    this.screenSize = this.screenSizeService.screenSize;
    this.pageTitle = this.activePageTitle.pageTitle;
    this.themeSignal = this.themeManager.themeSignal;
    this.customScrollbarOptions = this.themeManager.customScrollbarOptions;
    this.isDark = this.themeManager.isDark;
    this.navDrawerToggler = false;
    this.userId = this.usersService.userId;
    this.isAdmin = this.usersService.isAdmin;
    this.userFavorites = this.usersService.userFavorites;
    this.userName = this.usersService.userName;
    this.subscriptions = new Subscription();
  }
  // HOW IS THIS WORKING??
  ngOnInit() {
    this.drawerOpen = this.shareStateService.drawerSignal;
    this.getUserInfo();
    computed(() => this.isDark());
  }
  // getInitial(name: string): string {
  //   return name.trim().charAt(0).toUpperCase();
  // }
  toggleNavDrawer() {
    this.navDrawerToggler = !this.navDrawerToggler;
  }
  toggleDrawer() {
    this.shareStateService.drawerSignal.update(value => !value);
  }
  onBackdropClick() {
    this.shareStateService.drawerSignal.update(value => !value);
  }
  getUserInfo() {
    const token = this.tokenService.getToken("jwtToken");
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split(".")[1]));
      this.userId.set(tokenDecode.userId);
      this.isAdmin.set(tokenDecode.isAdmin);
      this._getFavorites(this.userId());
    }
  }
  _getFavorites(userId) {
    const subscription = this.usersService.getFavorites(userId).subscribe(favorites => {
      console.log("Favorites object on init: ", favorites);
      this.userFavorites.set(favorites);
    });
    this.subscriptions.add(subscription);
  }
  // editUser() {
  //   const userId = this.getUserInfo();
  //   this.router.navigateByUrl(`profile/form/${userId}`);
  // }
  // logoutUser() {
  //   this.authService.logout();
  // }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function NavigationRailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationRailComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _NavigationRailComponent,
      selectors: [["sanareapp-navigation-rail"]],
      decls: 34,
      vars: 19,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_searchButtonDisabledMsg$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_0 = goog.getMsg("Disabled in demo");
          i18n_0 = MSG_EXTERNAL_NavigationRail_searchButtonDisabledMsg$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_0;
        } else {
          i18n_0 = "Disabled in demo";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_searchButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_1 = goog.getMsg("Search icon button");
          i18n_1 = MSG_EXTERNAL_NavigationRail_searchButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_1;
        } else {
          i18n_1 = "Search icon button";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_sidenavDashboardAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_2 = goog.getMsg("Sidenav dashboard icon");
          i18n_2 = MSG_EXTERNAL_NavigationRail_sidenavDashboardAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_2;
        } else {
          i18n_2 = "Sidenav dashboard icon";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_sidenavClientsAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_3 = goog.getMsg("Sidenav clients icon");
          i18n_3 = MSG_EXTERNAL_NavigationRail_sidenavClientsAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_3;
        } else {
          i18n_3 = "Sidenav clients icon";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_sidenavProgramsAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_4 = goog.getMsg("Sidenav programs icon");
          i18n_4 = MSG_EXTERNAL_NavigationRail_sidenavProgramsAriaLabel$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_4;
        } else {
          i18n_4 = "Sidenav programs icon";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_dashboardBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_5 = goog.getMsg("Dashboard");
          i18n_5 = MSG_EXTERNAL_NavigationRail_dashboardBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_5;
        } else {
          i18n_5 = "Dashboard";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_dashboardBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_6 = goog.getMsg("Dashboard");
          i18n_6 = MSG_EXTERNAL_NavigationRail_dashboardBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_6;
        } else {
          i18n_6 = "Dashboard";
        }
        let i18n_7;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_clientsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_7 = goog.getMsg("Clients");
          i18n_7 = MSG_EXTERNAL_NavigationRail_clientsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_7;
        } else {
          i18n_7 = "Clients";
        }
        let i18n_8;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_clientsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_8 = goog.getMsg("Clients");
          i18n_8 = MSG_EXTERNAL_NavigationRail_clientsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_8;
        } else {
          i18n_8 = "Clients";
        }
        let i18n_9;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_programsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_9 = goog.getMsg("Programs");
          i18n_9 = MSG_EXTERNAL_NavigationRail_programsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_9;
        } else {
          i18n_9 = "Programs";
        }
        let i18n_10;
        if (false) {
          const MSG_EXTERNAL_NavigationRail_programsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_10 = goog.getMsg("Programs");
          i18n_10 = MSG_EXTERNAL_NavigationRail_programsBtn$$APPS_SANARE_APP_SRC_APP_SHARED_NAVIGATION_RAIL_NAVIGATION_RAIL_COMPONENT_TS_10;
        } else {
          i18n_10 = "Programs";
        }
        return [["drawer", ""], i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, i18n_10, [1, "sidenav-container"], ["mode", "side", "opened", "true", 1, "sidenav", 3, "ngClass"], [1, "custom-nav", 3, "ngClass"], [1, "nav-drawer"], ["matTooltip", i18n_0, 2, "margin-bottom", "30px", "visibility", "hidden"], ["mat-fab", "", "aria-label", i18n_1, 1, "custom-fab"], [1, "nav-list-wrapper"], ["routerLink", "dashboard", "routerLinkActive", "active-link", 1, "nav-list"], ["aria-label", i18n_2], ["routerLink", "clients", "routerLinkActive", "active-link", 1, "nav-list"], ["aria-label", i18n_3], ["routerLink", "programs", "routerLinkActive", "active-link", 1, "nav-list"], ["aria-label", i18n_4], [1, "navigation-sidenav"], ["overlay-scrollbars", "", 1, "main", 3, "options", "defer"]];
      },
      template: function NavigationRailComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "ui-toolbar-buttons");
          ɵɵelementStart(1, "mat-sidenav-container", 7)(2, "mat-sidenav", 8, 0)(4, "mat-nav-list", 9)(5, "div", 10)(6, "div", 11)(7, "button", 12)(8, "mat-icon");
          ɵɵtext(9, "search");
          ɵɵelementEnd()()();
          ɵɵelementStart(10, "div", 13)(11, "a", 14)(12, "mat-icon", 15);
          ɵɵtext(13, "grid_view");
          ɵɵelementEnd();
          ɵɵtemplate(14, NavigationRailComponent_Conditional_14_Template, 2, 0, "span");
          ɵɵelementEnd();
          ɵɵtemplate(15, NavigationRailComponent_Conditional_15_Template, 2, 0, "span");
          ɵɵelementEnd();
          ɵɵelementStart(16, "div", 13)(17, "a", 16)(18, "mat-icon", 17);
          ɵɵtext(19, "people_outline");
          ɵɵelementEnd();
          ɵɵtemplate(20, NavigationRailComponent_Conditional_20_Template, 2, 0, "span");
          ɵɵelementEnd();
          ɵɵtemplate(21, NavigationRailComponent_Conditional_21_Template, 2, 0, "span");
          ɵɵelementEnd();
          ɵɵelementStart(22, "div", 13)(23, "a", 18)(24, "mat-icon", 19);
          ɵɵtext(25, "list");
          ɵɵelementEnd();
          ɵɵtemplate(26, NavigationRailComponent_Conditional_26_Template, 2, 0, "span");
          ɵɵelementEnd();
          ɵɵtemplate(27, NavigationRailComponent_Conditional_27_Template, 2, 0, "span");
          ɵɵelementEnd()()()();
          ɵɵelementStart(28, "mat-sidenav-content", 20)(29, "div", 21);
          ɵɵelement(30, "router-outlet");
          ɵɵelementEnd();
          ɵɵelementStart(31, "footer")(32, "p");
          ɵɵtext(33, "Copyright \xA9 2025 Marko Bokan. All Rights Reserved.");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_4_0;
          let tmp_11_0;
          let tmp_12_0;
          ɵɵadvance(2);
          ɵɵproperty("ngClass", ɵɵpureFunction2(14, _c0, (tmp_1_0 = ctx.screenSize()) == null ? null : tmp_1_0.isCompact, (tmp_1_0 = ctx.screenSize()) == null ? null : tmp_1_0.isCompact));
          ɵɵattribute("role", ((tmp_2_0 = ctx.screenSize()) == null ? null : tmp_2_0.isCompact) ? "dialog" : "navigation");
          ɵɵadvance(2);
          ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c1, ctx.navDrawerToggler));
          ɵɵadvance(2);
          ɵɵstyleProp("display", ((tmp_4_0 = ctx.screenSize()) == null ? null : tmp_4_0.isCompact) ? "none" : "");
          ɵɵadvance(8);
          ɵɵconditional(ctx.navDrawerToggler ? 14 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.navDrawerToggler ? 15 : -1);
          ɵɵadvance(5);
          ɵɵconditional(ctx.navDrawerToggler ? 20 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.navDrawerToggler ? 21 : -1);
          ɵɵadvance(5);
          ɵɵconditional(ctx.navDrawerToggler ? 26 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.navDrawerToggler ? 27 : -1);
          ɵɵadvance(2);
          ɵɵproperty("options", ((tmp_11_0 = ctx.screenSize()) == null ? null : tmp_11_0.isCompact) ? ctx.themeSignal() : ctx.customScrollbarOptions());
          ɵɵadvance(2);
          ɵɵstyleProp("display", ((tmp_12_0 = ctx.screenSize()) == null ? null : tmp_12_0.isCompact) ? "none" : "");
        }
      },
      dependencies: [MatIcon, MatTooltip, RouterLink, MatSidenavContainer, MatSidenav, MatNavList, NgClass, MatFabButton, RouterLinkActive, MatSidenavContent, RouterOutlet, ToolbarButtonsComponent, OverlayscrollbarsModule, OverlayScrollbarsComponent],
      styles: [".sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 64px);position:sticky}@media (max-width: 599px){.sidenav-container[_ngcontent-%COMP%]{height:calc(100vh - 56px)}}.sidenav[_ngcontent-%COMP%]{width:auto;border:none;border-top-right-radius:0;border-bottom-right-radius:0}@media (max-width: 599px){.sidenav[_ngcontent-%COMP%]{top:auto;left:0;right:0}}.custom-nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]{margin-top:-24px;display:flex;flex-direction:column;align-items:center;gap:6px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .custom-fab[_ngcontent-%COMP%]{box-shadow:none}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:80px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]:first-of-type{margin-top:30px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]{text-align:center;width:48px;height:30px;border-radius:100px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-decoration:none;transition:width .3s ease-in-out}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:focus, .custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:active{outline:none;border-radius:100px;-webkit-tap-highlight-color:transparent;touch-action:none}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:30px;line-height:1.2}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:hover{width:3rem;text-align:center;width:48px;height:30px;border-radius:100px}.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:600}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]{align-items:flex-start;padding-left:12px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]{gap:0;width:360px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .custom-fab[_ngcontent-%COMP%]{align-self:flex-start;margin-bottom:16px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]{align-items:start;width:360px;padding-right:12px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]:first-of-type{margin-top:0}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{flex-direction:row;gap:16px;width:100%;padding:0 16px;height:56px}.custom-nav.expanded-custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]   .nav-list-wrapper[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]:hover{width:100%;height:56px;border-radius:100px}@media (max-width: 599px){.custom-nav[_ngcontent-%COMP%]   .nav-drawer[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-around;height:64px;margin-top:0;width:100%}}.navigation-sidenav[_ngcontent-%COMP%]{height:inherit;overflow:inherit}.navigation-sidenav[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:calc(100vh - 78px);overflow-y:hidden!important;border-radius:16px;padding:16px;margin-right:16px;margin-bottom:16px}@media (max-width: 599px){.navigation-sidenav[_ngcontent-%COMP%]{margin-left:0!important;height:calc(100vh - 56px)}.navigation-sidenav[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{padding:0;height:calc(100vh - 136px);overflow-y:scroll!important;border-radius:0;margin-right:0;margin-bottom:0}}footer[_ngcontent-%COMP%]{position:absolute;bottom:-11px;right:18px;font-size:10px}\n/*# sourceMappingURL=navigation-rail.component-SV2NTC7M.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(NavigationRailComponent, {
    className: "NavigationRailComponent",
    filePath: "apps/sanare-app/src/app/shared/navigation-rail/navigation-rail.component.ts",
    lineNumber: 51
  });
})();
export { NavigationRailComponent };
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-Y24OSRH4.js.map