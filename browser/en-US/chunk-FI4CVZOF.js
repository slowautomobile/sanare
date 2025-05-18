import { MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemMeta, MatListItemTitle, MatListSubheaderCssMatStyler } from "./chunk-BMXRH6OH.js";
import { MatIconButton } from "./chunk-ETCGSIPQ.js";
import { MatIcon, MatTooltip } from "./chunk-NCTODK62.js";
import { MatProgressBar } from "./chunk-CV435JUL.js";
import { DatePipe, NgClass, NgStyle, input, output, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵpipe, ɵɵpipeBind2, ɵɵproperty, ɵɵpureFunction0, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵrepeaterTrackByIdentity, ɵɵresetView, ɵɵrestoreView, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1 } from "./chunk-TTKC63AX.js";

// libs/clients/src/lib/components/clients-progress/clients-progress.component.ts
var _c0 = () => ({
  height: "78px"
});
var _c1 = () => ({
  height: "64px"
});
function ClientsProgressComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵi18n(1, 0);
    ɵɵelementEnd();
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const programData_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(programData_r1.name);
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "mat-progress-bar", 13);
    ɵɵelementStart(2, "span")(3, "span");
    ɵɵi18n(4, 1);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const programData_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", !ctx_r1.isDashboard ? "progress-margin" : "");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.isDashboard ? "dash-progress-width" : "")("value", programData_r1.progress);
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind2(7, 4, programData_r1.dateRange.end, "d MMM yyyy"), " ");
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "mat-progress-bar", 14);
    ɵɵelementStart(2, "span")(3, "span");
    ɵɵi18n(4, 2);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const programData_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", !ctx_r1.isDashboard ? "progress-margin" : "");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.isDashboard ? "dash-progress-width" : "")("value", programData_r1.progress);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 4, programData_r1.dateRange.end, "d MMM yyyy"), " ");
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const programData_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      $event.stopPropagation();
      return ɵɵresetView(ctx_r1.viewClientProgram(programData_r1));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "visibility");
    ɵɵelementEnd()();
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_1_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const programData_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      $event.stopPropagation();
      return ɵɵresetView(ctx_r1.openEditClientProgram(programData_r1));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "edit");
    ɵɵelementEnd()();
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_0_Template, 3, 0, "button", 15)(1, ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Conditional_1_Template, 3, 0, "button", 16);
  }
  if (rf & 2) {
    const ɵ$index_11_r5 = ɵɵnextContext().$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.isProgramCompleted[ɵ$index_11_r5] ? 0 : 1);
  }
}
function ClientsProgressComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "mat-list-item", 7)(2, "mat-icon", 8);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 9);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, ClientsProgressComponent_Conditional_2_For_2_Conditional_6_Template, 2, 1, "span", 10)(7, ClientsProgressComponent_Conditional_2_For_2_Conditional_7_Template, 8, 7, "span", 11)(8, ClientsProgressComponent_Conditional_2_For_2_Conditional_8_Template, 8, 7, "span", 11);
    ɵɵelement(9, "span", 12);
    ɵɵelementEnd();
    ɵɵtemplate(10, ClientsProgressComponent_Conditional_2_For_2_Conditional_10_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const programData_r1 = ctx.$implicit;
    const ɵ$index_11_r5 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1.isDashboard ? ɵɵpureFunction0(6, _c0) : ɵɵpureFunction0(7, _c1));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.isDashboard ? "account_circle" : "description");
    ɵɵadvance(2);
    ɵɵtextInterpolate(programData_r1.program ? programData_r1.program.name : programData_r1.clientName);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isDashboard ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isProgramCompleted[ɵ$index_11_r5] ? 7 : 8);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.isDashboard ? 10 : -1);
  }
}
function ClientsProgressComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ClientsProgressComponent_Conditional_2_Conditional_0_Template, 2, 0, "span", 5);
    ɵɵrepeaterCreate(1, ClientsProgressComponent_Conditional_2_For_2_Template, 11, 8, "div", 6, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(!ctx_r1.isDashboard ? 0 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.programs());
  }
}
var ClientsProgressComponent = class _ClientsProgressComponent {
  constructor() {
    this.programs = input();
    this.openEditClientProgramEvent = output();
  }
  //  color!: ThemePalette;
  /*  color: ThemePalette = 'primary';
  // mode: ProgressBarMode = 'determinate';
  value = 100;
  bufferValue = 0; */
  openEditClientProgram(programData) {
    this.openEditClientProgramEvent.emit(programData);
  }
  viewClientProgram(programData) {
    console.log(programData);
  }
  static {
    this.ɵfac = function ClientsProgressComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientsProgressComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ClientsProgressComponent,
      selectors: [["clients-progress"]],
      inputs: {
        programs: [1, "programs"],
        isProgramCompleted: "isProgramCompleted",
        isDashboard: "isDashboard"
      },
      outputs: {
        openEditClientProgramEvent: "openEditClientProgramEvent"
      },
      decls: 3,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ClientsProgress_title$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_0 = goog.getMsg("Programs");
          i18n_0 = MSG_EXTERNAL_ClientsProgress_title$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Programs";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ClientsProgress_programEnded$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_1 = goog.getMsg("Ended: ");
          i18n_1 = MSG_EXTERNAL_ClientsProgress_programEnded$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_1;
        } else {
          i18n_1 = "Ended: ";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ClientsProgress_programEnds$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_2 = goog.getMsg("Ends: ");
          i18n_2 = MSG_EXTERNAL_ClientsProgress_programEnds$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_2;
        } else {
          i18n_2 = "Ends: ";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ClientsProgress_editProgramBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_3 = goog.getMsg("Edit");
          i18n_3 = MSG_EXTERNAL_ClientsProgress_editProgramBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_3;
        } else {
          i18n_3 = "Edit";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ClientsProgress_editProgramBtnAriaLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_4 = goog.getMsg("Edit icon button");
          i18n_4 = MSG_EXTERNAL_ClientsProgress_editProgramBtnAriaLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_CLIENTS_PROGRESS_CLIENTS_PROGRESS_COMPONENT_TS_4;
        } else {
          i18n_4 = "Edit icon button";
        }
        return [i18n_0, i18n_1, i18n_2, [1, "status-toggle"], [1, "program-list", 3, "ngClass"], ["mat-subheader", "", 1, "subheader-text", "mat-body-large"], [1, "list-item-wrapper"], [1, "program-list-item", 3, "ngStyle"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["matListItemLine", "", 1, "status-tooltip"], ["matListItemLine", "", 1, "status-tooltip", "progress-list-line", 3, "ngClass"], ["matListItemMeta", "", 1, "list-action-button"], ["color", "primary", "mode", "determinate", 1, "progress-bar", 3, "ngClass", "value"], ["color", "accent", "mode", "determinate", 1, "progress-bar", 3, "ngClass", "value"], ["mat-icon-button", "", "matTooltip", "View", "aria-label", "View icon button"], ["mat-icon-button", "", "matTooltip", i18n_3, "aria-label", i18n_4], ["mat-icon-button", "", "matTooltip", "View", "aria-label", "View icon button", 3, "click"], ["mat-icon-button", "", "matTooltip", i18n_3, "aria-label", i18n_4, 3, "click"]];
      },
      template: function ClientsProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3)(1, "mat-list", 4);
          ɵɵtemplate(2, ClientsProgressComponent_Conditional_2_Template, 3, 1);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngClass", ctx.isDashboard ? "custom-height-background" : "");
          ɵɵadvance();
          ɵɵconditional(ctx.programs() ? 2 : -1);
        }
      },
      dependencies: [MatList, NgClass, MatListSubheaderCssMatStyler, MatListItem, NgStyle, MatIcon, MatListItemIcon, MatListItemTitle, MatListItemLine, MatProgressBar, MatListItemMeta, MatIconButton, MatTooltip, DatePipe],
      styles: [".status-toggle[_ngcontent-%COMP%]{display:flex;flex-direction:column}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]{padding-top:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .subheader-text[_ngcontent-%COMP%]{margin:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:12px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]{display:flex;align-items:center}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{margin-top:4px;display:inline-block;max-width:190px;margin-right:10px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .progress-list-line[_ngcontent-%COMP%]   .dash-progress-width[_ngcontent-%COMP%]{max-width:170px}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .program-list-item[_ngcontent-%COMP%]   .mat-mdc-list-item-meta[_ngcontent-%COMP%]{margin-left:0}.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   .list-item-wrapper[_ngcontent-%COMP%]   .program-list-item[_ngcontent-%COMP%]   .list-action-button[_ngcontent-%COMP%]{align-self:center}@media (max-width: 599px){.status-toggle[_ngcontent-%COMP%]   .program-list[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{display:none}}\n/*# sourceMappingURL=clients-progress.component-YXQT4GA3.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ClientsProgressComponent, {
    className: "ClientsProgressComponent",
    filePath: "libs/clients/src/lib/components/clients-progress/clients-progress.component.ts",
    lineNumber: 39
  });
})();
export { ClientsProgressComponent };
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-FI4CVZOF.js.map