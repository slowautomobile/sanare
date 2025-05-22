import { MatSlideToggle, MatSlideToggleModule } from "./chunk-KUT4K45J.js";
import { ActivePageService, MatOption, MatSelect, MatSelectModule, PageToolbarComponent, ShareStateService, ThemeManagerService } from "./chunk-M6CVVSRX.js";
import { LocalstorageService, MatFormField, MatFormFieldModule, MatHint, MatInputModule, MatLabel, Router, UsersService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import "./chunk-2QWI6V4H.js";
import "./chunk-7MZUFN34.js";
import { FormsModule, NgControlStatus, NgModel } from "./chunk-QTN4UOGR.js";
import { Subscription, inject, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefineComponent, ɵɵelementEnd, ɵɵelementStart, ɵɵi18n, ɵɵlistener, ɵɵproperty, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵrepeaterTrackByIdentity, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate, ɵɵtwoWayBindingSet, ɵɵtwoWayListener, ɵɵtwoWayProperty } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/settings/settings.component.ts
function SettingsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const language_r1 = ctx.$implicit;
    ɵɵproperty("value", language_r1.code);
    ɵɵadvance();
    ɵɵtextInterpolate(language_r1.name);
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-hint");
    ɵɵi18n(1, 4);
    ɵɵelementEnd();
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.router = inject(Router);
    this.themeManager = inject(ThemeManagerService);
    this.localstorageService = inject(LocalstorageService);
    this.usersService = inject(UsersService);
    this.shareStateService = inject(ShareStateService);
    this.activePageTitle = inject(ActivePageService);
    this.pageTitle = this.activePageTitle.pageTitle;
    this.backNavigation = this.activePageTitle.backNavigation;
    this.userId = this.usersService.userId;
    this.selectValueChanged = false;
    this.isDarkSignal = this.themeManager.isDark;
    this.isDark = false;
    this.subscriptions = new Subscription();
    this.isLoading = this.shareStateService.isLoading;
    this.languages = [{
      name: "English",
      code: "en-US"
    }, {
      name: "Deutsch",
      code: "de-DE"
    }, {
      name: "Srpski",
      code: "sr-RS"
    }];
  }
  ngOnInit() {
    this.pageTitle.set("Einstellungen");
    this.backNavigation.set(true);
    this.isDark = this.isDarkSignal();
    this.selectedLanguage = this._getUserLanguageToken();
    console.log(this.selectedLanguage);
  }
  switchTheme() {
    this.isDark ? this.themeManager.changeTheme("dark") : this.themeManager.changeTheme("light");
  }
  onSubmit() {
    this.isLoading.set(true);
    if (this.selectValueChanged) {
      this._setAndUpdateUserLanguageToken(this.selectedLanguage);
    } else {
      this.isLoading.set(false);
      this.router.navigateByUrl("/");
    }
    console.log(this.selectedLanguage);
  }
  onBack() {
    this.router.navigateByUrl("");
  }
  // showValue() {
  //   this.selectValueChanged = true;
  //   console.log(this.selectedLanguage);
  // }
  _getUserLanguageToken() {
    return this.localstorageService.getToken("userLanguage") || "en-US";
  }
  _setAndUpdateUserLanguageToken(languageCode) {
    this.localstorageService.setToken("userLanguage", languageCode);
    const subscription = this.usersService.updateUserLanguage(this.userId(), {
      langCode: languageCode
    }).subscribe(() => {
      this.isLoading.set(false);
      location.replace(`${window.location.origin}/${languageCode}/`);
    });
    this.subscriptions.add(subscription);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.backNavigation.set(false);
  }
  static {
    this.ɵfac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _SettingsComponent,
      selectors: [["sanareapp-settings"]],
      decls: 18,
      vars: 6,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_Settings_userInterfaceTitle$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_0 = goog.getMsg(" User interface ");
          i18n_0 = MSG_EXTERNAL_Settings_userInterfaceTitle$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_0;
        } else {
          i18n_0 = "Benutzeroberfl\xE4che";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_Settings_switchThemeToggleLabel$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_1 = goog.getMsg("Dark mode");
          i18n_1 = MSG_EXTERNAL_Settings_switchThemeToggleLabel$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_1;
        } else {
          i18n_1 = "Dunkler Modus";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_Settings_languageSettingsTitle$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_2 = goog.getMsg("Language settings");
          i18n_2 = MSG_EXTERNAL_Settings_languageSettingsTitle$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_2;
        } else {
          i18n_2 = "Spracheinstellungen";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_Settings_languageSettingsLabel$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_3 = goog.getMsg("Select your default language");
          i18n_3 = MSG_EXTERNAL_Settings_languageSettingsLabel$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_3;
        } else {
          i18n_3 = "W\xE4hlen Sie Ihre Standardsprache";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_Settings_languageSettingsHint$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_4 = goog.getMsg("Changes will take effect after saving");
          i18n_4 = MSG_EXTERNAL_Settings_languageSettingsHint$$APPS_SANARE_APP_SRC_APP_PAGES_SETTINGS_SETTINGS_COMPONENT_TS_4;
        } else {
          i18n_4 = "\xC4nderungen werden nach dem Speichern wirksam";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, [1, "page-container"], [3, "cancelEvent", "submitEvent", "pageTitle", "cancelButton", "submitButton"], [1, "settings-wrapper"], [1, "mat-title-medium-margin-plus"], [1, "theme-toggle-wrapper"], ["labelPosition", "before", 1, "mat-headline-small", 3, "ngModelChange", "change", "ngModel"], [1, "language-wrapper"], ["appearance", "outline"], [3, "valueChange", "value"], [3, "value"]];
      },
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 5)(1, "ui-page-toolbar", 6);
          ɵɵlistener("cancelEvent", function SettingsComponent_Template_ui_page_toolbar_cancelEvent_1_listener() {
            return ctx.onBack();
          })("submitEvent", function SettingsComponent_Template_ui_page_toolbar_submitEvent_1_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 7)(3, "h3", 8);
          ɵɵi18n(4, 0);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 9)(6, "mat-slide-toggle", 10);
          ɵɵtwoWayListener("ngModelChange", function SettingsComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
            ɵɵtwoWayBindingSet(ctx.isDark, $event) || (ctx.isDark = $event);
            return $event;
          });
          ɵɵlistener("change", function SettingsComponent_Template_mat_slide_toggle_change_6_listener() {
            return ctx.switchTheme();
          });
          ɵɵi18n(7, 1);
          ɵɵelementEnd()();
          ɵɵelementStart(8, "div", 11)(9, "p");
          ɵɵi18n(10, 2);
          ɵɵelementEnd();
          ɵɵelementStart(11, "mat-form-field", 12)(12, "mat-label");
          ɵɵi18n(13, 3);
          ɵɵelementEnd();
          ɵɵelementStart(14, "mat-select", 13);
          ɵɵtwoWayListener("valueChange", function SettingsComponent_Template_mat_select_valueChange_14_listener($event) {
            ɵɵtwoWayBindingSet(ctx.selectedLanguage, $event) || (ctx.selectedLanguage = $event);
            return $event;
          });
          ɵɵlistener("valueChange", function SettingsComponent_Template_mat_select_valueChange_14_listener() {
            return ctx.selectValueChanged = true;
          });
          ɵɵrepeaterCreate(15, SettingsComponent_For_16_Template, 2, 2, "mat-option", 14, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵtemplate(17, SettingsComponent_Conditional_17_Template, 2, 0, "mat-hint");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("pageTitle", ctx.pageTitle())("cancelButton", true)("submitButton", true);
          ɵɵadvance(5);
          ɵɵtwoWayProperty("ngModel", ctx.isDark);
          ɵɵadvance(8);
          ɵɵtwoWayProperty("value", ctx.selectedLanguage);
          ɵɵadvance();
          ɵɵrepeater(ctx.languages);
          ɵɵadvance(2);
          ɵɵconditional(ctx.selectValueChanged ? 17 : -1);
        }
      },
      dependencies: [FormsModule, NgControlStatus, NgModel, MatInputModule, MatFormField, MatLabel, MatHint, MatSelectModule, MatSelect, MatOption, MatFormFieldModule, MatSlideToggleModule, MatSlideToggle, PageToolbarComponent],
      styles: [".fetchingDataSpinner[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;left:4px;right:4px;top:4px;width:calc(100% - 20px);height:100%;border-top-left-radius:16px;border-top-right-radius:16px}  .mat-mdc-slide-toggle .mat-internal-form-field{width:100%}  .mdc-label{flex-grow:1;font-family:Inter,sans-serif;font-size:16px}.page-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:16px}.page-container[_ngcontent-%COMP%]   .settings-wrapper[_ngcontent-%COMP%]{max-width:700px;padding:16px;border-radius:16px}.page-container[_ngcontent-%COMP%]   .settings-wrapper[_ngcontent-%COMP%]   .theme-toggle-wrapper[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{width:100%}.page-container[_ngcontent-%COMP%]   .settings-wrapper[_ngcontent-%COMP%]   .language-wrapper[_ngcontent-%COMP%]{margin-top:16px}.page-container[_ngcontent-%COMP%]   .settings-wrapper[_ngcontent-%COMP%]   .copyright-block[_ngcontent-%COMP%]{position:absolute;bottom:50px}@media (max-width: 599px){.page-container[_ngcontent-%COMP%]{padding:24px;width:100%;max-width:600px;height:fit-content;gap:16px}.page-container[_ngcontent-%COMP%]   .settings-wrapper[_ngcontent-%COMP%]{width:100%;padding:0;order:1}.page-container[_ngcontent-%COMP%]   ui-page-toolbar[_ngcontent-%COMP%]{order:2}}\n/*# sourceMappingURL=settings.component-HKKWV5HM.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(SettingsComponent, {
    className: "SettingsComponent",
    filePath: "apps/sanare-app/src/app/pages/settings/settings.component.ts",
    lineNumber: 43
  });
})();
export { SettingsComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-6XKQPIQ5.js.map