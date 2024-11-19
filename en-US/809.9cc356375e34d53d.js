"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[809],{7809:(b,p,n)=>{n.r(p),n.d(p,{ProgramsListComponent:()=>D});var i=n(4438),c=n(5351),_=n(6695),h=n(5416),P=n(9159),v=n(5245),g=n(7660),f=n(6100),E=n(4683),C=n(8359),d=n(7468),u=n(9828);let D=(()=>{class l{constructor(){this.programsService=(0,i.WQX)(g.tD),this._snackBar=(0,i.WQX)(h.UG),this.dialog=(0,i.WQX)(c.bZ),this.router=(0,i.WQX)(v.Ix),this.clientsService=(0,i.WQX)(g._$),this.shareClientsDataService=(0,i.WQX)(g.Xg),this.usersService=(0,i.WQX)(f.gs),this.pageTitle="Programs",this.pageType="program",this.dataSource=new P.I6,this.programs=[],this.subscriptions=new C.yU,this.reuseProgram=this.shareClientsDataService.reuseProgram,this.userFavorites=this.usersService.userFavorites,this.userId=this.usersService.userId,this.isAdmin=this.usersService.isAdmin,this.clientInfo=this.shareClientsDataService.clientInfo,this.isAdminProgram=this.programsService.isAdminProgram,this.getPrograms("all")}ngOnInit(){this.clientInfo.set({clientId:"",clientName:"",programPosition:0,programId:"",programName:"",dateRange:{start:"",end:""}})}createProgram(){this.router.navigateByUrl("/programs/form")}getPrograms(a){if("all"===a){const r=(0,d.p)([this.programsService.getPrograms(),this.clientsService.getAllClientsPrograms()]).subscribe(([e,s])=>{this.programs=[];const t=s.map(o=>o.program);this.programs=[...e,...t],this.programs.forEach(o=>{o.isFavorite=!!this.userFavorites().favPrograms.some(m=>m===o.id)}),this.programs.sort((o,m)=>o.name.localeCompare(m.name)),this.dataSource.data=this.programs});this.subscriptions.add(r)}else if("template"===a){const r=this.programsService.getPrograms().subscribe(e=>{this.programs=[],this.programs=e,this.programs.forEach(s=>{s.isFavorite=!!this.userFavorites().favPrograms.some(t=>t===s.id)}),this.programs.sort((s,t)=>s.name.localeCompare(t.name)),this.dataSource.data=this.programs});this.subscriptions.add(r)}else if("client"===a){const r=this.clientsService.getAllClientsPrograms().subscribe(e=>{this.programs=[];const s=e.map(t=>t.program);this.programs=s,this.programs.forEach(t=>{t.isFavorite=!!this.userFavorites().favPrograms.some(o=>o===t.id)}),this.programs.sort((t,o)=>t.name.localeCompare(o.name)),this.dataSource.data=this.programs});this.subscriptions.add(r)}else"favorite"===a&&this._getFavoritePrograms()}_getFavoritePrograms(){const a=(0,d.p)([this.programsService.getPrograms(),this.clientsService.getAllClientsPrograms()]).subscribe(([r,e])=>{this.programs=[];let s=[];const t=e.map(o=>o.program);this.programs=[...r,...t],s=this.programs.filter(o=>this.userFavorites().favPrograms.some(m=>m===o.id)?(o.isFavorite=!0,!0):(o.isFavorite=!1,!1)),s.sort((o,m)=>o.name.localeCompare(m.name)),this.dataSource.data=s});this.subscriptions.add(a)}openEditProgram(a){const r=this.programs.find(e=>e.id===a);this.clientInfo.update(e=>({...e,programName:r.name})),this.router.navigate([`programs/form/${a}`],{queryParams:{programName:`${r.name}`,isClientProgram:r.isTemplate?"false":"true"}})}reuseEditProgram(a){this.reuseProgram.set(!0);const r=this.programs.find(e=>e.id===a.programId);this.clientInfo.update(e=>({...e,programName:r.name})),console.log(this.clientInfo()),this.router.navigate([`programs/form/${r.id}`],{queryParams:{programName:`${r.name}`,isClientProgram:r.isTemplate?"false":"true"}})}addClient(a){console.log("open program and add client automatically")}openDeleteConfirmationDialog(a){const r=this.dialog.open(E.i,{width:"312px",data:{title:"Delete selected program?",message:"Deleting the selected program will remove it from your account."},panelClass:"custom-dialog"}),e=r.afterClosed().subscribe(s=>{s?(console.log("User confirmed deletion"),this.deleteProgram(a.itemId,a.listOption),r.close()):(console.log("User canceled deletion"),r.close())});this.subscriptions.add(e)}deleteProgram(a,r){const e=this.programs.find(t=>t.id===a);let s;s=e.isTemplate?this.programsService.deleteProgram(a).subscribe(()=>{this.getPrograms(r)}):this.clientsService.deleteClientProgram(e.clientId,e.position).subscribe(()=>{this.getPrograms(r)}),this.subscriptions.add(s),this._snackBar.open("Program deleted","",{duration:2e3,panelClass:["custom-snackbar-style"]})}_updateFavorites(a,r){const e=this.usersService.updateFavorites(a,r).subscribe(s=>console.log(s));this.subscriptions.add(e)}addToFavorites(a){this.userFavorites.update(r=>{const e=a.id,s={...r,favPrograms:[...r.favPrograms,e]};return this._updateFavorites(this.userId(),s),s})}removeFromFavorites(a){const r=this.userFavorites().favPrograms.filter(e=>e!==a.id);this.userFavorites.update(e=>({...e,favPrograms:[...r]})),this._updateFavorites(this.userId(),this.userFavorites())}ngOnDestroy(){this.subscriptions.unsubscribe()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=i.VBU({type:l,selectors:[["sanareapp-programs-list"]],standalone:!0,features:[i.Jv_([{provide:_.xX,useClass:u.Tu}]),i.aNF],decls:2,vars:7,consts:[[3,"newEvent","pageTitle","newButton","pageType"],[3,"getProgramsEvent","reuseEditProgramEvent","openEditProgramEvent","openDeleteConfirmationDialogEvent","favoriteProgram","removeFavoriteProgram","isAdmin","isAdminProgram","mainProgramsList","dataSource"]],template:function(r,e){1&r&&(i.j41(0,"ui-page-toolbar",0),i.bIt("newEvent",function(){return e.createProgram()}),i.k0s(),i.j41(1,"ui-programs-table",1),i.bIt("getProgramsEvent",function(t){return e.getPrograms(t)})("reuseEditProgramEvent",function(t){return e.reuseEditProgram(t)})("openEditProgramEvent",function(t){return e.openEditProgram(t)})("openDeleteConfirmationDialogEvent",function(t){return e.openDeleteConfirmationDialog(t)})("favoriteProgram",function(t){return e.addToFavorites(t)})("removeFavoriteProgram",function(t){return e.removeFromFavorites(t)}),i.k0s()),2&r&&(i.Y8G("pageTitle",e.pageTitle)("newButton",!0)("pageType","program"),i.R7$(),i.Y8G("isAdmin",e.isAdmin())("isAdminProgram",e.isAdminProgram())("mainProgramsList",!0)("dataSource",e.dataSource))},dependencies:[u.YL,u.dD]})}}return l})()}}]);