import { ClientsService, MAT_DIALOG_DATA, MatDialogActions, MatDialogRef, MatDialogTitle, OverlayScrollbarsComponent, OverlayscrollbarsModule, ProgramsService, ShareClientsDataService, ThemeManagerService } from "./chunk-ESKXYVOI.js";
import { MatFormField, MatInput, MatLabel, MatSnackBar, Router } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import { ClientsProgressComponent } from "./chunk-5O54ZM34.js";
import "./chunk-SWLHLYHZ.js";
import { MatButton } from "./chunk-2QWI6V4H.js";
import { MatIcon } from "./chunk-7MZUFN34.js";
import { DefaultValueAccessor, FormBuilder, FormControlName, FormGroupDirective, FormsModule, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, Validators, ɵNgNoValidate } from "./chunk-QTN4UOGR.js";
import { Subscription, inject, of, ɵsetClassDebugInfo, ɵɵadvance, ɵɵdefer, ɵɵdeferOnIdle, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵpipe, ɵɵpipeBind1, ɵɵproperty, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate1 } from "./chunk-2MICNSAC.js";

// libs/clients/src/lib/components/show-client-modal/show-client-modal.component.ts
var ShowClientModalComponent_Defer_24_DepsFn = () => [import("./chunk-67X5CM6Q.js").then(m => m.ClientsProgressComponent), import("./chunk-Q3PYOHAN.js").then(m => m.AsyncPipe)];
function ShowClientModalComponent_Defer_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "clients-progress", 21);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("programs", ɵɵpipeBind1(1, 3, ctx_r0.programs$))("isProgramCompleted", ctx_r0.isProgramCompleted)("isDashboard", false);
  }
}
function ShowClientModalComponent_DeferPlaceholder_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵelement(1, "div", 23)(2, "div", 23)(3, "div", 23)(4, "div", 23)(5, "div", 23);
    ɵɵelementEnd();
  }
}
var ShowClientModalComponent = class _ShowClientModalComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.formBuilder = inject(FormBuilder);
    this.clientsService = inject(ClientsService);
    this.programsService = inject(ProgramsService);
    this.router = inject(Router);
    this._snackBar = inject(MatSnackBar);
    this.shareClientsDataService = inject(ShareClientsDataService);
    this.programs = [];
    this.subscriptions = new Subscription();
    this.fullEditButtonString = "Kompletna izmena";
    this.date = /* @__PURE__ */new Date();
    this.isProgramCompleted = [];
    this.clientInfo = this.shareClientsDataService.clientInfo;
    this.themeManager = inject(ThemeManagerService);
    this.themeSignal = this.themeManager.themeSignal;
  }
  ngOnInit() {
    this._initForm();
    const subscription = this.clientsService.getClient(this.data.clientId).subscribe(client => {
      this.clientForm["firstName"].setValue(client.firstName);
      this.clientForm["lastName"].setValue(client.lastName);
      this.clientForm["email"].setValue(client.email);
      this.clientForm["phone"].setValue(client.phone);
      this.programs = client.programs;
      this.programs$ = of(this.programs);
      console.log(this.programs);
      const currentDate = /* @__PURE__ */new Date();
      this.programs?.forEach(program => {
        const adaptedProgram = program;
        const programStartDate = new Date(adaptedProgram.dateRange.start);
        const programEndDate = new Date(adaptedProgram.dateRange.end);
        const totalDuration = programEndDate.getTime() - programStartDate.getTime();
        const elapsedTime = currentDate.getTime() - programStartDate.getTime();
        const progress = Math.min(elapsedTime / totalDuration * 100, 100);
        adaptedProgram.progress = progress;
        if (programEndDate < currentDate) {
          this.isProgramCompleted.push(true);
          console.log("This program is completed");
        } else {
          this.isProgramCompleted.push(false);
          console.log("This program is in progress");
        }
      });
    });
    this.subscriptions.add(subscription);
  }
  _initForm() {
    this.form = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      name: [""],
      email: [""],
      phone: ["", Validators.required]
      // completed: [false],
    });
  }
  get clientForm() {
    return this.form.controls;
  }
  _updateClient(client, clientId) {
    const subscription = this.clientsService.updateClient(client, clientId).subscribe(updatedClient => {
      this._snackBar.open("Pacijent a\u017Euriran", "", {
        duration: 2e3,
        panelClass: ["custom-snackbar-style"]
      });
      console.log(updatedClient);
    });
    this.subscriptions.add(subscription);
  }
  fullEditMode(clientId, clientName) {
    console.log(clientName);
    this.clientInfo.set({
      clientId,
      clientName,
      programPosition: 0,
      programId: "",
      programName: "",
      dateRange: {
        start: "",
        end: ""
      }
    });
    this.router.navigateByUrl(`clients/form/${clientId}`);
    this.dialogRef.close(true);
    console.log(clientId);
  }
  onConfirm() {
    const updatedClient = {
      firstName: this.clientForm["firstName"].value,
      lastName: this.clientForm["lastName"].value,
      name: this.clientForm["name"].value,
      email: this.clientForm["email"].value,
      phone: this.clientForm["phone"].value
      // completed: this.clientForm['completed'].value,
    };
    this._updateClient(updatedClient, this.data.clientId);
    this.dialogRef.close(true);
  }
  // Implement options for viewing/editing. ARE THEY REDUNDANT, SINCE THERE IS "Switch to full edit"? Also, where should "View" button lead, in clients programs table or in "Reuse" program editor???
  // viewClientProgram() {
  //   console.log('view client program');
  // }
  deleteClientProgram() {
    console.log("delete client program");
  }
  onClose() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ShowClientModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowClientModalComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ShowClientModalComponent,
      selectors: [["clients-show-client-modal"]],
      decls: 36,
      vars: 5,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ClientModal_firstNamePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_0 = goog.getMsg("Enter clients firstname");
          i18n_0 = MSG_EXTERNAL_ClientModal_firstNamePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_0;
        } else {
          i18n_0 = "Unesite ime klijenta";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ClientModal_lastNamePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_1 = goog.getMsg("Enter clients lastname");
          i18n_1 = MSG_EXTERNAL_ClientModal_lastNamePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_1;
        } else {
          i18n_1 = "Unesite prezime pacijenta";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ClientModal_emailPlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_2 = goog.getMsg("Enter clients email");
          i18n_2 = MSG_EXTERNAL_ClientModal_emailPlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_2;
        } else {
          i18n_2 = "Unesite e-po\u0161tu pacijenta";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ClientModal_phonePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_3 = goog.getMsg("Enter clients phone number");
          i18n_3 = MSG_EXTERNAL_ClientModal_phonePlaceholder$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_3;
        } else {
          i18n_3 = "Unesite broj telefona pacijenta";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ClientModal_firstNameLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_4 = goog.getMsg("Firstname");
          i18n_4 = MSG_EXTERNAL_ClientModal_firstNameLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_4;
        } else {
          i18n_4 = "Ime";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_ClientModal_lastNameLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_5 = goog.getMsg("Lastname");
          i18n_5 = MSG_EXTERNAL_ClientModal_lastNameLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_5;
        } else {
          i18n_5 = "Prezime";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_ClientModal_emailLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_6 = goog.getMsg("Email");
          i18n_6 = MSG_EXTERNAL_ClientModal_emailLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_6;
        } else {
          i18n_6 = "E-mail";
        }
        let i18n_7;
        if (false) {
          const MSG_EXTERNAL_ClientModal_phoneLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_7 = goog.getMsg("Phone");
          i18n_7 = MSG_EXTERNAL_ClientModal_phoneLabel$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_7;
        } else {
          i18n_7 = "Telefon";
        }
        let i18n_8;
        if (false) {
          const MSG_EXTERNAL_ClientModal_cancelModalBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_8 = goog.getMsg(" Cancel ");
          i18n_8 = MSG_EXTERNAL_ClientModal_cancelModalBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_8;
        } else {
          i18n_8 = " Otka\u017Ei ";
        }
        let i18n_9;
        if (false) {
          const MSG_EXTERNAL_ClientModal_saveModalBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_9 = goog.getMsg(" Save ");
          i18n_9 = MSG_EXTERNAL_ClientModal_saveModalBtn$$LIBS_CLIENTS_SRC_LIB_COMPONENTS_SHOW_CLIENT_MODAL_SHOW_CLIENT_MODAL_COMPONENT_TS_9;
        } else {
          i18n_9 = " Sa\u010Duvaj ";
        }
        return [i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, [1, "confirmation-dialog-wrapper"], [1, "header-container"], ["mat-dialog-title", "", 1, "dialog-title", "mat-title-large"], ["overlay-scrollbars", "", 1, "dialog-content-wrapper", 3, "options", "defer"], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "type", "text", "placeholder", i18n_0], ["matInput", "", "formControlName", "lastName", "type", "text", "placeholder", i18n_1], ["matInput", "", "formControlName", "email", "type", "text", "placeholder", i18n_2], ["matInput", "", "formControlName", "phone", "type", "text", "placeholder", i18n_3], ["mat-dialog-actions", "", 1, "dialog-actions"], ["mat-flat-button", "", "color", "primary", 1, "custom-btn", 3, "click"], [1, "actions-wrapper"], ["mat-button", "", "cdkFocusInitial", "", 1, "dialog-buttons", 3, "click"], ["mat-button", "", 1, "dialog-buttons", 3, "click", "disabled"], [3, "programs", "isProgramCompleted", "isDashboard"], [1, "programs-list-wrapper-placeholder"], [1, "program-list-skeleton"]];
      },
      template: function ShowClientModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "h2", 8);
          ɵɵtext(3);
          ɵɵelementEnd()();
          ɵɵelementStart(4, "div", 9)(5, "form", 10)(6, "mat-form-field", 11)(7, "mat-label");
          ɵɵi18n(8, 0);
          ɵɵelementEnd();
          ɵɵelement(9, "input", 12);
          ɵɵelementEnd();
          ɵɵelementStart(10, "mat-form-field", 11)(11, "mat-label");
          ɵɵi18n(12, 1);
          ɵɵelementEnd();
          ɵɵelement(13, "input", 13);
          ɵɵelementEnd();
          ɵɵelementStart(14, "mat-form-field", 11)(15, "mat-label");
          ɵɵi18n(16, 2);
          ɵɵelementEnd();
          ɵɵelement(17, "input", 14);
          ɵɵelementEnd();
          ɵɵelementStart(18, "mat-form-field", 11)(19, "mat-label");
          ɵɵi18n(20, 3);
          ɵɵelementEnd();
          ɵɵelement(21, "input", 15);
          ɵɵelementEnd();
          ɵɵtemplate(22, ShowClientModalComponent_Defer_22_Template, 2, 5)(23, ShowClientModalComponent_DeferPlaceholder_23_Template, 6, 0);
          ɵɵdefer(24, 22, ShowClientModalComponent_Defer_24_DepsFn, null, 23);
          ɵɵdeferOnIdle();
          ɵɵelementEnd()();
          ɵɵelementStart(26, "div", 16)(27, "button", 17);
          ɵɵlistener("click", function ShowClientModalComponent_Template_button_click_27_listener() {
            return ctx.fullEditMode(ctx.data.clientId, ctx.data.clientName);
          });
          ɵɵelementStart(28, "mat-icon");
          ɵɵtext(29, "edit");
          ɵɵelementEnd();
          ɵɵtext(30);
          ɵɵelementEnd();
          ɵɵelementStart(31, "div", 18)(32, "button", 19);
          ɵɵlistener("click", function ShowClientModalComponent_Template_button_click_32_listener() {
            return ctx.onClose();
          });
          ɵɵi18n(33, 4);
          ɵɵelementEnd();
          ɵɵelementStart(34, "button", 20);
          ɵɵlistener("click", function ShowClientModalComponent_Template_button_click_34_listener() {
            return ctx.onConfirm();
          });
          ɵɵi18n(35, 5);
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ctx.data.title, " ");
          ɵɵadvance();
          ɵɵproperty("options", ctx.themeSignal());
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
          ɵɵadvance(25);
          ɵɵtextInterpolate1(" ", ctx.fullEditButtonString, " ");
          ɵɵadvance(4);
          ɵɵproperty("disabled", ctx.form.invalid);
        }
      },
      dependencies: [MatDialogTitle, OverlayscrollbarsModule, OverlayScrollbarsComponent, FormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatInput, MatDialogActions, MatButton, MatIcon],
      styles: ['.confirmation-dialog-wrapper[_ngcontent-%COMP%]{height:737px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]{margin:0}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%]   .full-edit-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%]   .full-edit-wrapper[_ngcontent-%COMP%]   .clients-progress-item[_ngcontent-%COMP%]{flex:1}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{padding-bottom:20px;padding-right:20px;text-align:right;display:flex;flex-direction:column;gap:16px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]{margin-top:24px;width:fit-content;align-self:flex-start}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]{align-self:flex-end}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]{height:162px;overflow-y:hidden}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]{width:100%;height:64px;overflow:hidden;position:relative;margin-bottom:4px;border-radius:8px}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}\n/*# sourceMappingURL=show-client-modal.component-DJOJJVUK.css.map */']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ShowClientModalComponent, {
    className: "ShowClientModalComponent",
    filePath: "libs/clients/src/lib/components/show-client-modal/show-client-modal.component.ts",
    lineNumber: 59
  });
})();
export { ClientsProgressComponent, ShowClientModalComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-Q5VJOC6V.js.map