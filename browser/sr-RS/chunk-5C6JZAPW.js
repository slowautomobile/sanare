<<<<<<<< HEAD:browser/sr-RS/chunk-7QMTSIS6.js
import { BasicProgramsTableComponent, ExercisesService, MatChip, MatChipSet, MatChipsModule, MatDialog, MatTableDataSource, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, ProgramModalComponent, ProgramsService, ThemeManagerService, VideoPlayerComponent } from "./chunk-ETMZBCVE.js";
========
import { BasicProgramsTableComponent, ExercisesService, MatChip, MatChipSet, MatChipsModule, MatDialog, MatTableDataSource, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, ProgramModalComponent, ProgramsService, ThemeManagerService, VideoPlayerComponent } from "./chunk-ESKXYVOI.js";
>>>>>>>> 7e7d94b (Deploy dist update):browser/sr-RS/chunk-5C6JZAPW.js
import { LocalstorageService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import "./chunk-2QWI6V4H.js";
import "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { CommonModule, Location, Subscription, inject, input, signal, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵproperty, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵrepeaterTrackByIdentity, ɵɵresetView, ɵɵrestoreView, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/exercises/full-exercise/full-exercise.component.ts
function FullExerciseComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵelement(2, "div", 10);
    ɵɵelementEnd();
  }
}
function FullExerciseComponent_Conditional_1_For_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const muscle_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(muscle_r3);
  }
}
function FullExerciseComponent_Conditional_1_For_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bodyArea_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(bodyArea_r4.translations == null ? null : bodyArea_r4.translations[ctx_r1.selectedLanguage]);
  }
}
function FullExerciseComponent_Conditional_1_For_34_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const movement_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(movement_r5.translations == null ? null : movement_r5.translations[ctx_r1.selectedLanguage]);
  }
}
function FullExerciseComponent_Conditional_1_For_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const startingPosition_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(startingPosition_r6.translations == null ? null : startingPosition_r6.translations[ctx_r1.selectedLanguage]);
  }
}
function FullExerciseComponent_Conditional_1_For_46_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const equipment_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(equipment_r7.translations[ctx_r1.selectedLanguage]);
  }
}
function FullExerciseComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ui-page-toolbar", 11);
    ɵɵlistener("cancelEvent", function FullExerciseComponent_Conditional_1_Template_ui_page_toolbar_cancelEvent_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBack());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div", 12)(2, "div", 13);
    ɵɵelement(3, "ui-video-player", 14);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 15)(5, "div", 16)(6, "div", 17)(7, "div", 18)(8, "span", 19);
    ɵɵi18n(9, 0);
    ɵɵelementEnd();
    ɵɵelementStart(10, "span", 20);
    ɵɵtext(11);
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 18)(13, "span", 19);
    ɵɵi18n(14, 1);
    ɵɵelementEnd();
    ɵɵelementStart(15, "span", 20);
    ɵɵtext(16);
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 18)(18, "span", 19);
    ɵɵi18n(19, 2);
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-chip-set");
    ɵɵrepeaterCreate(21, FullExerciseComponent_Conditional_1_For_22_Template, 2, 1, "mat-chip", 21, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 18)(24, "span", 19);
    ɵɵi18n(25, 3);
    ɵɵelementEnd();
    ɵɵelementStart(26, "mat-chip-set");
    ɵɵrepeaterCreate(27, FullExerciseComponent_Conditional_1_For_28_Template, 2, 1, "mat-chip", 21, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(29, "div", 18)(30, "span", 19);
    ɵɵi18n(31, 4);
    ɵɵelementEnd();
    ɵɵelementStart(32, "mat-chip-set");
    ɵɵrepeaterCreate(33, FullExerciseComponent_Conditional_1_For_34_Template, 2, 1, "mat-chip", 21, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(35, "div", 18)(36, "span", 19);
    ɵɵi18n(37, 5);
    ɵɵelementEnd();
    ɵɵelementStart(38, "mat-chip-set");
    ɵɵrepeaterCreate(39, FullExerciseComponent_Conditional_1_For_40_Template, 2, 1, "mat-chip", 21, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
    ɵɵelementStart(41, "div", 18)(42, "span", 19);
    ɵɵi18n(43, 6);
    ɵɵelementEnd();
    ɵɵelementStart(44, "mat-chip-set");
    ɵɵrepeaterCreate(45, FullExerciseComponent_Conditional_1_For_46_Template, 2, 1, "mat-chip", 21, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()()();
    ɵɵelementStart(47, "div", 22)(48, "span", 19);
    ɵɵi18n(49, 7);
    ɵɵelementEnd();
    ɵɵelementStart(50, "ui-basic-programs-table", 23);
    ɵɵlistener("viewProgramEvent", function FullExerciseComponent_Conditional_1_Template_ui_basic_programs_table_viewProgramEvent_50_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.viewProgramModal($event));
    });
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("pageType", "exercise")("editMode", true);
    ɵɵadvance(3);
    ɵɵproperty("videoSrc", ctx_r1.exercise.video)("thumbnail", ctx_r1.exercise.images == null ? null : ctx_r1.exercise.images.mainImg)("isModal", true);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r1.themeSignal());
    ɵɵadvance(7);
    ɵɵtextInterpolate(ctx_r1.exercise.name[ctx_r1.selectedLanguage]);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.exercise.description[ctx_r1.selectedLanguage]);
    ɵɵadvance(5);
    ɵɵrepeater(ctx_r1.exercise.muscles);
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r1.exercise.bodyAreas);
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r1.exercise.movements);
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r1.exercise.startingPositions);
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r1.exercise.equipments);
    ɵɵadvance(5);
    ɵɵproperty("dataSource", ctx_r1.dataSourceAllPrograms)("isClient", false);
  }
}
var FullExerciseComponent = class _FullExerciseComponent {
  constructor() {
    this.location = inject(Location);
    this.exercisesService = inject(ExercisesService);
    this.localstorageService = inject(LocalstorageService);
    this.themeManager = inject(ThemeManagerService);
    this.programsService = inject(ProgramsService);
    this.dialog = inject(MatDialog);
    this.exerciseId = input("");
    this.themeSignal = this.themeManager.themeSignal;
    this.dataSourceAllPrograms = new MatTableDataSource();
    this.subscriptions = new Subscription();
    this.isLoading = signal(true);
  }
  ngOnInit() {
    this.selectedLanguage = this._getUserLanguageToken();
    this.exercisesService.getExercise(this.exerciseId()).subscribe(exercise => {
      this.exercise = exercise;
      this.dataSourceAllPrograms.data = exercise.programs;
      this.isLoading.set(false);
    });
  }
  _getUserLanguageToken() {
    return this.localstorageService.getToken("userLanguage")?.split("-")[0];
  }
  viewProgramModal(programId) {
    const subscription = this.programsService.getProgram(programId).subscribe(program => {
      const dialogRef = this.dialog.open(ProgramModalComponent, {
        width: "500px",
        // height: '736px',
        data: {
          title: "Informacije o programu",
          program,
          selectedLang: this.selectedLanguage,
          isClient: false
        },
        // disableClose: true, // Disable closing when clicked outside
        panelClass: "custom-dialog"
        // enterAnimationDuration: 0,
      });
      const subscription2 = dialogRef.afterClosed().subscribe(result => {
        console.log("Program modal exited");
      });
      this.subscriptions.add(subscription2);
    });
    this.subscriptions.add(subscription);
  }
  onBack() {
    this.location.back();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function FullExerciseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullExerciseComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _FullExerciseComponent,
      selectors: [["full-exercise"]],
      inputs: {
        exerciseId: [1, "exerciseId"]
      },
      decls: 2,
      vars: 1,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_exerciseName$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_0 = goog.getMsg("Exercise name: ");
          i18n_0 = MSG_EXTERNAL_ExerciseModal_exerciseName$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_0;
        } else {
          i18n_0 = "Naziv ve\u017Ebe: ";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_exerciseDescription$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_1 = goog.getMsg("Description: ");
          i18n_1 = MSG_EXTERNAL_ExerciseModal_exerciseDescription$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_1;
        } else {
          i18n_1 = "Opis: ";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_muscles$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_2 = goog.getMsg("Muscles: ");
          i18n_2 = MSG_EXTERNAL_ExerciseModal_muscles$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_2;
        } else {
          i18n_2 = "Mi\u0161i\u0107i: ";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_bodyAreas$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_3 = goog.getMsg("Body areas: ");
          i18n_3 = MSG_EXTERNAL_ExerciseModal_bodyAreas$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_3;
        } else {
          i18n_3 = "Delovi tela: ";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_movements$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_4 = goog.getMsg("Movements: ");
          i18n_4 = MSG_EXTERNAL_ExerciseModal_movements$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_4;
        } else {
          i18n_4 = "Pokreti: ";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_startingPositions$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_5 = goog.getMsg("Starting positions: ");
          i18n_5 = MSG_EXTERNAL_ExerciseModal_startingPositions$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_5;
        } else {
          i18n_5 = "Po\u010Detna pozicija: ";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_equipment$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_6 = goog.getMsg("Equipment: ");
          i18n_6 = MSG_EXTERNAL_ExerciseModal_equipment$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_6;
        } else {
          i18n_6 = "Oprema: ";
        }
        let i18n_7;
        if (false) {
          const MSG_EXTERNAL_FullExerciseProgramsTable_pageTitle$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_7 = goog.getMsg("Programs: ");
          i18n_7 = MSG_EXTERNAL_FullExerciseProgramsTable_pageTitle$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_7;
        } else {
          i18n_7 = "Programi:";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, [1, "page-toolbar-placeholder"], [1, "video-skeleton-wrapper"], [1, "video-skeleton"], [3, "cancelEvent", "pageType", "editMode"], [1, "content-container"], [1, "exercise-video-wrapper"], [3, "videoSrc", "thumbnail", "isModal"], ["overlay-scrollbars", "", 1, "exercise-info-wrapper", 3, "options", "defer"], [1, "info-flex-container"], [1, "dialog-content-wrapper"], [1, "category-labels"], [1, "label"], [1, "category-value"], [1, "chips-category"], [1, "programs-wrapper"], [1, "ui-programs-table", 3, "viewProgramEvent", "dataSource", "isClient"]];
      },
      template: function FullExerciseComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FullExerciseComponent_Conditional_0_Template, 3, 0)(1, FullExerciseComponent_Conditional_1_Template, 51, 10);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ctx.isLoading()) ? 0 : 1, tmp_0_0);
        }
      },
      dependencies: [CommonModule, PageToolbarComponent, MatChipsModule, MatChip, MatChipSet, VideoPlayerComponent, OverlayscrollbarsModule, OverlayScrollbarsComponent, BasicProgramsTableComponent],
      styles: ['.page-toolbar-placeholder[_ngcontent-%COMP%]{height:40px;width:100%;margin-bottom:16px;position:relative;border-radius:16px;overflow:hidden}.page-toolbar-placeholder[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}.content-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;gap:16px}.content-container[_ngcontent-%COMP%]   .exercise-video-wrapper[_ngcontent-%COMP%]{flex:1 1 0;height:100%;border-radius:16px}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]{flex:2 1 0;height:calc(100vh - 166px);overflow:hidden;min-width:0}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]   .programs-wrapper[_ngcontent-%COMP%]{border-radius:16px;padding:16px}.video-skeleton-wrapper[_ngcontent-%COMP%]{height:calc(100vh - 166px)}.video-skeleton-wrapper[_ngcontent-%COMP%]   .video-skeleton[_ngcontent-%COMP%]{position:relative;aspect-ratio:1/1;border-radius:16px;overflow:hidden}.video-skeleton-wrapper[_ngcontent-%COMP%]   .video-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}\n/*# sourceMappingURL=full-exercise.component-HL4NSFJV.css.map */'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(FullExerciseComponent, {
    className: "FullExerciseComponent",
    filePath: "apps/sanare-app/src/app/pages/exercises/full-exercise/full-exercise.component.ts",
    lineNumber: 47
  });
})();
export { FullExerciseComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
<<<<<<<< HEAD:browser/sr-RS/chunk-7QMTSIS6.js
//# sourceMappingURL=chunk-7QMTSIS6.js.map
========
//# sourceMappingURL=chunk-5C6JZAPW.js.map
>>>>>>>> 7e7d94b (Deploy dist update):browser/sr-RS/chunk-5C6JZAPW.js
