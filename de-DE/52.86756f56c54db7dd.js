"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[52],{6052:(V,T,o)=>{o.r(T),o.d(T,{ClientsListComponent:()=>K});var t=o(4438),I=o(5351),S=o(6695),M=o(5416),E=o(2042),s=o(9159),L=o(7660),f=o(4683),h=o(9277),b=o(8359),O=o(5245),P=o(9828),R=o(9213),D=o(4823),$=o(8834),d=o(2390),G=o(9042),m=o(3719);const v=()=>[5,10,25,100];function y(e,a){1&e&&(t.j41(0,"th",23),t.pXf(1,2),t.k0s())}function B(e,a){if(1&e&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.name)}}function w(e,a){1&e&&(t.j41(0,"th",23),t.pXf(1,3),t.k0s())}function X(e,a){if(1&e&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.email)}}function F(e,a){1&e&&(t.j41(0,"th",23),t.pXf(1,4),t.k0s())}function j(e,a){if(1&e&&(t.j41(0,"td",24),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.phone)}}function x(e,a){1&e&&t.nrm(0,"th",25)}function k(e,a){if(1&e){const n=t.RV6();t.j41(0,"td",24)(1,"div",26)(2,"button",27),t.bIt("click",function(){const l=t.eBV(n).$implicit,_=t.XpG();return t.Njj(_.openEditClientDialog(l.id,l.name))}),t.j41(3,"mat-icon"),t.EFF(4,"edit"),t.k0s()(),t.j41(5,"button",28),t.bIt("click",function(){const l=t.eBV(n).$implicit,_=t.XpG();return t.Njj(_.openDeleteConfirmationDialog(l.id))}),t.j41(6,"mat-icon"),t.EFF(7,"delete_outline"),t.k0s()()()()}}function U(e,a){1&e&&t.nrm(0,"tr",29)}function W(e,a){1&e&&t.nrm(0,"tr",30)}function z(e,a){if(1&e&&(t.j41(0,"tr",31)(1,"td",32),t.pXf(2,5),t.k0s()()),2&e){t.XpG();const n=t.sdS(6);t.R7$(2),t.uP7(n.value),t.nnv(2)}}let K=(()=>{class e{constructor(){this.pageTitle="Patienten",this.pageType="client",this.clientsService=(0,t.WQX)(L._$),this._snackBar=(0,t.WQX)(M.UG),this.dialog=(0,t.WQX)(I.bZ),this.router=(0,t.WQX)(O.Ix),this.displayedColumns=["name","email","phone","options"],this.dataSource=new s.I6,this.clients=[],this.subscriptions=new b.yU,this.shareClientsDataService=(0,t.WQX)(L.Xg),this.clientInfo=this.shareClientsDataService.clientInfo,this.themeManager=(0,t.WQX)(P.YP),this.themeSignal=this.themeManager.themeSignal,this.getClients()}ngOnInit(){this.clientInfo.set({clientId:"",clientName:"",programPosition:0,programId:"",programName:"",dateRange:{start:"",end:""}}),this.clientsService.getClients().subscribe(n=>console.log(n))}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createClient(){this.router.navigateByUrl("/clients/form")}getClients(){const n=this.clientsService.getClientsBasic().subscribe(i=>{this.clients=i,this.dataSource.data=this.clients,console.log(this.dataSource.data)});this.subscriptions.add(n)}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openEditClientDialog(n,i){const _=this.dialog.open(h.N,{width:"500px",data:{title:"Patient bearbeiten",clientId:n,clientName:i},panelClass:["custom-dialog","custom-client-dialog-content-wrapper"]}).afterClosed().subscribe(C=>{C?this.getClients():console.log("Client modal exited")});this.subscriptions.add(_)}openDeleteConfirmationDialog(n){const i=this.dialog.open(f.i,{width:"312px",data:{title:"Ausgew\xE4hlten Patienten l\xF6schen?",message:"Durch das L\xF6schen des ausgew\xE4hlten Patienten wird er aus Ihrem Konto entfernt."},panelClass:"custom-dialog"}),l=i.afterClosed().subscribe(_=>{_?(console.log("User confirmed deletion"),this.deleteClient(n),i.close()):(console.log("User canceled deletion"),i.close())});this.subscriptions.add(l)}deleteClient(n){const i=this.clientsService.deleteClient(n).subscribe({next:()=>{this.getClients(),this._snackBar.open("Patient gel\xF6scht","",{duration:2e3,panelClass:["custom-snackbar-style"]})},error:l=>console.error(l),complete:()=>console.info("Client deletion completed")});this.subscriptions.add(i)}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["sanareapp-clients-list"]],viewQuery:function(i,l){if(1&i&&(t.GBs(E.B4,5),t.GBs(S.iy,5)),2&i){let _;t.mGM(_=t.lsd())&&(l.sort=_.first),t.mGM(_=t.lsd())&&(l.paginator=_.first)}},standalone:!0,features:[t.Jv_([{provide:S.xX,useClass:P.Tu}]),t.aNF],decls:26,vars:9,consts:()=>{let n,i,l,_,C,c,g,p,u,A,N;return n="z.B. Erika Mustermann",i="Seite mit Patienten ausw\xE4hlen",l="Filter",_=" Name ",C="E-Mail",c=" Telefon ",g="Bearbeiten",p="Symbolschaltfl\xE4che \u201EBearbeiten\u201C",u="L\xF6schen",A="Symbolschaltfl\xE4che \u201EL\xF6schen\u201C",N="Keine Daten, die dem Filter \"" + "\ufffd0\ufffd" + "\" entsprechen",[["input",""],l,_,C,c,N,[3,"newEvent","pageTitle","pageType","newButton"],[1,"table-wrapper"],["matInput","","placeholder",n,3,"keyup"],[1,"clients-table-container"],["overlay-scrollbars","",1,"clients-list-table","table-scroll-container",3,"options","defer"],["mat-table","","matSort","",1,"mat-table-background",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","phone"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","table-rows",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","10","aria-label",i,1,"mat-paginator-background",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"client-options"],["mat-icon-button","","matTooltip",g,"aria-label",p,3,"click"],["mat-icon-button","","matTooltip",u,"aria-label",A,3,"click"],["mat-header-row",""],["mat-row","",1,"table-rows"],[1,"mat-row"],["colspan","4",1,"mat-cell"]]},template:function(i,l){if(1&i){const _=t.RV6();t.j41(0,"ui-page-toolbar",6),t.bIt("newEvent",function(){return t.eBV(_),t.Njj(l.createClient())}),t.k0s(),t.j41(1,"div",7)(2,"mat-form-field")(3,"mat-label"),t.pXf(4,1),t.k0s(),t.j41(5,"input",8,0),t.bIt("keyup",function(c){return t.eBV(_),t.Njj(l.applyFilter(c))}),t.k0s()(),t.j41(7,"div",9)(8,"div",10)(9,"table",11),t.qex(10,12),t.DNE(11,y,2,0,"th",13)(12,B,2,1,"td",14),t.bVm(),t.qex(13,15),t.DNE(14,w,2,0,"th",13)(15,X,2,1,"td",14),t.bVm(),t.qex(16,16),t.DNE(17,F,2,0,"th",13)(18,j,2,1,"td",14),t.bVm(),t.qex(19,17),t.DNE(20,x,1,0,"th",18)(21,k,8,0,"td",14),t.bVm(),t.DNE(22,U,1,0,"tr",19)(23,W,1,0,"tr",20)(24,z,3,1,"tr",21),t.k0s()(),t.nrm(25,"mat-paginator",22),t.k0s()()}2&i&&(t.Y8G("pageTitle",l.pageTitle)("pageType",l.pageType)("newButton",!0),t.R7$(8),t.Y8G("options",l.themeSignal()),t.R7$(),t.Y8G("dataSource",l.dataSource),t.R7$(13),t.Y8G("matHeaderRowDef",l.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",l.displayedColumns),t.R7$(2),t.Y8G("pageSizeOptions",t.lJ4(8,v)))},dependencies:[P.YL,m.rl,m.nJ,G.fg,d.QX,d.r2,s.Zl,E.B4,s.cC,s.tL,s.KS,E.aE,s.YV,s.$R,$.iY,D.oV,R.An,s.ji,s.YZ,s.iL,s.NB,s.ky,S.Ou,S.iy],styles:['.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 234px);overflow-y:hidden}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]{height:calc(100vh - 290px);overflow-y:scroll}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .table-rows[_ngcontent-%COMP%]{height:48px!important}.programs-table-skeleton[_ngcontent-%COMP%]{width:100%;height:440px;overflow:hidden}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:14px;height:48px;border-bottom-width:1px;border-bottom-style:solid}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:16px;min-width:193px;height:30px;overflow:hidden;position:relative;width:100%}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]:last-of-type{border-bottom:0}']})}}return e})()}}]);