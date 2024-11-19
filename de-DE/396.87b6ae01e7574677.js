"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[396],{8396:(v,l,r)=>{r.r(l),r.d(l,{UserEditFormComponent:()=>_});var t=r(4438),a=r(9417),c=r(5245),u=r(6100),m=r(5416),f=r(8359),h=r(3207),p=r(1584),d=r(9828),g=r(7660);let _=(()=>{class n{constructor(){this.formBuilder=(0,t.WQX)(a.ok),this.route=(0,t.WQX)(c.nX),this.usersService=(0,t.WQX)(u.gs),this.router=(0,t.WQX)(c.Ix),this._snackBar=(0,t.WQX)(m.UG),this.shareStateService=(0,t.WQX)(g.kN),this.subscriptions=new f.yU,this.editMode=!1,this.userId=this.usersService.userId,this.pageTitle="Benutzerprofil",this.isLoading=this.shareStateService.isLoading}ngOnInit(){this._initForm(),this._checkEditMode()}_initForm(){this.form=this.formBuilder.group({id:[""],firstName:["",a.k0.required],lastName:["",a.k0.required],email:["",a.k0.required],phone:["",a.k0.required],profilePicture:[""],address:this.formBuilder.group({street:[""],streetNumber:[""],city:[""],zipCode:[""],country:[""]}),credentials:this.formBuilder.group({title:[""],qualifications:[""],licences:[""],company:[""]}),favorites:this.formBuilder.group({favExercises:[""],favPrograms:[""]})})}_checkEditMode(){if(this.userId()){this.editMode=!0;const i=this.usersService.getUser(this.userId()).subscribe(e=>{console.log(e),this.form.get("id")?.setValue(this.userId()),this.form.get("firstName")?.setValue(e.firstName),this.form.get("lastName")?.setValue(e.lastName),this.form.get("email")?.setValue(e.email),this.form.get("phone")?.setValue(e.phone),this.form.get("profilePicture")?.setValue(e.profilePicture),this.form.get("address.street")?.setValue(e.address?.street),this.form.get("address.streetNumber")?.setValue(e.address?.streetNumber),this.form.get("address.city")?.setValue(e.address?.city),this.form.get("address.zipCode")?.setValue(e.address?.zipCode),this.form.get("address.country")?.setValue(e.address?.country),this.form.get("credentials.title")?.setValue(e.credentials?.title),this.form.get("credentials.qualifications")?.setValue(e.credentials?.qualifications),this.form.get("credentials.licences")?.setValue(e.credentials?.licences),this.form.get("credentials.company")?.setValue(e.credentials?.company),this.form.get("favorites.favExercises")?.setValue(e.favorites?.favExercises),this.form.get("favorites.favPrograms")?.setValue(e.favorites?.favPrograms)});this.subscriptions.add(i)}}onSubmit(){if(this.form.invalid)return void this._snackBar.open("Bitte f\xFCllen Sie die erforderlichen Felder aus","",{duration:2e3,panelClass:["custom-snackbar-style"]});this.isLoading.set(!0),console.log(this.form);const i=new FormData;Object.keys(this.userForm).map(e=>{"address"===e?Object.keys(this.userForm[e].value).map(s=>{const o=`${e}.${s}`;i.append(s,this.form.get(o)?.value)}):"credentials"===e?Object.keys(this.userForm[e].value).map(s=>{const o=`${e}.${s}`;i.append(s,this.form.get(o)?.value)}):"favorites"===e?Object.keys(this.userForm[e].value).map(s=>{const o=`${e}.${s}`;i.append(s,this.form.get(o)?.value)}):i.append(e,this.userForm[e].value)}),this.editMode&&this._updateUser(i)}_updateUser(i){const e=this.usersService.updateUser(i,this.userId()).subscribe(s=>{console.log(s),this._snackBar.open("Benutzer aktualisiert","",{duration:2e3,panelClass:["custom-snackbar-style"]}),(0,h.s)((0,p.O)(1e3)).then(()=>{this.isLoading.set(!1),this.router.navigateByUrl("dashboard")})});this.subscriptions.add(e)}onBack(){this.router.navigateByUrl("")}get userForm(){return this.form.controls}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["sanareapp-edit-form"]],standalone:!0,features:[t.aNF],decls:4,vars:4,consts:[[3,"cancelEvent","submitEvent","pageTitle","cancelButton","submitButton"],[3,"formGroup"],[1,"form-wrapper"]],template:function(e,s){1&e&&(t.j41(0,"ui-page-toolbar",0),t.bIt("cancelEvent",function(){return s.onBack()})("submitEvent",function(){return s.onSubmit()}),t.k0s(),t.j41(1,"form",1)(2,"div",2),t.nrm(3,"ui-client-full-edit-form"),t.k0s()()),2&e&&(t.Y8G("pageTitle",s.pageTitle)("cancelButton",!0)("submitButton",!0),t.R7$(),t.Y8G("formGroup",s.form))},dependencies:[d.YL,d.oD,a.YN,a.qT,a.cb,a.X1,a.j4],styles:[".user-title[_ngcontent-%COMP%]{margin-top:6px}.form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}.form-wrapper[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{flex:5}.form-wrapper[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{flex:2}"]})}}return n})()}}]);