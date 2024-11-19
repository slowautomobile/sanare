"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[76],{9277:(y,N,i)=>{i.d(N,{N:()=>A});var e=i(4438),r=i(9417),C=i(5351),M=i(5416),h=i(5245),O=i(7660),l=i(9828),m=i(8359),t=i(7673),n=i(9213),o=i(8834),d=i(9042),u=i(3719),E=i(2390);const S=()=>[Promise.all([i.e(902),i.e(430)]).then(i.bind(i,4430)).then(c=>c.ClientsProgressComponent)];function v(c,$){if(1&c&&e.nrm(0,"clients-progress",21),2&c){const _=e.XpG();e.Y8G("programs$",_.programs$)("isProgramCompleted",_.isProgramCompleted)("isDashboard",!1)}}function B(c,$){1&c&&(e.j41(0,"div",22),e.nrm(1,"div",23)(2,"div",23)(3,"div",23)(4,"div",23)(5,"div",23),e.k0s())}let A=(()=>{class c{constructor(){this.dialogRef=(0,e.WQX)(C.CP),this.data=(0,e.WQX)(C.Vh),this.formBuilder=(0,e.WQX)(r.ok),this.clientsService=(0,e.WQX)(O._$),this.programsService=(0,e.WQX)(O.tD),this.router=(0,e.WQX)(h.Ix),this._snackBar=(0,e.WQX)(M.UG),this.shareClientsDataService=(0,e.WQX)(O.Xg),this.programs=[],this.subscriptions=new m.yU,this.fullEditButtonString="Full edit",this.date=new Date,this.isProgramCompleted=[],this.clientInfo=this.shareClientsDataService.clientInfo,this.themeManager=(0,e.WQX)(l.YP),this.themeSignal=this.themeManager.themeSignal}ngOnInit(){this._initForm();const _=this.clientsService.getClient(this.data.clientId).subscribe(a=>{this.clientForm.firstName.setValue(a.firstName),this.clientForm.lastName.setValue(a.lastName),this.clientForm.email.setValue(a.email),this.clientForm.phone.setValue(a.phone),this.programs=a.programs,this.programs$=(0,t.of)(this.programs),console.log(this.programs);const s=new Date;this.programs?.forEach(p=>{const f=p,T=new Date(f.dateRange.start),L=new Date(f.dateRange.end),I=L.getTime()-T.getTime(),P=s.getTime()-T.getTime(),D=Math.min(P/I*100,100);f.progress=D,L<s?(this.isProgramCompleted.push(!0),console.log("This program is completed")):(this.isProgramCompleted.push(!1),console.log("This program is in progress"))})});this.subscriptions.add(_)}_initForm(){this.form=this.formBuilder.group({firstName:["",r.k0.required],lastName:["",r.k0.required],name:[""],email:[""],phone:["",r.k0.required]})}get clientForm(){return this.form.controls}_updateClient(_,a){const s=this.clientsService.updateClient(_,a).subscribe(p=>{this._snackBar.open("Client updated","",{duration:2e3,panelClass:["custom-snackbar-style"]}),console.log(p)});this.subscriptions.add(s)}fullEditMode(_,a){console.log(a),this.clientInfo.set({clientId:_,clientName:a,programPosition:0,programId:"",programName:"",dateRange:{start:"",end:""}}),this.router.navigateByUrl(`clients/form/${_}`),this.dialogRef.close(!0),console.log(_)}onConfirm(){this._updateClient({firstName:this.clientForm.firstName.value,lastName:this.clientForm.lastName.value,name:this.clientForm.name.value,email:this.clientForm.email.value,phone:this.clientForm.phone.value},this.data.clientId),this.dialogRef.close(!0)}deleteClientProgram(){console.log("delete client program")}onClose(){this.dialogRef.close()}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275cmp=e.VBU({type:c,selectors:[["clients-show-client-modal"]],standalone:!0,features:[e.aNF],decls:36,vars:5,consts:()=>{let _,a,s,p,f,T,L,I,P,D;return _="Enter clients firstname",a="Enter clients lastname",s="Enter clients email",p="Enter clients phone number",f="Firstname",T="Lastname",L="Email",I="Phone",P=" Cancel ",D=" Save ",[f,T,L,I,P,D,[1,"confirmation-dialog-wrapper"],[1,"header-container"],["mat-dialog-title","",1,"dialog-title","mat-title-large"],["overlay-scrollbars","",1,"dialog-content-wrapper",3,"options","defer"],[3,"formGroup"],["appearance","outline"],["matInput","","formControlName","firstName","type","text","placeholder",_],["matInput","","formControlName","lastName","type","text","placeholder",a],["matInput","","formControlName","email","type","text","placeholder",s],["matInput","","formControlName","phone","type","text","placeholder",p],["mat-dialog-actions","",1,"dialog-actions"],["mat-flat-button","","color","primary",1,"custom-btn",3,"click"],[1,"actions-wrapper"],["mat-button","","cdkFocusInitial","",1,"dialog-buttons",3,"click"],["mat-button","",1,"dialog-buttons",3,"click","disabled"],[3,"programs$","isProgramCompleted","isDashboard"],[1,"programs-list-wrapper-placeholder"],[1,"program-list-skeleton"]]},template:function(a,s){1&a&&(e.j41(0,"div",6)(1,"div",7)(2,"h2",8),e.EFF(3),e.k0s()(),e.j41(4,"div",9)(5,"form",10)(6,"mat-form-field",11)(7,"mat-label"),e.pXf(8,0),e.k0s(),e.nrm(9,"input",12),e.k0s(),e.j41(10,"mat-form-field",11)(11,"mat-label"),e.pXf(12,1),e.k0s(),e.nrm(13,"input",13),e.k0s(),e.j41(14,"mat-form-field",11)(15,"mat-label"),e.pXf(16,2),e.k0s(),e.nrm(17,"input",14),e.k0s(),e.j41(18,"mat-form-field",11)(19,"mat-label"),e.pXf(20,3),e.k0s(),e.nrm(21,"input",15),e.k0s(),e.DNE(22,v,1,3)(23,B,6,0),e.nv$(24,22,S,null,23),e.g25(),e.k0s()(),e.j41(26,"div",16)(27,"button",17),e.bIt("click",function(){return s.fullEditMode(s.data.clientId,s.data.clientName)}),e.j41(28,"mat-icon"),e.EFF(29,"edit"),e.k0s(),e.EFF(30),e.k0s(),e.j41(31,"div",18)(32,"button",19),e.bIt("click",function(){return s.onClose()}),e.pXf(33,4),e.k0s(),e.j41(34,"button",20),e.bIt("click",function(){return s.onConfirm()}),e.pXf(35,5),e.k0s()()()()),2&a&&(e.R7$(3),e.SpI(" ",s.data.title," "),e.R7$(),e.Y8G("options",s.themeSignal()),e.R7$(),e.Y8G("formGroup",s.form),e.R7$(25),e.SpI(" ",s.fullEditButtonString," "),e.R7$(4),e.Y8G("disabled",s.form.invalid))},dependencies:[C.BI,E.QX,E.r2,r.YN,r.qT,r.me,r.BC,r.cb,r.X1,r.j4,r.JD,u.rl,u.nJ,d.fg,C.E7,o.$z,n.An],styles:['.confirmation-dialog-wrapper[_ngcontent-%COMP%]{height:736px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]{margin:0}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%]   .full-edit-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-content-wrapper[_ngcontent-%COMP%]   .full-edit-wrapper[_ngcontent-%COMP%]   .clients-progress-item[_ngcontent-%COMP%]{flex:1}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{padding-bottom:20px;padding-right:20px;text-align:right;display:flex;flex-direction:column;gap:16px}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]{margin-top:24px;width:fit-content;align-self:flex-start}.confirmation-dialog-wrapper[_ngcontent-%COMP%]   .dialog-actions[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]{align-self:flex-end}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]{height:162px;overflow-y:hidden}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]{width:100%;height:64px;overflow:hidden;position:relative;margin-bottom:4px;border-radius:8px}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}']})}}return c})()},3207:(y,N,i)=>{i.d(N,{s:()=>r});var e=i(9350);function r(C,M){const h="object"==typeof M;return new Promise((O,l)=>{let t,m=!1;C.subscribe({next:n=>{t=n,m=!0},error:l,complete:()=>{m?O(t):h?O(M.defaultValue):l(new e.G)}})})}},9726:(y,N,i)=>{i.d(N,{G7:()=>M,GV:()=>h,Yr:()=>C});var e=i(4438);let r=(()=>{class l{_printStyle=[];_styleSheetFile="";setPrintStyle(t){this._printStyle=[];for(let n in t)t.hasOwnProperty(n)&&this._printStyle.push((n+JSON.stringify(t[n])).replace(/['"]+/g,""))}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}returnStyleSheetLinkTags(){return this._styleSheetFile}setStyleSheetFile(t){let n=function(o){return`<link rel="stylesheet" type="text/css" href="${o}">`};if(-1!==t.indexOf(",")){const o=t.split(",");this._styleSheetFile=o.map(d=>n(d)).join("")}else this._styleSheetFile=n(t)}updateInputDefaults(t){for(let n=0;n<t.length;n++){const o=t[n];o.defaultValue=o.value,o.checked&&(o.defaultChecked=!0)}}updateSelectDefaults(t){for(let n=0;n<t.length;n++){const o=t[n];o.options[o.selectedIndex].defaultSelected=!0}}updateTextAreaDefaults(t){for(let n=0;n<t.length;n++){const o=t[n];o.defaultValue=o.value}}canvasToImageHtml(t){return`<img src="${t.toDataURL()}" style="max-width: 100%;">`}updateCanvasToImage(t){for(let n=0;n<t.length;n++){const o=this.canvasToImageHtml(t[n]);t[n].insertAdjacentHTML("afterend",o),t[n].remove()}}getHtmlContents(t){const n=document.getElementById(t);if(!n)return null;const o=n.getElementsByTagName("input"),d=n.getElementsByTagName("select"),u=n.getElementsByTagName("textarea"),E=n.getElementsByTagName("canvas");return this.updateInputDefaults(o),this.updateSelectDefaults(d),this.updateTextAreaDefaults(u),this.updateCanvasToImage(E),n.innerHTML}getElementTag(t){const n=[],o=document.getElementsByTagName(t);for(let d=0;d<o.length;d++)n.push(o[d].outerHTML);return n.join("\r\n")}print(t){let n="",o="",d="top=0,left=0,height=auto,width=auto";const u=this.getElementTag("base");t.useExistingCss&&(n=this.getElementTag("style"),o=this.getElementTag("link")),t.openNewTab&&(d="");const E=this.getHtmlContents(t.printSectionId);if(!E)return void console.error(`Print section with id ${t.printSectionId} not found.`);const S=window.open("","_blank",d);S?(S.document.open(),S.document.write(`\n          <html>\n            <head>\n              <title>${t.printTitle?t.printTitle:""}</title>\n              ${u}\n              ${this.returnStyleValues()}\n              ${this.returnStyleSheetLinkTags()}\n              ${n}\n              ${o}\n            </head>\n            <body ${t.bodyClass?`class="${t.bodyClass}"`:""}>\n              ${E}\n              <script defer>\n                function triggerPrint(event) {\n                  window.removeEventListener('load', triggerPrint, false);\n                  ${t.previewOnly?"":`setTimeout(function() {\n                    closeWindow(window.print());\n                  }, ${t.printDelay});`}\n                }\n                function closeWindow(){\n                  ${t.closeWindow?"window.close();":""}\n                }\n                window.addEventListener('load', triggerPrint, false);\n              <\/script>\n            </body>\n          </html>`),S.document.close()):console.error("Could not open print window.")}static \u0275fac=function(n){return new(n||l)};static \u0275prov=e.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),C=(()=>{class l extends r{print(t){super.print(t)}set printStyle(t){super.setPrintStyle(t)}set styleSheetFile(t){super.setStyleSheetFile(t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=e.xGo(l)))(o||l)}})();static \u0275prov=e.jDH({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();class M{printSectionId=null;printTitle=null;useExistingCss=!1;bodyClass="";openNewTab=!1;previewOnly=!1;closeWindow=!0;printDelay=0;constructor(m){m&&Object.assign(this,m)}}let h=(()=>{class l extends r{printOptions=new M;set previewOnly(t){this.printOptions={...this.printOptions,previewOnly:t}}set printSectionId(t){this.printOptions={...this.printOptions,printSectionId:t}}set printTitle(t){this.printOptions={...this.printOptions,printTitle:t}}set useExistingCss(t){this.printOptions={...this.printOptions,useExistingCss:t}}set printDelay(t){this.printOptions={...this.printOptions,printDelay:t}}set closeWindow(t){this.printOptions={...this.printOptions,closeWindow:t}}set bodyClass(t){this.printOptions={...this.printOptions,bodyClass:t}}set openNewTab(t){this.printOptions={...this.printOptions,openNewTab:t}}set printStyle(t){super.setPrintStyle(t)}set styleSheetFile(t){super.setStyleSheetFile(t)}print(){super.print(this.printOptions)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=e.xGo(l)))(o||l)}})();static \u0275dir=e.FsC({type:l,selectors:[["button","ngxPrint",""]],hostBindings:function(n,o){1&n&&e.bIt("click",function(){return o.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",closeWindow:"closeWindow",bodyClass:"bodyClass",openNewTab:"openNewTab",printStyle:"printStyle",styleSheetFile:"styleSheetFile"},standalone:!0,features:[e.Vt3]})}return l})()}}]);