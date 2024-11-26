"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[809],{7809:(F,c,n)=>{n.r(c),n.d(c,{ProgramsListComponent:()=>C});var i=n(4438),d=n(5351),h=n(6695),_=n(5416),v=n(9159),P=n(5245),l=n(7660),f=n(7855),E=n(4683),D=n(8359),p=n(7468),u=n(9828);let C=(()=>{class g{constructor(){this.programsService=(0,i.WQX)(l.tD),this._snackBar=(0,i.WQX)(_.UG),this.dialog=(0,i.WQX)(d.bZ),this.router=(0,i.WQX)(P.Ix),this.clientsService=(0,i.WQX)(l._$),this.shareClientsDataService=(0,i.WQX)(l.Xg),this.usersService=(0,i.WQX)(f.gs),this.shareStateService=(0,i.WQX)(l.kN),this.pageTitle="Programs",this.pageType="program",this.dataSource=new v.I6,this.isFetchingData=this.shareStateService.isFetchingData,this.programs=[],this.subscriptions=new D.yU,this.reuseProgram=this.shareClientsDataService.reuseProgram,this.userFavorites=this.usersService.userFavorites,this.userId=this.usersService.userId,this.isAdmin=this.usersService.isAdmin,this.clientInfo=this.shareClientsDataService.clientInfo,this.isAdminProgram=this.programsService.isAdminProgram,this.getPrograms("all")}ngOnInit(){this.clientInfo.set({clientId:"",clientName:"",programPosition:0,programId:"",programName:"",dateRange:{start:"",end:""}})}createProgram(){this.router.navigateByUrl("/programs/form")}getPrograms(a){if(this.isFetchingData.set(!0),"all"===a){const r=(0,p.p)([this.programsService.getPrograms(),this.clientsService.getAllClientsPrograms()]).subscribe(([e,t])=>{this.programs=[];const s=t.map(o=>o.program);this.programs=[...e,...s],this.programs.forEach(o=>{o.isFavorite=!!this.userFavorites().favPrograms.some(m=>m===o.id)}),this.programs.sort((o,m)=>o.name.localeCompare(m.name)),this.dataSource.data=this.programs,this.isFetchingData.set(!1)});this.subscriptions.add(r)}else if("template"===a){this.isFetchingData.set(!0);const r=this.programsService.getPrograms().subscribe(e=>{this.programs=[],this.programs=e,this.programs.forEach(t=>{t.isFavorite=!!this.userFavorites().favPrograms.some(s=>s===t.id)}),this.programs.sort((t,s)=>t.name.localeCompare(s.name)),this.dataSource.data=this.programs,this.isFetchingData.set(!1)});this.subscriptions.add(r)}else if("client"===a){this.isFetchingData.set(!0);const r=this.clientsService.getAllClientsPrograms().subscribe(e=>{this.programs=[];const t=e.map(s=>s.program);this.programs=t,this.programs.forEach(s=>{s.isFavorite=!!this.userFavorites().favPrograms.some(o=>o===s.id)}),this.programs.sort((s,o)=>s.name.localeCompare(o.name)),this.dataSource.data=this.programs,this.isFetchingData.set(!1)});this.subscriptions.add(r)}else"favorite"===a&&this._getFavoritePrograms()}_getFavoritePrograms(){this.isFetchingData.set(!0);const a=(0,p.p)([this.programsService.getPrograms(),this.clientsService.getAllClientsPrograms()]).subscribe(([r,e])=>{this.programs=[];let t=[];const s=e.map(o=>o.program);this.programs=[...r,...s],t=this.programs.filter(o=>this.userFavorites().favPrograms.some(m=>m===o.id)?(o.isFavorite=!0,!0):(o.isFavorite=!1,!1)),t.sort((o,m)=>o.name.localeCompare(m.name)),this.dataSource.data=t,this.isFetchingData.set(!1)});this.subscriptions.add(a)}openEditProgram(a){const r=this.programs.find(e=>e.id===a);this.clientInfo.update(e=>({...e,programName:r.name})),this.router.navigate([`programs/form/${a}`],{queryParams:{programName:`${r.name}`,isClientProgram:r.isTemplate?"false":"true"}})}reuseEditProgram(a){this.reuseProgram.set(!0);const r=this.programs.find(e=>e.id===a.programId);this.clientInfo.update(e=>({...e,programName:r.name})),console.log(this.clientInfo()),this.router.navigate([`programs/form/${r.id}`],{queryParams:{programName:`${r.name}`,isClientProgram:r.isTemplate?"false":"true"}})}addClient(a){console.log("open program and add client automatically")}openDeleteConfirmationDialog(a){const r=this.dialog.open(E.i,{width:"312px",data:{title:"Delete selected program?",message:"Deleting the selected program will remove it from your account."},panelClass:"custom-dialog"}),e=r.afterClosed().subscribe(t=>{t?(console.log("User confirmed deletion"),this.deleteProgram(a.itemId,a.listOption),r.close()):(console.log("User canceled deletion"),r.close())});this.subscriptions.add(e)}deleteProgram(a,r){const e=this.programs.find(s=>s.id===a);let t;t=e.isTemplate?this.programsService.deleteProgram(a).subscribe(()=>{this.getPrograms(r)}):this.clientsService.deleteClientProgram(e.clientId,e.position).subscribe(()=>{this.getPrograms(r)}),this.subscriptions.add(t),this._snackBar.open("Program deleted","",{duration:2e3,panelClass:["custom-snackbar-style"]})}_updateFavorites(a,r){const e=this.usersService.updateFavorites(a,r).subscribe(t=>console.log(t));this.subscriptions.add(e)}addToFavorites(a){this.userFavorites.update(r=>{const e=a.id,t={...r,favPrograms:[...r.favPrograms,e]};return this._updateFavorites(this.userId(),t),t})}removeFromFavorites(a){const r=this.userFavorites().favPrograms.filter(e=>e!==a.id);this.userFavorites.update(e=>({...e,favPrograms:[...r]})),this._updateFavorites(this.userId(),this.userFavorites())}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(r){return new(r||g)}}static{this.\u0275cmp=i.VBU({type:g,selectors:[["sanareapp-programs-list"]],standalone:!0,features:[i.Jv_([{provide:h.xX,useClass:u.Tu}]),i.aNF],decls:2,vars:7,consts:[[3,"newEvent","pageTitle","newButton","pageType"],[3,"getProgramsEvent","reuseEditProgramEvent","openEditProgramEvent","openDeleteConfirmationDialogEvent","favoriteProgram","removeFavoriteProgram","isAdmin","isAdminProgram","mainProgramsList","dataSource"]],template:function(r,e){1&r&&(i.j41(0,"ui-page-toolbar",0),i.bIt("newEvent",function(){return e.createProgram()}),i.k0s(),i.j41(1,"ui-programs-table",1),i.bIt("getProgramsEvent",function(s){return e.getPrograms(s)})("reuseEditProgramEvent",function(s){return e.reuseEditProgram(s)})("openEditProgramEvent",function(s){return e.openEditProgram(s)})("openDeleteConfirmationDialogEvent",function(s){return e.openDeleteConfirmationDialog(s)})("favoriteProgram",function(s){return e.addToFavorites(s)})("removeFavoriteProgram",function(s){return e.removeFromFavorites(s)}),i.k0s()),2&r&&(i.Y8G("pageTitle",e.pageTitle)("newButton",!0)("pageType","program"),i.R7$(),i.Y8G("isAdmin",e.isAdmin())("isAdminProgram",e.isAdminProgram())("mainProgramsList",!0)("dataSource",e.dataSource))},dependencies:[u.YL,u.dD]})}}return g})()}}]);