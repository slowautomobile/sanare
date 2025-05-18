import { ActivePageService, ClientFullEditFormComponent, PageToolbarComponent, ShareStateService } from "./chunk-AZCPHFRJ.js";
import "./chunk-BMXRH6OH.js";
import "./chunk-7Q5ROX6O.js";
import { ActivatedRoute, MatSnackBar, Router, UsersService } from "./chunk-A2XSFK7T.js";
import "./chunk-ETCGSIPQ.js";
import "./chunk-N7W276PV.js";
import "./chunk-NCTODK62.js";
import { FormBuilder, FormGroupDirective, FormsModule, NgControlStatusGroup, ReactiveFormsModule, Validators, ɵNgNoValidate } from "./chunk-LFO7H5VY.js";
import "./chunk-6KEP5RK3.js";
import "./chunk-CV435JUL.js";
import "./chunk-VZWK6WXM.js";
import { Subscription, inject, lastValueFrom, take, timer, ɵsetClassDebugInfo, ɵɵadvance, ɵɵdefineComponent, ɵɵelement, ɵɵelementEnd, ɵɵelementStart, ɵɵlistener, ɵɵproperty } from "./chunk-TTKC63AX.js";

// apps/sanare-app/src/app/pages/users/user-edit-form/user-edit-form.component.ts
var UserEditFormComponent = class _UserEditFormComponent {
  constructor() {
    this.formBuilder = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.usersService = inject(UsersService);
    this.router = inject(Router);
    this._snackBar = inject(MatSnackBar);
    this.shareStateService = inject(ShareStateService);
    this.activePageTitle = inject(ActivePageService);
    this.pageTitle = this.activePageTitle.pageTitle;
    this.backNavigation = this.activePageTitle.backNavigation;
    this.userName = this.usersService.userName;
    this.subscriptions = new Subscription();
    this.editMode = false;
    this.userId = this.usersService.userId;
    this.isLoading = this.shareStateService.isLoading;
  }
  ngOnInit() {
    this.pageTitle.set("Korisni\u010Dki profil");
    this.backNavigation.set(true);
    this._initForm();
    this._checkEditMode();
  }
  // For the sake of form reusability, 'clientInfo' will remain as field name
  // FINISH THIS SO VALUE CAN BE SET AND SAVED !!! FINISH PROFILE EDIT PAGE ! ! ! !
  _initForm() {
    this.form = this.formBuilder.group({
      id: [""],
      // name: [''],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      profilePicture: [""],
      address: this.formBuilder.group({
        street: [""],
        streetNumber: [""],
        city: [""],
        zipCode: [""],
        country: [""]
      }),
      credentials: this.formBuilder.group({
        title: [""],
        qualifications: [""],
        // qualifications: new FormControl(),
        licences: [""],
        // licences: this.formBuilder.array([]),
        company: [""]
      }),
      favorites: this.formBuilder.group({
        favExercises: [""],
        favPrograms: [""]
      })
    });
  }
  _checkEditMode() {
    if (this.userId()) {
      this.editMode = true;
      const subscription = this.usersService.getUser(this.userId()).subscribe(user => {
        const profileImg = user.profilePicture;
        console.log(user);
        this.form.get("id")?.setValue(this.userId());
        this.form.get("firstName")?.setValue(user.firstName);
        this.form.get("lastName")?.setValue(user.lastName);
        this.form.get("email")?.setValue(user.email);
        this.form.get("phone")?.setValue(user.phone);
        this.form.get("profilePicture")?.setValue(user.profilePicture);
        this.form.get("address.street")?.setValue(user.address?.street);
        this.form.get("address.streetNumber")?.setValue(user.address?.streetNumber);
        this.form.get("address.city")?.setValue(user.address?.city);
        this.form.get("address.zipCode")?.setValue(user.address?.zipCode);
        this.form.get("address.country")?.setValue(user.address?.country);
        this.form.get("credentials.title")?.setValue(user.credentials?.title);
        this.form.get("credentials.qualifications")?.setValue(user.credentials?.qualifications);
        this.form.get("credentials.licences")?.setValue(user.credentials?.licences);
        this.form.get("credentials.company")?.setValue(user.credentials?.company);
        this.form.get("favorites.favExercises")?.setValue(user.favorites?.favExercises);
        this.form.get("favorites.favPrograms")?.setValue(user.favorites?.favPrograms);
      });
      this.subscriptions.add(subscription);
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this._snackBar.open("Molimo vas da popunite obavezna polja", "", {
        duration: 2e3,
        panelClass: ["custom-snackbar-style"]
      });
      return;
    }
    this.isLoading.set(true);
    console.log(this.form);
    this.userName.set(this.userForm["firstName"].value + " " + this.userForm["lastName"].value);
    const userFormData = new FormData();
    Object.keys(this.userForm).map(key => {
      if (key === "address") {
        Object.keys(this.userForm[key].value).map(subKey => {
          const combinedKey = `${key}.${subKey}`;
          userFormData.append(subKey, this.form.get(combinedKey)?.value);
        });
      } else if (key === "credentials") {
        Object.keys(this.userForm[key].value).map(subKey => {
          const combinedKey = `${key}.${subKey}`;
          userFormData.append(subKey, this.form.get(combinedKey)?.value);
        });
      } else if (key === "favorites") {
        Object.keys(this.userForm[key].value).map(subKey => {
          const combinedKey = `${key}.${subKey}`;
          userFormData.append(subKey, this.form.get(combinedKey)?.value);
        });
      } else {
        userFormData.append(key, this.userForm[key].value);
      }
    });
    if (this.editMode) {
      this._updateUser(userFormData);
    }
  }
  _updateUser(userFormData) {
    const subscription = this.usersService.updateUser(userFormData, this.userId()).subscribe(createdUser => {
      this.usersService.getFavorites(this.userId()).pipe(take(1)).subscribe(() => console.log("Thumbnail updated"));
      console.log(createdUser);
      this._snackBar.open("Korisnik a\u017Euriran", "", {
        duration: 2e3,
        panelClass: ["custom-snackbar-style"]
      });
      lastValueFrom(timer(1e3)).then(() => {
        this.isLoading.set(false);
        this.router.navigateByUrl(`dashboard`);
      });
    });
    this.subscriptions.add(subscription);
  }
  onBack() {
    this.router.navigateByUrl("");
  }
  get userForm() {
    return this.form.controls;
  }
  ngOnDestroy() {
    this.backNavigation.set(false);
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function UserEditFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserEditFormComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _UserEditFormComponent,
      selectors: [["sanareapp-edit-form"]],
      decls: 4,
      vars: 4,
      consts: [[1, "page-container"], [3, "cancelEvent", "submitEvent", "pageTitle", "cancelButton", "submitButton"], [1, "form-wrapper", 3, "formGroup"]],
      template: function UserEditFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "ui-page-toolbar", 1);
          ɵɵlistener("cancelEvent", function UserEditFormComponent_Template_ui_page_toolbar_cancelEvent_1_listener() {
            return ctx.onBack();
          })("submitEvent", function UserEditFormComponent_Template_ui_page_toolbar_submitEvent_1_listener() {
            return ctx.onSubmit();
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "form", 2);
          ɵɵelement(3, "ui-client-full-edit-form");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("pageTitle", ctx.pageTitle())("cancelButton", true)("submitButton", true);
          ɵɵadvance();
          ɵɵproperty("formGroup", ctx.form);
        }
      },
      dependencies: [PageToolbarComponent, ClientFullEditFormComponent, FormsModule, ɵNgNoValidate, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective],
      styles: [".user-title[_ngcontent-%COMP%]{margin-top:6px}.page-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:16px}.page-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{flex:5}.page-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{flex:2}@media (max-width: 599px){.page-container[_ngcontent-%COMP%]{width:100%;max-width:600px;height:fit-content;gap:16px;padding:24px}.page-container[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%]{order:1;width:100%}.page-container[_ngcontent-%COMP%]   ui-page-toolbar[_ngcontent-%COMP%]{order:2}}\n/*# sourceMappingURL=user-edit-form.component-H2J2EEVQ.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(UserEditFormComponent, {
    className: "UserEditFormComponent",
    filePath: "apps/sanare-app/src/app/pages/users/user-edit-form/user-edit-form.component.ts",
    lineNumber: 32
  });
})();
export { UserEditFormComponent };
/**i18n:e33dda9241aa0d3f81605574177eca303a560132442e585b3107f4f1b4a47a86*/
//# sourceMappingURL=chunk-PAIY5LIT.js.map