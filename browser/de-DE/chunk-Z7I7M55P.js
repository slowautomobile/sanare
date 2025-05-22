import { CdkDrag, CdkDragPlaceholder, CdkDropList, DropListTransferItemService, SelectedExercisesService, copyArrayItem, moveItemInArray } from "./chunk-M6CVVSRX.js";
import { LocalstorageService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import { MatIconButton } from "./chunk-2QWI6V4H.js";
import { MatIcon } from "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { CommonModule, inject, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵlistener, ɵɵnextContext, ɵɵproperty, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵresetView, ɵɵrestoreView, ɵɵsanitizeUrl, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate1 } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/exercises/selected-exercises-list/selected-exercises-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SelectedExercisesListComponent_For_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
function SelectedExercisesListComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 6)(2, "div", 7);
    ɵɵelement(3, "img", 8);
    ɵɵelementEnd();
    ɵɵelementStart(4, "p", 9);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 10);
    ɵɵlistener("click", function SelectedExercisesListComponent_For_4_Template_button_click_6_listener() {
      const exercise_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.removeFromSelected(exercise_r3));
    });
    ɵɵelementStart(7, "mat-icon");
    ɵɵtext(8, "close");
    ɵɵelementEnd()()();
    ɵɵtemplate(9, SelectedExercisesListComponent_For_4_div_9_Template, 1, 0, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const exercise_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("cdkDragPreviewClass", ctx_r3.previewClass);
    ɵɵadvance(3);
    ɵɵproperty("src", exercise_r3.images == null ? null : exercise_r3.images.mainImg, ɵɵsanitizeUrl)("alt", exercise_r3.name[ctx_r3.selectedLanguage]);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", exercise_r3.name[ctx_r3.selectedLanguage], " ");
  }
}
function SelectedExercisesListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 13);
    ɵɵi18n(2, 1);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14);
    ɵɵelement(4, "mat-icon", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵproperty("inline", true);
  }
}
var SelectedExercisesListComponent = class _SelectedExercisesListComponent {
  constructor() {
    this.selectedExercisesService = inject(SelectedExercisesService);
    this.transferringItemService = inject(DropListTransferItemService);
    this.localstorageService = inject(LocalstorageService);
    this.transferringItem = this.transferringItemService.transferringItem;
    this.previewClass = "custom-preview";
    this.enteredSelectedList = false;
    this.selectedExercises = this.selectedExercisesService.selectedExercises;
  }
  ngOnInit() {
    this.selectedLanguage = this._getUserLanguageToken();
  }
  drop(event) {
    if (event.previousContainer.id !== event.container.id && !event.container.data.some(item => item.id === event.previousContainer.data[event.previousIndex].id)) {
      this.selectedExercisesService.addToSelected(event.previousContainer.data[event.previousIndex]);
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.previousContainer.data[event.previousIndex].isSelected = true;
      console.log(event.previousContainer.data[event.previousIndex]);
      console.log(this.selectedExercises());
      console.log(this.transferringItem());
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.transferringItem.set(void 0);
    this.enteredSelectedList = false;
  }
  enteredSelected(event) {
    this.enteredSelectedList = true;
  }
  exitedSelected(e) {
    this.transferringItem.set(void 0);
    this.enteredSelectedList = false;
  }
  removeFromSelected(exercise) {
    console.log(this.selectedExercisesService.selectedExercises());
    this.removeCard(exercise);
    this.selectedExercisesService.removeFromSelected(exercise);
    console.log(this.selectedExercisesService.selectedExercises());
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
  _getUserLanguageToken() {
    return this.localstorageService.getToken("userLanguage")?.split("-")[0];
  }
  static {
    this.ɵfac = function SelectedExercisesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectedExercisesListComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _SelectedExercisesListComponent,
      selectors: [["sanareapp-selected-exercises-list"]],
      inputs: {
        exercises: "exercises"
      },
      decls: 6,
      vars: 2,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_SelectedExercises_listIcon$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_SELECTED_EXERCISES_LIST_SELECTED_EXERCISES_LIST_COMPONENT_TS_0 = goog.getMsg("List icon");
          i18n_0 = MSG_EXTERNAL_SelectedExercises_listIcon$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_SELECTED_EXERCISES_LIST_SELECTED_EXERCISES_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "Listensymbol";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_SelectedExercises_addExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_SELECTED_EXERCISES_LIST_SELECTED_EXERCISES_LIST_COMPONENT_TS_1 = goog.getMsg("Add exercises");
          i18n_1 = MSG_EXTERNAL_SelectedExercises_addExercise$$APPS_SANARE_APP_SRC_APP_PAGES_EXERCISES_SELECTED_EXERCISES_LIST_SELECTED_EXERCISES_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "\xDCbungen hinzuf\xFCgen";
        }
        return [["selected", "cdkDropList"], i18n_1, [1, "background-wrapper"], ["cdkDropList", "", 1, "main-wrap", 3, "cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListData"], ["cdkDrag", "", 1, "selected-cards-box", 3, "cdkDragPreviewClass"], [1, "add-exercise-placeholder"], [1, "selected-card"], [1, "img-wrapper"], [1, "selected-exercise-img", 3, "src", "alt"], [1, "selected-exercise-name", "mat-body-medium"], ["mat-icon-button", "", 3, "click"], ["class", "exercise-card-placeholder", 4, "cdkDragPlaceholder"], [1, "exercise-card-placeholder"], [1, "mat-body-large"], [1, "mat-headline-medium"], ["aria-hidden", "false", "aria-label", i18n_0, "fontIcon", "playlist_add", 3, "inline"]];
      },
      template: function SelectedExercisesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2)(1, "div", 3, 0);
          ɵɵlistener("cdkDropListDropped", function SelectedExercisesListComponent_Template_div_cdkDropListDropped_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.drop($event));
          })("cdkDropListEntered", function SelectedExercisesListComponent_Template_div_cdkDropListEntered_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.enteredSelected($event));
          })("cdkDropListExited", function SelectedExercisesListComponent_Template_div_cdkDropListExited_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.exitedSelected($event));
          });
          ɵɵrepeaterCreate(3, SelectedExercisesListComponent_For_4_Template, 10, 4, "div", 4, _forTrack0);
          ɵɵtemplate(5, SelectedExercisesListComponent_Conditional_5_Template, 5, 1, "div", 5);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("cdkDropListData", ctx.selectedExercises());
          ɵɵadvance(2);
          ɵɵrepeater(ctx.selectedExercises());
          ɵɵadvance(2);
          ɵɵconditional(ctx.selectedExercises().length === 0 && !ctx.enteredSelectedList ? 5 : -1);
        }
      },
      dependencies: [CommonModule, CdkDropList, CdkDrag, CdkDragPlaceholder, MatIcon, MatIconButton],
      styles: [".custom-preview[_ngcontent-%COMP%]{border-radius:16px}\n/*# sourceMappingURL=selected-exercises-list.component-FCQKA2C3.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(SelectedExercisesListComponent, {
    className: "SelectedExercisesListComponent",
    filePath: "apps/sanare-app/src/app/pages/exercises/selected-exercises-list/selected-exercises-list.component.ts",
    lineNumber: 39
  });
})();
export { SelectedExercisesListComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-Z7I7M55P.js.map