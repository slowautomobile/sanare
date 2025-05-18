import { BasicProgramsTableComponent, ExercisesService, MatChip, MatChipSet, MatChipsModule, MatDialog, MatTableDataSource, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, ProgramModalComponent, ProgramsService, ThemeManagerService } from "./chunk-M5HED6BD.js";
import "./chunk-7Q5ROX6O.js";
import { LocalstorageService } from "./chunk-A2XSFK7T.js";
import "./chunk-N7W276PV.js";
import "./chunk-6KEP5RK3.js";
import "./chunk-BMXRH6OH.js";
import "./chunk-ETCGSIPQ.js";
import "./chunk-NCTODK62.js";
import "./chunk-LFO7H5VY.js";
import "./chunk-CV435JUL.js";
import "./chunk-VZWK6WXM.js";
import { CommonModule, Location, Subscription, inject, input, ɵsetClassDebugInfo, ɵɵadvance, ɵɵdefer, ɵɵdeferEnableTimerScheduling, ɵɵdeferOnIdle, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵproperty, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵrepeaterTrackByIdentity, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate } from "./chunk-TTKC63AX.js";

// apps/sanare-app/src/app/pages/exercises/full-exercise/full-exercise.component.ts
var FullExerciseComponent_Defer_4_DepsFn = () => [import("./chunk-KHCTXGYH.js").then(m => m.VideoPlayerComponent)];
function FullExerciseComponent_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵelement(1, "ui-video-player", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("videoSrc", ctx_r0.exercise.video)("thumbnail", ctx_r0.exercise.images == null ? null : ctx_r0.exercise.images.mainImg)("isModal", true);
  }
}
function FullExerciseComponent_DeferPlaceholder_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "div", 22);
    ɵɵelementEnd();
  }
}
function FullExerciseComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const muscle_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(muscle_r2);
  }
}
function FullExerciseComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bodyArea_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(bodyArea_r3.translations == null ? null : bodyArea_r3.translations[ctx_r0.selectedLanguage]);
  }
}
function FullExerciseComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const movement_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(movement_r4.translations == null ? null : movement_r4.translations[ctx_r0.selectedLanguage]);
  }
}
function FullExerciseComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const startingPosition_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(startingPosition_r5.translations == null ? null : startingPosition_r5.translations[ctx_r0.selectedLanguage]);
  }
}
function FullExerciseComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-chip", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const equipment_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(equipment_r6.translations[ctx_r0.selectedLanguage]);
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
  }
  ngOnInit() {
    this.selectedLanguage = this._getUserLanguageToken();
    this.exercisesService.getExercise(this.exerciseId()).subscribe(exercise => {
      this.exercise = exercise;
      this.dataSourceAllPrograms.data = exercise.programs;
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
          title: "Program info",
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
      decls: 51,
      vars: 7,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_exerciseName$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_0 = goog.getMsg("Exercise name: ");
          i18n_0 = MSG_EXTERNAL_ExerciseModal_exerciseName$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_0;
        } else {
          i18n_0 = "Exercise name: ";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_exerciseDescription$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_1 = goog.getMsg("Description: ");
          i18n_1 = MSG_EXTERNAL_ExerciseModal_exerciseDescription$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_1;
        } else {
          i18n_1 = "Description: ";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_muscles$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_2 = goog.getMsg("Muscles: ");
          i18n_2 = MSG_EXTERNAL_ExerciseModal_muscles$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_2;
        } else {
          i18n_2 = "Muscles: ";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_bodyAreas$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_3 = goog.getMsg("Body areas: ");
          i18n_3 = MSG_EXTERNAL_ExerciseModal_bodyAreas$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_3;
        } else {
          i18n_3 = "Body areas: ";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_movements$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_4 = goog.getMsg("Movements: ");
          i18n_4 = MSG_EXTERNAL_ExerciseModal_movements$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_4;
        } else {
          i18n_4 = "Movements: ";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_startingPositions$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_5 = goog.getMsg("Starting positions: ");
          i18n_5 = MSG_EXTERNAL_ExerciseModal_startingPositions$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_5;
        } else {
          i18n_5 = "Starting positions: ";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_ExerciseModal_equipment$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_6 = goog.getMsg("Equipment: ");
          i18n_6 = MSG_EXTERNAL_ExerciseModal_equipment$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_FULL_EXERCISE_FULL_EXERCISE_COMPONENT_TS_6;
        } else {
          i18n_6 = "Equipment: ";
        }
        return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [500], [3, "cancelEvent", "pageType", "editMode"], [1, "content-container"], ["overlay-scrollbars", "", 1, "exercise-info-wrapper", 3, "options", "defer"], [1, "info-flex-container"], [1, "dialog-content-wrapper"], [1, "category-labels"], [1, "label"], [1, "category-value"], [1, "chips-category"], [1, "programs-wrapper"], [1, "ui-programs-table", 3, "viewProgramEvent", "dataSource", "isClient"], [1, "exercise-video-wrapper"], [3, "videoSrc", "thumbnail", "isModal"], [1, "video-skeleton-wrapper"], [1, "video-skeleton"]];
      },
      template: function FullExerciseComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ui-page-toolbar", 8);
          ɵɵlistener("cancelEvent", function FullExerciseComponent_Template_ui_page_toolbar_cancelEvent_0_listener() {
            return ctx.onBack();
          });
          ɵɵelementEnd();
          ɵɵelementStart(1, "div", 9);
          ɵɵtemplate(2, FullExerciseComponent_Defer_2_Template, 2, 3)(3, FullExerciseComponent_DeferPlaceholder_3_Template, 2, 0);
          ɵɵdefer(4, 2, FullExerciseComponent_Defer_4_DepsFn, null, 3, null, null, 7, ɵɵdeferEnableTimerScheduling);
          ɵɵdeferOnIdle();
          ɵɵelementStart(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "span", 14);
          ɵɵi18n(11, 0);
          ɵɵelementEnd();
          ɵɵelementStart(12, "span", 15);
          ɵɵtext(13);
          ɵɵelementEnd()();
          ɵɵelementStart(14, "div", 13)(15, "span", 14);
          ɵɵi18n(16, 1);
          ɵɵelementEnd();
          ɵɵelementStart(17, "span", 15);
          ɵɵtext(18);
          ɵɵelementEnd()();
          ɵɵelementStart(19, "div", 13)(20, "span", 14);
          ɵɵi18n(21, 2);
          ɵɵelementEnd();
          ɵɵelementStart(22, "mat-chip-set");
          ɵɵrepeaterCreate(23, FullExerciseComponent_For_24_Template, 2, 1, "mat-chip", 16, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()();
          ɵɵelementStart(25, "div", 13)(26, "span", 14);
          ɵɵi18n(27, 3);
          ɵɵelementEnd();
          ɵɵelementStart(28, "mat-chip-set");
          ɵɵrepeaterCreate(29, FullExerciseComponent_For_30_Template, 2, 1, "mat-chip", 16, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()();
          ɵɵelementStart(31, "div", 13)(32, "span", 14);
          ɵɵi18n(33, 4);
          ɵɵelementEnd();
          ɵɵelementStart(34, "mat-chip-set");
          ɵɵrepeaterCreate(35, FullExerciseComponent_For_36_Template, 2, 1, "mat-chip", 16, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()();
          ɵɵelementStart(37, "div", 13)(38, "span", 14);
          ɵɵi18n(39, 5);
          ɵɵelementEnd();
          ɵɵelementStart(40, "mat-chip-set");
          ɵɵrepeaterCreate(41, FullExerciseComponent_For_42_Template, 2, 1, "mat-chip", 16, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()();
          ɵɵelementStart(43, "div", 13)(44, "span", 14);
          ɵɵi18n(45, 6);
          ɵɵelementEnd();
          ɵɵelementStart(46, "mat-chip-set");
          ɵɵrepeaterCreate(47, FullExerciseComponent_For_48_Template, 2, 1, "mat-chip", 16, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd()()();
          ɵɵelementStart(49, "div", 17)(50, "ui-basic-programs-table", 18);
          ɵɵlistener("viewProgramEvent", function FullExerciseComponent_Template_ui_basic_programs_table_viewProgramEvent_50_listener($event) {
            return ctx.viewProgramModal($event);
          });
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵproperty("pageType", "exercise")("editMode", true);
          ɵɵadvance(6);
          ɵɵproperty("options", ctx.themeSignal());
          ɵɵadvance(7);
          ɵɵtextInterpolate(ctx.exercise.name[ctx.selectedLanguage]);
          ɵɵadvance(5);
          ɵɵtextInterpolate(ctx.exercise.description[ctx.selectedLanguage]);
          ɵɵadvance(5);
          ɵɵrepeater(ctx.exercise.muscles);
          ɵɵadvance(6);
          ɵɵrepeater(ctx.exercise.bodyAreas);
          ɵɵadvance(6);
          ɵɵrepeater(ctx.exercise.movements);
          ɵɵadvance(6);
          ɵɵrepeater(ctx.exercise.startingPositions);
          ɵɵadvance(6);
          ɵɵrepeater(ctx.exercise.equipments);
          ɵɵadvance(3);
          ɵɵproperty("dataSource", ctx.dataSourceAllPrograms)("isClient", false);
        }
      },
      dependencies: [CommonModule, PageToolbarComponent, MatChipsModule, MatChip, MatChipSet, OverlayscrollbarsModule, OverlayScrollbarsComponent, BasicProgramsTableComponent],
      styles: ['.content-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;gap:16px}.content-container[_ngcontent-%COMP%]   .exercise-video-wrapper[_ngcontent-%COMP%]{flex:1 1 0;height:100%;border-radius:16px}.content-container[_ngcontent-%COMP%]   .video-skeleton-wrapper[_ngcontent-%COMP%]{flex:1 1 0}.content-container[_ngcontent-%COMP%]   .video-skeleton-wrapper[_ngcontent-%COMP%]   .video-skeleton[_ngcontent-%COMP%]{position:relative;aspect-ratio:1/1;border-radius:16px;overflow:hidden}.content-container[_ngcontent-%COMP%]   .video-skeleton-wrapper[_ngcontent-%COMP%]   .video-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]{flex:2 1 0;height:calc(100vh - 166px);overflow:hidden;min-width:0}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%]   .exercise-info-wrapper[_ngcontent-%COMP%]   .info-flex-container[_ngcontent-%COMP%]   .programs-wrapper[_ngcontent-%COMP%]{border-radius:16px;padding:16px}\n/*# sourceMappingURL=full-exercise.component-3BRFOKN7.css.map */'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(FullExerciseComponent, {
    className: "FullExerciseComponent",
    filePath: "apps/sanare-app/src/app/pages/exercises/full-exercise/full-exercise.component.ts",
    lineNumber: 46
  });
})();
export { FullExerciseComponent };
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-GWUUA6NE.js.map