import { CdkDrag, CdkDragPlaceholder, CdkDropList, DropListTransferItemService, ExerciseModalComponent, ExercisesService, MatDialog, MatProgressSpinner, MatProgressSpinnerModule, OverlayScrollbarsComponent, OverlayscrollbarsModule, SelectedExercisesService, ShareStateService, ThemeManagerService, VideoPlayerComponent } from "./chunk-ESKXYVOI.js";
import { LocalstorageService, UsersService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import { MatIconButton, MatMiniFabButton } from "./chunk-2QWI6V4H.js";
import { MatIcon, MatTooltip } from "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { AsyncPipe, CommonModule, NgClass, NgStyle, Subscription, __spreadProps, __spreadValues, debounceTime, fromEvent, inject, map, output, startWith, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdeclareLet, ɵɵdefer, ɵɵdeferOnIdle, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵpipe, ɵɵpipeBind1, ɵɵproperty, ɵɵreference, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵresetView, ɵɵrestoreView, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1 } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/exercises/exercise-card/exercise-card.component.ts
function ExerciseCardComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function ExerciseCardComponent_Conditional_1_Conditional_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.removeFromFavorites(ctx_r3.exercise));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "star");
    ɵɵelementEnd()();
  }
}
function ExerciseCardComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function ExerciseCardComponent_Conditional_1_Conditional_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.addToFavorites(ctx_r3.exercise));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "star_border");
    ɵɵelementEnd()();
  }
}
function ExerciseCardComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function ExerciseCardComponent_Conditional_1_Conditional_14_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.removeFromSelected(ctx_r3.exercise));
    })("mouseenter", function ExerciseCardComponent_Conditional_1_Conditional_14_Template_button_mouseenter_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.showHoverIcon(true));
    })("mouseleave", function ExerciseCardComponent_Conditional_1_Conditional_14_Template_button_mouseleave_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.showHoverIcon(false));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("color", ctx_r3.isHovered ? "accent" : "primary");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.isHovered ? "close" : "done");
  }
}
function ExerciseCardComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ExerciseCardComponent_Conditional_1_Conditional_15_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.addToSelected(ctx_r3.exercise));
    });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add");
    ɵɵelementEnd()();
  }
}
function ExerciseCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵlistener("mouseenter", function ExerciseCardComponent_Conditional_1_Template_div_mouseenter_1_listener() {
      ɵɵrestoreView(_r1);
      const videoPlayer_r2 = ɵɵreference(3);
      return ɵɵresetView(videoPlayer_r2.onMouseEnter());
    })("mouseleave", function ExerciseCardComponent_Conditional_1_Template_div_mouseleave_1_listener() {
      ɵɵrestoreView(_r1);
      const videoPlayer_r2 = ɵɵreference(3);
      return ɵɵresetView(videoPlayer_r2.onMouseLeave());
    });
    ɵɵelement(2, "ui-video-player", 4, 0);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5)(5, "div", 6)(6, "span", 7);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 8);
    ɵɵtemplate(9, ExerciseCardComponent_Conditional_1_Conditional_9_Template, 3, 0, "button", 9)(10, ExerciseCardComponent_Conditional_1_Conditional_10_Template, 3, 0, "button", 10);
    ɵɵelementStart(11, "button", 11);
    ɵɵlistener("click", function ExerciseCardComponent_Conditional_1_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.showExerciseModal(ctx_r3.exercise.id, ctx_r3.exercise, false));
    });
    ɵɵelementStart(12, "mat-icon");
    ɵɵtext(13, "info_outline");
    ɵɵelementEnd()();
    ɵɵtemplate(14, ExerciseCardComponent_Conditional_1_Conditional_14_Template, 3, 2, "button", 12)(15, ExerciseCardComponent_Conditional_1_Conditional_15_Template, 3, 0, "button", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("videoSrc", ctx_r3.exercise.video)("thumbnail", ctx_r3.exercise.images == null ? null : ctx_r3.exercise.images.mainImg)("isModal", false);
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ctx_r3.exercise.name[ctx_r3.selectedLanguage], " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.exercise.isFavorite ? 9 : 10);
    ɵɵadvance(5);
    ɵɵconditional(ctx_r3.exercise.isSelected ? 14 : 15);
  }
}
var ExerciseCardComponent = class _ExerciseCardComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.exercisesService = inject(ExercisesService);
    this.shareStateService = inject(ShareStateService);
    this.selectedExercisesService = inject(SelectedExercisesService);
    this.usersService = inject(UsersService);
    this.localstorageService = inject(LocalstorageService);
    this.subscriptions = new Subscription();
    this.isEmptyPlaceholder = false;
    this.selectedExercise = output();
    this.removeExercise = output();
    this.favoriteExercise = output();
    this.removeFavoriteExercise = output();
    this.isHovered = false;
    this.userFavorites = this.usersService.userFavorites;
    this.userId = this.usersService.userId;
  }
  ngOnInit() {
    this.selectedLanguage = this._getUserLanguageToken();
  }
  addToSelected(exercise) {
    this.selectedExercisesService.addToSelected(exercise);
  }
  removeFromSelected(exercise) {
    this.selectedExercisesService.removeFromSelected(exercise);
  }
  selectExercise(exercise) {
    exercise.isSelected = true;
    this.selectedExercise.emit(exercise);
  }
  removeCard(exercise) {
    this.removeExercise.emit(exercise);
  }
  showHoverIcon(isHovered) {
    this.isHovered = isHovered;
  }
  _getExercise(exerciseId) {
    return this.exercisesService.getExercise(exerciseId);
  }
  showExerciseModal(exerciseId, exerciseCard, isProgramExercise) {
    const subscription = this._getExercise(exerciseId).subscribe(exercise => {
      this.dialog.open(ExerciseModalComponent, {
        data: {
          fullExercise: exercise,
          exerciseCard,
          isProgramExercise,
          selectedLang: this.selectedLanguage
        },
        width: "500px",
        // height: '736px',
        panelClass: ["custom-dialog", isProgramExercise ? "custom-shadow" : ""],
        // disableClose: isProgramExercise,
        // hasBackdrop: isProgramExercise ? false : true,
        backdropClass: isProgramExercise ? "custom-backdrop" : ""
        // enterAnimationDuration: 0,
      });
    });
    this.subscriptions.add(subscription);
  }
  addToFavorites(exercise) {
    exercise.isFavorite = true;
    this.favoriteExercise.emit(exercise);
  }
  removeFromFavorites(exercise) {
    exercise.isFavorite = false;
    this.removeFavoriteExercise.emit(exercise);
  }
  _getUserLanguageToken() {
    return this.localstorageService.getToken("userLanguage")?.split("-")[0];
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ExerciseCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExerciseCardComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ExerciseCardComponent,
      selectors: [["sanareapp-exercise-card"]],
      inputs: {
        exercise: "exercise",
        cardWrapper: "cardWrapper",
        isEmptyPlaceholder: "isEmptyPlaceholder"
      },
      outputs: {
        selectedExercise: "selectedExercise",
        removeExercise: "removeExercise",
        favoriteExercise: "favoriteExercise",
        removeFavoriteExercise: "removeFavoriteExercise"
      },
      decls: 2,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_removeFromFavoritesTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_0 = goog.getMsg("Remove from favorites");
          i18n_0 = MSG_EXTERNAL_ExerciseCard_removeFromFavoritesTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_0;
        } else {
          i18n_0 = "Ukloni iz omiljenih";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_removeFromFavoritesAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_1 = goog.getMsg("Favorite icon-button with a star icon");
          i18n_1 = MSG_EXTERNAL_ExerciseCard_removeFromFavoritesAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_1;
        } else {
          i18n_1 = "Omiljena ikona-dugme sa ikonom zvezde";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_addToFavoritesTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_2 = goog.getMsg("Add to favorites");
          i18n_2 = MSG_EXTERNAL_ExerciseCard_addToFavoritesTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_2;
        } else {
          i18n_2 = "Dodaj u omiljene";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_addToFavoritesAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_3 = goog.getMsg("Favorite icon-button with a star icon");
          i18n_3 = MSG_EXTERNAL_ExerciseCard_addToFavoritesAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_3;
        } else {
          i18n_3 = "Omiljena ikona-dugme sa ikonom zvezde";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_details$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_4 = goog.getMsg("Details");
          i18n_4 = MSG_EXTERNAL_ExerciseCard_details$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_4;
        } else {
          i18n_4 = "Detalji";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_detailsAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_5 = goog.getMsg("Info icon-button with a info icon");
          i18n_5 = MSG_EXTERNAL_ExerciseCard_detailsAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_5;
        } else {
          i18n_5 = "Info ikona-dugme sa ikonom info";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_removeExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_6 = goog.getMsg("Remove exercise");
          i18n_6 = MSG_EXTERNAL_ExerciseCard_removeExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_6;
        } else {
          i18n_6 = "Ukloni ve\u017Ebu";
        }
        let i18n_7;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_removeExerciseAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_7 = goog.getMsg("Remove icon-button with a close icon");
          i18n_7 = MSG_EXTERNAL_ExerciseCard_removeExerciseAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_7;
        } else {
          i18n_7 = "Ukloni ikonu-dugme sa ikonom za zatvaranje";
        }
        let i18n_8;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_addExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_8 = goog.getMsg("Add exercise");
          i18n_8 = MSG_EXTERNAL_ExerciseCard_addExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_8;
        } else {
          i18n_8 = "Dodaj ve\u017Ebu";
        }
        let i18n_9;
        if (false) {
          const MSG_EXTERNAL_ExerciseCard_addExerciseAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_9 = goog.getMsg("Add icon button with a add icon");
          i18n_9 = MSG_EXTERNAL_ExerciseCard_addExerciseAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISE_CARD_EXERCISE_CARD_COMPONENT_TS_9;
        } else {
          i18n_9 = "Dodaj dugme ikone sa ikonom dodavanja";
        }
        return [["videoPlayer", ""], [3, "ngClass"], [1, "card"], [1, "card-head", 3, "mouseenter", "mouseleave"], [3, "videoSrc", "thumbnail", "isModal"], [1, "card-body"], [1, "exercise-name"], [1, "multi-line-text"], [1, "card-icons"], ["mat-icon-button", "", "matTooltip", i18n_0, "aria-label", i18n_1, 1, "favorite-exercise-star"], ["mat-icon-button", "", "matTooltip", i18n_2, "aria-label", i18n_3], ["mat-icon-button", "", "matTooltip", i18n_4, "aria-label", i18n_5, 3, "click"], ["mat-mini-fab", "", "matTooltip", i18n_6, "aria-label", i18n_7, 1, "toggleDoneRemoveBtn", 3, "color"], ["mat-icon-button", "", "matTooltip", i18n_8, "color", "primary", "aria-label", i18n_9], ["mat-icon-button", "", "matTooltip", i18n_0, "aria-label", i18n_1, 1, "favorite-exercise-star", 3, "click"], ["mat-icon-button", "", "matTooltip", i18n_2, "aria-label", i18n_3, 3, "click"], ["mat-mini-fab", "", "matTooltip", i18n_6, "aria-label", i18n_7, 1, "toggleDoneRemoveBtn", 3, "click", "mouseenter", "mouseleave", "color"], ["mat-icon-button", "", "matTooltip", i18n_8, "color", "primary", "aria-label", i18n_9, 3, "click"]];
      },
      template: function ExerciseCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, ExerciseCardComponent_Conditional_1_Template, 16, 6, "div", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ctx.cardWrapper);
          ɵɵadvance();
          ɵɵconditional(!ctx.isEmptyPlaceholder ? 1 : -1);
        }
      },
      dependencies: [NgClass, MatIconButton, MatTooltip, MatIcon, MatMiniFabButton, VideoPlayerComponent],
      styles: ["[_nghost-%COMP%]{border-radius:16px}\n/*# sourceMappingURL=exercise-card.component-Z5PANOZ3.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ExerciseCardComponent, {
    className: "ExerciseCardComponent",
    filePath: "apps/sanare-app/src/app/pages/exercises/exercise-card/exercise-card.component.ts",
    lineNumber: 33
  });
})();

// apps/sanare-app/src/app/pages/exercises/exercises-grid/exercises-grid.component.ts
var ExercisesGridComponent_For_7_Defer_2_DepsFn = () => [CdkDrag, CdkDragPlaceholder, ExerciseCardComponent];
var _forTrack0 = ($index, $item) => $item.id;
function ExercisesGridComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "span");
    ɵɵi18n(2, 0);
    ɵɵelementEnd()();
  }
}
function ExercisesGridComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "mat-spinner", 5);
    ɵɵelementEnd();
  }
}
function ExercisesGridComponent_For_7_Defer_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
}
function ExercisesGridComponent_For_7_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "sanareapp-exercise-card", 7);
    ɵɵlistener("removeExercise", function ExercisesGridComponent_For_7_Defer_0_Template_sanareapp_exercise_card_removeExercise_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.removeCard($event));
    })("favoriteExercise", function ExercisesGridComponent_For_7_Defer_0_Template_sanareapp_exercise_card_favoriteExercise_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.addToFavorites($event));
    })("removeFavoriteExercise", function ExercisesGridComponent_For_7_Defer_0_Template_sanareapp_exercise_card_removeFavoriteExercise_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.removeFromFavorites($event));
    })("cdkDragStarted", function ExercisesGridComponent_For_7_Defer_0_Template_sanareapp_exercise_card_cdkDragStarted_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onDragStarted());
    })("cdkDragEnded", function ExercisesGridComponent_For_7_Defer_0_Template_sanareapp_exercise_card_cdkDragEnded_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onDragEnded());
    });
    ɵɵtemplate(1, ExercisesGridComponent_For_7_Defer_0_div_1_Template, 1, 0, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const exercise_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("isEmptyPlaceholder", false)("exercise", exercise_r4)("cdkDragData", exercise_r4);
  }
}
function ExercisesGridComponent_For_7_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function ExercisesGridComponent_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "sanareapp-exercise-card", 11);
    ɵɵtext(2, " >");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const exercise_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("exercise", exercise_r4);
  }
}
function ExercisesGridComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExercisesGridComponent_For_7_Defer_0_Template, 2, 3)(1, ExercisesGridComponent_For_7_DeferPlaceholder_1_Template, 1, 0);
    ɵɵdefer(2, 0, ExercisesGridComponent_For_7_Defer_2_DepsFn, null, 1);
    ɵɵdeferOnIdle();
    ɵɵtemplate(4, ExercisesGridComponent_For_7_Conditional_4_Template, 3, 1, "div", 6);
  }
  if (rf & 2) {
    const exercise_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵconditional(ctx_r2.transferringItem() === exercise_r4 ? 4 : -1);
  }
}
var ExercisesGridComponent = class _ExercisesGridComponent {
  constructor() {
    this.themeManager = inject(ThemeManagerService);
    this.shareStateService = inject(ShareStateService);
    this.selectedExercisesService = inject(SelectedExercisesService);
    this.usersService = inject(UsersService);
    this.transferringItemService = inject(DropListTransferItemService);
    this.isFetchingData = this.shareStateService.isFetchingData;
    this.transferringItem = this.transferringItemService.transferringItem;
    this.userFavorites = this.usersService.userFavorites;
    this.userId = this.usersService.userId;
    this.selectedExercises = this.selectedExercisesService.selectedExercises;
    this.themeSignal = this.themeManager.themeSignal;
    this.subscriptions = new Subscription();
    this.isDragging = false;
  }
  ngOnInit() {
    this.windowSize$ = fromEvent(window, "resize").pipe(startWith(null),
    // Emit an initial value to trigger the styles on component initialization
    debounceTime(200), map(() => window.innerWidth));
  }
  // Dynamically change filter drawer and exercise display grid behavior
  getGridStyle(windowSize) {
    const effectiveSize = windowSize ?? 0;
    this.drawerOpen = this.shareStateService.drawerSignal();
    if (effectiveSize < 1510 && effectiveSize > 1338 && this.drawerOpen) {
      return {
        "grid-template-columns": "repeat(3, 1fr)"
      };
    } else if (effectiveSize < 1338 && effectiveSize > 1168 && this.drawerOpen) {
      return {
        "grid-template-columns": "repeat(2, 1fr)"
      };
    } else {
      return {};
    }
  }
  entered() {
    this.transferringItem.set(void 0);
  }
  exited(e) {
    this.transferringItem.set(e.item.data);
    console.log(this.transferringItem());
  }
  noReturnPredicate() {
    return false;
  }
  // SEEMS THAT IT WORKS, REFACTOR THESE TWO FUNCTIONS IN ONE AND REMOVE UNNECESSARY CODE
  removeCard(cardToRemove) {
    let indexToRemove;
    this.selectedExercises().some((selectedExercise, i) => {
      if (selectedExercise.id === cardToRemove.id) {
        indexToRemove = i;
      }
    });
    this._resetCardState(cardToRemove, indexToRemove);
  }
  addToFavorites(exercise) {
    this.userFavorites.update(favorites => {
      const updatedFavorites = __spreadProps(__spreadValues({}, favorites), {
        favExercises: [...favorites.favExercises, exercise.id]
      });
      this._updateFavorites(this.userId(), updatedFavorites);
      return updatedFavorites;
    });
  }
  removeFromFavorites(exercise) {
    const updatedFavExercises = this.userFavorites().favExercises.filter(favExerciseId => favExerciseId !== exercise.id);
    this.userFavorites.update(favorites => {
      const updatedFavorites = __spreadProps(__spreadValues({}, favorites), {
        favExercises: [...updatedFavExercises]
      });
      return updatedFavorites;
    });
    this._updateFavorites(this.userId(), this.userFavorites());
  }
  // Add/remove favorite exercises
  _updateFavorites(userId, updatedFavorites) {
    const subscription = this.usersService.updateFavorites(userId, updatedFavorites).subscribe(favorites => console.log(favorites));
    this.subscriptions.add(subscription);
  }
  _resetCardState(cardToReset, indexToRemove) {
    if (this.exercises.length === 0) {
      return;
    }
    this.exercises.find(exerciseToReset => {
      if (exerciseToReset.id === cardToReset.id) {
        exerciseToReset.isSelected = false;
      }
    });
  }
  onDragStarted() {
    this.isDragging = true;
  }
  onDragEnded() {
    this.isDragging = false;
  }
  static {
    this.ɵfac = function ExercisesGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExercisesGridComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ExercisesGridComponent,
      selectors: [["sanareapp-exercises-grid"]],
      inputs: {
        exercises: "exercises"
      },
      decls: 8,
      vars: 8,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ExercisesGrid_noExercisesFoundMessage$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISES_GRID_EXERCISES_GRID_COMPONENT_TS_0 = goog.getMsg("No exercises found for your search");
          i18n_0 = MSG_EXTERNAL_ExercisesGrid_noExercisesFoundMessage$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_EXERCISES_GRID_EXERCISES_GRID_COMPONENT_TS_0;
        } else {
          i18n_0 = "Nema prona\u0111enih ve\u017Ebi za va\u0161u pretragu";
        }
        return [i18n_0, ["overlay-scrollbars", "", 1, "grid-container", 3, "options", "defer"], [1, "noExercisesFound"], [1, "fetchingDataSpinner"], ["cdkDropList", "", "cdkDropListSortingDisabled", "", 1, "exercise-cards", 3, "cdkDropListEntered", "cdkDropListExited", "cdkDropListData", "ngStyle", "cdkDropListEnterPredicate"], ["diameter", "50"], [1, "static-placeholder"], ["cardWrapper", "wrap-default", "cdkDrag", "", 3, "removeExercise", "favoriteExercise", "removeFavoriteExercise", "cdkDragStarted", "cdkDragEnded", "isEmptyPlaceholder", "exercise", "cdkDragData"], ["class", "exercise-card-placeholder", 4, "cdkDragPlaceholder"], [1, "exercise-card-placeholder"], [1, "exercise-card-skeleton"], ["cardWrapper", "wrap-default", 3, "exercise"]];
      },
      template: function ExercisesGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵdeclareLet(0);
          ɵɵelementStart(1, "div", 1);
          ɵɵtemplate(2, ExercisesGridComponent_Conditional_2_Template, 3, 0, "div", 2)(3, ExercisesGridComponent_Conditional_3_Template, 2, 0, "div", 3);
          ɵɵelementStart(4, "div", 4);
          ɵɵpipe(5, "async");
          ɵɵlistener("cdkDropListEntered", function ExercisesGridComponent_Template_div_cdkDropListEntered_4_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.entered());
          })("cdkDropListExited", function ExercisesGridComponent_Template_div_cdkDropListExited_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.exited($event));
          });
          ɵɵrepeaterCreate(6, ExercisesGridComponent_For_7_Template, 5, 1, null, null, _forTrack0);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const isFetching_r5 = ctx.isFetchingData();
          ɵɵadvance();
          ɵɵproperty("options", ctx.themeSignal());
          ɵɵadvance();
          ɵɵconditional((ctx.exercises == null ? null : ctx.exercises.length) === 0 ? 2 : -1);
          ɵɵadvance();
          ɵɵconditional(isFetching_r5 ? 3 : -1);
          ɵɵadvance();
          ɵɵproperty("cdkDropListData", ctx.exercises)("ngStyle", ctx.getGridStyle(ɵɵpipeBind1(5, 6, ctx.windowSize$)))("cdkDropListEnterPredicate", ctx.noReturnPredicate);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.exercises);
        }
      },
      dependencies: [CommonModule, NgStyle, AsyncPipe, CdkDropList, OverlayscrollbarsModule, OverlayScrollbarsComponent, ExerciseCardComponent, MatProgressSpinnerModule, MatProgressSpinner],
      styles: [".noExercisesFound[_ngcontent-%COMP%]{text-align:center;margin:32px 0}\n/*# sourceMappingURL=exercises-grid.component-SVEJ6XE6.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ExercisesGridComponent, {
    className: "ExercisesGridComponent",
    filePath: "apps/sanare-app/src/app/pages/exercises/exercises-grid/exercises-grid.component.ts",
    lineNumber: 48
  });
})();
export { ExercisesGridComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-N5VV42QC.js.map