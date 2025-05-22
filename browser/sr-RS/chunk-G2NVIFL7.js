import { ActivePageService, ClientsService, FavoriteExercisesComponent, FavoriteProgramsComponent, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, ScreenSizeService, ShareClientsDataService, ThemeManagerService, toSignal } from "./chunk-M6CVVSRX.js";
import { Router, UsersService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import "./chunk-2QWI6V4H.js";
import "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { inject, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefer, ɵɵdeferEnableTimerScheduling, ɵɵdeferOnIdle, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵproperty, ɵɵresetView, ɵɵrestoreView, ɵɵtemplate } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/dashboard/dashboard.component.ts
var DashboardComponent_Defer_8_DepsFn = () => [import("./chunk-OREGO373.js").then(m => m.ClientsProgressComponent)];
var DashboardComponent_Defer_13_DepsFn = () => [FavoriteProgramsComponent];
var DashboardComponent_Defer_17_DepsFn = () => [FavoriteExercisesComponent];
function DashboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ui-page-toolbar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("pageTitle", ctx_r0.pageTitle());
  }
}
function DashboardComponent_Defer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "clients-progress", 8);
    ɵɵlistener("openEditClientProgramEvent", function DashboardComponent_Defer_6_Template_clients_progress_openEditClientProgramEvent_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.openEditClientProgram($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("programs", ctx_r0.clientsPrograms())("isProgramCompleted", ctx_r0.isProgramCompleted)("isDashboard", true);
  }
}
function DashboardComponent_DeferPlaceholder_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "div", 10)(2, "div", 10)(3, "div", 10)(4, "div", 10)(5, "div", 10)(6, "div", 10)(7, "div", 10)(8, "div", 10)(9, "div", 10);
    ɵɵelementEnd();
  }
}
function DashboardComponent_Defer_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ui-favorite-programs", 11);
    ɵɵlistener("openEditProgramEvent", function DashboardComponent_Defer_11_Template_ui_favorite_programs_openEditProgramEvent_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.openEditProgram($event));
    })("reuseEditProgramEvent", function DashboardComponent_Defer_11_Template_ui_favorite_programs_reuseEditProgramEvent_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.reuseEditProgram($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("isAdmin", ctx_r0.isAdmin())("themeSignal", ctx_r0.themeSignal())("favoritePrograms", ctx_r0.favoritePrograms());
  }
}
function DashboardComponent_DeferPlaceholder_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
function DashboardComponent_Defer_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ui-favorite-exercises", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("favoriteExercises", ctx_r0.favoriteExercises())("themeSignal", ctx_r0.themeSignal());
  }
}
function DashboardComponent_DeferPlaceholder_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.clientsService = inject(ClientsService);
    this.router = inject(Router);
    this.shareClientsDataService = inject(ShareClientsDataService);
    this.activePageTitle = inject(ActivePageService);
    this.screenSizeService = inject(ScreenSizeService);
    this.usersService = inject(UsersService);
    this.themeManager = inject(ThemeManagerService);
    this.clientsPrograms = toSignal(this.clientsService.getAllClientsProgramsBasic());
    this.isProgramCompleted = [];
    this.clientInfo = this.shareClientsDataService.clientInfo;
    this.reuseProgram = this.shareClientsDataService.reuseProgram;
    this.isAdmin = this.usersService.isAdmin;
    this.favoritePrograms = this.usersService.favoritePrograms;
    this.favoriteExercises = this.usersService.favoriteExercises;
    this.pageTitle = this.activePageTitle.pageTitle;
    this.themeSignal = this.themeManager.themeSignal;
    this.screenSize = this.screenSizeService.screenSize;
  }
  ngOnInit() {
    this.pageTitle.set("Kontrolna tabla");
  }
  openEditClientProgram(programData) {
    console.log(programData);
    const programId = programData.id;
    const programName = programData.name;
    const dateRange = programData.dateRange;
    console.log(dateRange);
    this.clientInfo.set({
      clientId: programData.clientId,
      clientName: programData.clientName,
      programPosition: programData.position,
      programId,
      programName,
      dateRange
    });
    this.router.navigate([`programs/form/${programId}`], {
      queryParams: {
        programName: `${programName}`,
        isClientProgram: programName.isTemplate ? "false" : "true"
      }
    });
  }
  openEditProgram(program) {
    const programToEdit = program;
    const programId = program.id;
    this.clientInfo.set({
      clientId: "",
      clientName: "",
      programPosition: 0,
      programId: "",
      programName: programToEdit.name,
      dateRange: {
        start: "",
        end: ""
      }
    });
    this.router.navigate([`programs/form/${programId}`], {
      queryParams: {
        programName: `${programToEdit.name}`,
        isClientProgram: "false"
      }
    });
  }
  reuseEditProgram(program) {
    this.reuseProgram.set(true);
    const programToEdit = program;
    this.clientInfo.set({
      clientId: "",
      clientName: "",
      programPosition: 0,
      programId: "",
      programName: programToEdit.name,
      dateRange: {
        start: "",
        end: ""
      }
    });
    console.log(this.clientInfo());
    this.router.navigate([`programs/form/${programToEdit.id}`], {
      queryParams: {
        programName: `${programToEdit.name}`,
        isClientProgram: "false"
      }
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _DashboardComponent,
      selectors: [["sanareapp-dashboard"]],
      decls: 19,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_Dashboard_progressTitle$$APPS_SANARE_APP_SRC_APP_PAGES_DASHBOARD_DASHBOARD_COMPONENT_TS_0 = goog.getMsg(" Recent progress ");
          i18n_0 = MSG_EXTERNAL_Dashboard_progressTitle$$APPS_SANARE_APP_SRC_APP_PAGES_DASHBOARD_DASHBOARD_COMPONENT_TS_0;
        } else {
          i18n_0 = "Najnoviji napredak";
        }
        return [i18n_0, [500], [3, "pageTitle"], [1, "dashboard-container"], [1, "client-progress-container"], [1, "mat-title-medium-margin-plus"], ["overlay-scrollbars", "", 1, "scrollable-container", 3, "options", "defer"], [1, "dashboard-fields"], [3, "openEditClientProgramEvent", "programs", "isProgramCompleted", "isDashboard"], [1, "programs-list-wrapper-placeholder"], [1, "program-list-skeleton"], [3, "openEditProgramEvent", "reuseEditProgramEvent", "isAdmin", "themeSignal", "favoritePrograms"], [1, "favorites-field-skeleton"], [3, "favoriteExercises", "themeSignal"]];
      },
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DashboardComponent_Conditional_0_Template, 1, 1, "ui-page-toolbar", 2);
          ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "h3", 5);
          ɵɵi18n(4, 0);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 6);
          ɵɵtemplate(6, DashboardComponent_Defer_6_Template, 1, 3)(7, DashboardComponent_DeferPlaceholder_7_Template, 10, 0);
          ɵɵdefer(8, 6, DashboardComponent_Defer_8_DepsFn, null, 7, null, null, 1, ɵɵdeferEnableTimerScheduling);
          ɵɵdeferOnIdle();
          ɵɵelementEnd()();
          ɵɵelementStart(10, "div", 7);
          ɵɵtemplate(11, DashboardComponent_Defer_11_Template, 1, 3)(12, DashboardComponent_DeferPlaceholder_12_Template, 1, 0);
          ɵɵdefer(13, 11, DashboardComponent_Defer_13_DepsFn, null, 12);
          ɵɵdeferOnIdle();
          ɵɵtemplate(15, DashboardComponent_Defer_15_Template, 1, 2)(16, DashboardComponent_DeferPlaceholder_16_Template, 1, 0);
          ɵɵdefer(17, 15, DashboardComponent_Defer_17_DepsFn, null, 16);
          ɵɵdeferOnIdle();
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional(!((tmp_0_0 = ctx.screenSize()) == null ? null : tmp_0_0.isCompact) ? 0 : -1);
          ɵɵadvance(5);
          ɵɵproperty("options", ctx.themeSignal());
        }
      },
      dependencies: [PageToolbarComponent, OverlayscrollbarsModule, OverlayScrollbarsComponent],
      styles: ['.fetchingDataSpinner[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;left:4px;right:4px;top:4px;width:calc(100% - 20px);height:100%;border-top-left-radius:16px;border-top-right-radius:16px}[_nghost-%COMP%]{height:100%;width:100%}.dashboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:16px}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]{flex:1 1 50%;display:block;height:calc(100vh - 170px);overflow:hidden;width:100%;min-width:0;padding:16px;border-radius:16px}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   .scrollable-container[_ngcontent-%COMP%]{height:calc(100vh - 238px);overflow-y:scroll}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   .programs-list-wrapper-placeholder[_ngcontent-%COMP%]{height:calc(100vh - 238px);overflow-y:hidden}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   .programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]{border-radius:8px;width:100%;height:78px;overflow:hidden;position:relative;margin-bottom:4px}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   .programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]{width:100%;min-width:0;flex:1 1 50%;display:flex;flex-direction:column;gap:16px;height:calc(100vh - 170px);border-radius:16px}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]   ui-favorite-programs[_ngcontent-%COMP%]{flex:1;min-height:0}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]   ui-favorite-exercises[_ngcontent-%COMP%]{flex:1;min-height:0}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]   .favorites-field-skeleton[_ngcontent-%COMP%]{flex:1;border-radius:16px;overflow:hidden;position:relative}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]   .favorites-field-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}@media (max-width: 599px){.dashboard-container[_ngcontent-%COMP%]{flex-direction:column;height:calc(100vh - 80px);display:block}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]{height:fit-content;width:100%;border-radius:0;padding:8px;margin-bottom:16px}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:16px 16px 0}.dashboard-container[_ngcontent-%COMP%]   .client-progress-container[_ngcontent-%COMP%]   .scrollable-container[_ngcontent-%COMP%]{height:fit-content;overflow-y:visible}.dashboard-container[_ngcontent-%COMP%]   .dashboard-fields[_ngcontent-%COMP%]{height:400px}}\n/*# sourceMappingURL=dashboard.component-7UTDM5KV.css.map */']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(DashboardComponent, {
    className: "DashboardComponent",
    filePath: "apps/sanare-app/src/app/pages/dashboard/dashboard.component.ts",
    lineNumber: 34
  });
})();
export { DashboardComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-G2NVIFL7.js.map