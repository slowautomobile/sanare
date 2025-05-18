import { MatIcon, MatTooltip } from "./chunk-NCTODK62.js";
import { ControlContainer } from "./chunk-LFO7H5VY.js";
import { inject, ɵsetClassDebugInfo, ɵɵadvance, ɵɵconditional, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵlistener, ɵɵnextContext, ɵɵproperty, ɵɵresetView, ɵɵrestoreView, ɵɵsanitizeUrl, ɵɵtemplate, ɵɵtext } from "./chunk-TTKC63AX.js";

// libs/ui/src/lib/components/upload-image/upload-image.component.ts
function UploadImageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "label", 7);
    ɵɵlistener("click", function UploadImageComponent_Conditional_6_Template_label_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.removeImg());
    });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "close");
    ɵɵelementEnd()()();
  }
}
var UploadImageComponent = class _UploadImageComponent {
  constructor() {
    this.controlContainer = inject(ControlContainer);
    this.isImgRemoved = false;
  }
  ngOnInit() {
    this.profilePictureControl = this.controlContainer.control?.get("profilePicture");
    this.profilePicture = this.profilePictureControl.value;
    console.log(this.profilePicture);
  }
  handleProfileImg(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.profilePictureControl.patchValue(selectedFile);
      this.profilePictureControl.updateValueAndValidity();
      this.isImgRemoved = false;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.profilePicture = fileReader.result;
      };
      fileReader.readAsDataURL(selectedFile);
    }
  }
  removeImg() {
    this.isImgRemoved = true;
    this.profilePicture = "";
    this.profilePictureControl.patchValue("");
    this.profilePictureControl.updateValueAndValidity();
  }
  static {
    this.ɵfac = function UploadImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UploadImageComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _UploadImageComponent,
      selectors: [["ui-upload-image"]],
      decls: 9,
      vars: 3,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_UserForm_uploadPhotoTooltip$$LIBS_UI_SRC_LIB_COMPONENTS_UPLOAD_IMAGE_UPLOAD_IMAGE_COMPONENT_TS_0 = goog.getMsg("Upload a photo");
          i18n_0 = MSG_EXTERNAL_UserForm_uploadPhotoTooltip$$LIBS_UI_SRC_LIB_COMPONENTS_UPLOAD_IMAGE_UPLOAD_IMAGE_COMPONENT_TS_0;
        } else {
          i18n_0 = "U\u010Ditaj fotografiju";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_UserForm_removePhotoTooltip$$LIBS_UI_SRC_LIB_COMPONENTS_UPLOAD_IMAGE_UPLOAD_IMAGE_COMPONENT_TS_1 = goog.getMsg("Remove photo");
          i18n_1 = MSG_EXTERNAL_UserForm_removePhotoTooltip$$LIBS_UI_SRC_LIB_COMPONENTS_UPLOAD_IMAGE_UPLOAD_IMAGE_COMPONENT_TS_1;
        } else {
          i18n_1 = "Ukloni fotografiju";
        }
        return [[1, "upload-image"], ["type", "file", "accept", "image/*", "id", "profileImgInput", 3, "change"], [1, "file-upload-button-wrapper"], ["for", "profileImgInput", "matTooltip", i18n_0, 1, "file-upload-button"], [1, "file-upload-button-wrapper", "remove-wrapper"], [1, "profile-img-wrapper"], [3, "src", "alt"], ["matTooltip", i18n_1, 1, "file-upload-button", 3, "click"]];
      },
      template: function UploadImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "input", 1);
          ɵɵlistener("change", function UploadImageComponent_Template_input_change_1_listener($event) {
            return ctx.handleProfileImg($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2)(3, "label", 3)(4, "mat-icon");
          ɵɵtext(5, "add_a_photo");
          ɵɵelementEnd()()();
          ɵɵtemplate(6, UploadImageComponent_Conditional_6_Template, 4, 0, "div", 4);
          ɵɵelementStart(7, "div", 5);
          ɵɵelement(8, "img", 6);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(6);
          ɵɵconditional(!ctx.isImgRemoved && ctx.profilePicture ? 6 : -1);
          ɵɵadvance(2);
          ɵɵproperty("src", ctx.profilePicture, ɵɵsanitizeUrl)("alt", ctx.profilePicture);
        }
      },
      dependencies: [MatTooltip, MatIcon],
      styles: ['.upload-image[_ngcontent-%COMP%]{position:relative;margin:0 auto 25px;border-radius:50%;width:130px;height:130px;background-image:url("./media/user-JIV5DTZW.svg");background-size:cover;background-position:center}.upload-image[_ngcontent-%COMP%]:hover   .remove-wrapper[_ngcontent-%COMP%]{opacity:1}.upload-image[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.upload-image[_ngcontent-%COMP%]   .file-upload-button-wrapper[_ngcontent-%COMP%]{position:absolute;top:93px;right:-15px;padding:3px;border-radius:50%;z-index:9999}.upload-image[_ngcontent-%COMP%]   .file-upload-button-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%}.upload-image[_ngcontent-%COMP%]   .file-upload-button-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]:hover{cursor:pointer}.upload-image[_ngcontent-%COMP%]   .file-upload-button-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]:active{transform:scale(.95)}.upload-image[_ngcontent-%COMP%]   .remove-wrapper[_ngcontent-%COMP%]{top:7px;right:-5px;opacity:0;transition:all .1s ease-in}.upload-image[_ngcontent-%COMP%]   .remove-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]{width:26px;height:26px}.upload-image[_ngcontent-%COMP%]   .remove-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]:hover{cursor:pointer}.upload-image[_ngcontent-%COMP%]   .remove-wrapper[_ngcontent-%COMP%]   .file-upload-button[_ngcontent-%COMP%]:active{transform:scale(.95)}.upload-image[_ngcontent-%COMP%]   .profile-img-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:50%;width:130px;height:130px;overflow:hidden}.upload-image[_ngcontent-%COMP%]   .profile-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@media (max-width: 599px){.upload-image[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:40px}}\n/*# sourceMappingURL=upload-image.component-FFSBKDTP.css.map */']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(UploadImageComponent, {
    className: "UploadImageComponent",
    filePath: "libs/ui/src/lib/components/upload-image/upload-image.component.ts",
    lineNumber: 12
  });
})();
export { UploadImageComponent };
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-N7W276PV.js.map