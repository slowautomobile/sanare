"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[52],{6052:(Q,P,l)=>{l.r(P),l.d(P,{ClientsListComponent:()=>Y});var t=l(4438),I=l(5351),c=l(6695),M=l(5416),S=l(2042),s=l(9159),T=l(7660),f=l(4683),h=l(9277),b=l(8359),O=l(5245),E=l(9828),R=l(9213),v=l(4823),D=l(8834),L=l(2390),$=l(9042),m=l(3719);const G=()=>[5,10,25,100];function y(e,a){1&e&&(t.j41(0,"th",24),t.pXf(1,2),t.k0s())}function B(e,a){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.name)}}function w(e,a){1&e&&(t.j41(0,"th",24),t.pXf(1,3),t.k0s())}function X(e,a){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.email)}}function k(e,a){1&e&&(t.j41(0,"th",24),t.pXf(1,4),t.k0s())}function j(e,a){if(1&e&&(t.j41(0,"td",25),t.EFF(1),t.k0s()),2&e){const n=a.$implicit;t.R7$(),t.JRh(n.phone)}}function x(e,a){1&e&&t.nrm(0,"th",26)}function F(e,a){if(1&e){const n=t.RV6();t.j41(0,"td",25)(1,"div",27)(2,"button",28),t.bIt("click",function(){const o=t.eBV(n).$implicit,_=t.XpG(2);return t.Njj(_.openEditClientDialog(o.id,o.name))}),t.j41(3,"mat-icon"),t.EFF(4,"edit"),t.k0s()(),t.j41(5,"button",29),t.bIt("click",function(){const o=t.eBV(n).$implicit,_=t.XpG(2);return t.Njj(_.openDeleteConfirmationDialog(o.id))}),t.j41(6,"mat-icon"),t.EFF(7,"delete_outline"),t.k0s()()()()}}function U(e,a){1&e&&t.nrm(0,"tr",30)}function W(e,a){1&e&&t.nrm(0,"tr",31)}function z(e,a){if(1&e&&(t.j41(0,"tr",32)(1,"td",33),t.pXf(2,5),t.k0s()()),2&e){t.XpG(2);const n=t.sdS(6);t.R7$(2),t.uP7(n.value),t.nnv(2)}}function K(e,a){if(1&e&&(t.j41(0,"table",11),t.qex(1,14),t.DNE(2,y,2,0,"th",15)(3,B,2,1,"td",16),t.bVm(),t.qex(4,17),t.DNE(5,w,2,0,"th",15)(6,X,2,1,"td",16),t.bVm(),t.qex(7,18),t.DNE(8,k,2,0,"th",15)(9,j,2,1,"td",16),t.bVm(),t.qex(10,19),t.DNE(11,x,1,0,"th",20)(12,F,8,0,"td",16),t.bVm(),t.DNE(13,U,1,0,"tr",21)(14,W,1,0,"tr",22)(15,z,3,1,"tr",23),t.k0s()),2&e){const n=t.XpG();t.Y8G("dataSource",n.dataSource),t.R7$(13),t.Y8G("matHeaderRowDef",n.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",n.displayedColumns)}}function V(e,a){1&e&&(t.j41(0,"div",12)(1,"div",34),t.nrm(2,"div")(3,"div")(4,"div")(5,"div"),t.k0s(),t.j41(6,"div",35),t.nrm(7,"div")(8,"div")(9,"div")(10,"div"),t.k0s(),t.j41(11,"div",35),t.nrm(12,"div")(13,"div")(14,"div")(15,"div"),t.k0s(),t.j41(16,"div",35),t.nrm(17,"div")(18,"div")(19,"div")(20,"div"),t.k0s(),t.j41(21,"div",35),t.nrm(22,"div")(23,"div")(24,"div")(25,"div"),t.k0s(),t.j41(26,"div",35),t.nrm(27,"div")(28,"div")(29,"div")(30,"div"),t.k0s(),t.j41(31,"div",35),t.nrm(32,"div")(33,"div")(34,"div")(35,"div"),t.k0s(),t.j41(36,"div",35),t.nrm(37,"div")(38,"div")(39,"div")(40,"div"),t.k0s(),t.j41(41,"div",35),t.nrm(42,"div")(43,"div")(44,"div")(45,"div"),t.k0s()())}let Y=(()=>{class e{constructor(){this.pageTitle="Patienten",this.pageType="client",this.clientsService=(0,t.WQX)(T._$),this._snackBar=(0,t.WQX)(M.UG),this.dialog=(0,t.WQX)(I.bZ),this.router=(0,t.WQX)(O.Ix),this.displayedColumns=["name","email","phone","options"],this.dataSource=new s.I6,this.clients=[],this.subscriptions=new b.yU,this.shareClientsDataService=(0,t.WQX)(T.Xg),this.clientInfo=this.shareClientsDataService.clientInfo,this.themeManager=(0,t.WQX)(E.YP),this.themeSignal=this.themeManager.themeSignal,this.getClients()}ngOnInit(){this.clientInfo.set({clientId:"",clientName:"",programPosition:0,programId:"",programName:"",dateRange:{start:"",end:""}}),this.clientsService.getClients().subscribe(n=>console.log(n))}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createClient(){this.router.navigateByUrl("/clients/form")}getClients(){const n=this.clientsService.getClientsBasic().subscribe(i=>{this.clients=i,this.dataSource.data=this.clients,console.log(this.dataSource.data)});this.subscriptions.add(n)}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openEditClientDialog(n,i){const _=this.dialog.open(h.N,{width:"500px",data:{title:"Patient bearbeiten",clientId:n,clientName:i},panelClass:["custom-dialog","custom-client-dialog-content-wrapper"]}).afterClosed().subscribe(C=>{C?this.getClients():console.log("Client modal exited")});this.subscriptions.add(_)}openDeleteConfirmationDialog(n){const i=this.dialog.open(f.i,{width:"312px",data:{title:"Ausgew\xE4hlten Patienten l\xF6schen?",message:"Durch das L\xF6schen des ausgew\xE4hlten Patienten wird er aus Ihrem Konto entfernt."},panelClass:"custom-dialog"}),o=i.afterClosed().subscribe(_=>{_?(console.log("User confirmed deletion"),this.deleteClient(n),i.close()):(console.log("User canceled deletion"),i.close())});this.subscriptions.add(o)}deleteClient(n){const i=this.clientsService.deleteClient(n).subscribe({next:()=>{this.getClients(),this._snackBar.open("Patient gel\xF6scht","",{duration:2e3,panelClass:["custom-snackbar-style"]})},error:o=>console.error(o),complete:()=>console.info("Client deletion completed")});this.subscriptions.add(i)}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["sanareapp-clients-list"]],viewQuery:function(i,o){if(1&i&&(t.GBs(S.B4,5),t.GBs(c.iy,5)),2&i){let _;t.mGM(_=t.lsd())&&(o.sort=_.first),t.mGM(_=t.lsd())&&(o.paginator=_.first)}},standalone:!0,features:[t.Jv_([{provide:c.xX,useClass:E.Tu}]),t.aNF],decls:12,vars:7,consts:()=>{let n,i,o,_,C,d,g,p,u,A,N;return n="z.B. Erika Mustermann",i="Seite mit Patienten ausw\xE4hlen",o="Filter",_=" Name ",C="E-Mail",d=" Telefon ",g="Bearbeiten",p="Symbolschaltfl\xE4che \u201EBearbeiten\u201C",u="L\xF6schen",A="Symbolschaltfl\xE4che \u201EL\xF6schen\u201C",N="Keine Daten, die dem Filter \"" + "\ufffd0\ufffd" + "\" entsprechen",[["input",""],o,_,C,d,N,[3,"newEvent","pageTitle","pageType","newButton"],[1,"table-wrapper"],["matInput","","placeholder",n,3,"keyup"],[1,"clients-table-container"],["overlay-scrollbars","",1,"clients-list-table","table-scroll-container",3,"options","defer"],["mat-table","","matSort","",1,"mat-table-background",3,"dataSource"],[1,"programs-table-skeleton"],["pageSize","10","aria-label",i,1,"mat-paginator-background",3,"pageSizeOptions"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","phone"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","table-rows",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"client-options"],["mat-icon-button","","matTooltip",g,"aria-label",p,3,"click"],["mat-icon-button","","matTooltip",u,"aria-label",A,3,"click"],["mat-header-row",""],["mat-row","",1,"table-rows"],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"row-skeleton",2,"height","48px","margin-top","8px"],[1,"row-skeleton"]]},template:function(i,o){if(1&i){const _=t.RV6();t.j41(0,"ui-page-toolbar",6),t.bIt("newEvent",function(){return t.eBV(_),t.Njj(o.createClient())}),t.k0s(),t.j41(1,"div",7)(2,"mat-form-field")(3,"mat-label"),t.pXf(4,1),t.k0s(),t.j41(5,"input",8,0),t.bIt("keyup",function(d){return t.eBV(_),t.Njj(o.applyFilter(d))}),t.k0s()(),t.j41(7,"div",9)(8,"div",10),t.DNE(9,K,16,3,"table",11)(10,V,46,0,"div",12),t.k0s(),t.nrm(11,"mat-paginator",13),t.k0s()()}2&i&&(t.Y8G("pageTitle",o.pageTitle)("pageType",o.pageType)("newButton",!0),t.R7$(8),t.Y8G("options",o.themeSignal()),t.R7$(),t.vxM(0!==o.dataSource.data.length?9:10),t.R7$(2),t.Y8G("pageSizeOptions",t.lJ4(6,G)))},dependencies:[E.YL,m.rl,m.nJ,$.fg,L.QX,L.r2,s.Zl,S.B4,s.cC,s.tL,s.KS,S.aE,s.YV,s.$R,D.iY,v.oV,R.An,s.ji,s.YZ,s.iL,s.NB,s.ky,c.Ou,c.iy],styles:['.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 234px);overflow-y:hidden}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]{height:calc(100vh - 290px);overflow-y:scroll}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .table-rows[_ngcontent-%COMP%]{height:48px!important}.programs-table-skeleton[_ngcontent-%COMP%]{width:100%;height:440px;overflow:hidden}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:14px;height:48px;border-bottom-width:1px;border-bottom-style:solid}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:16px;min-width:193px;height:30px;overflow:hidden;position:relative;width:100%}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]:last-of-type{border-bottom:0}']})}}return e})()}}]);