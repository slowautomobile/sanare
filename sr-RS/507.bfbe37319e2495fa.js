"use strict";(self.webpackChunksanare_app=self.webpackChunksanare_app||[]).push([[507],{6507:(u,l,n)=>{n.r(l),n.d(l,{DashboardComponent:()=>E});var e=n(8559),h=n(2572),g=n(7660),p=n(6694),P=n(271),c=n(1819);const _=()=>[Promise.all([n.e(943),n.e(810),n.e(76),n.e(610)]).then(n.bind(n,610)).then(r=>r.ClientsProgressComponent)];function C(r,f){if(1&r){const t=e.RV6();e.j41(0,"clients-progress",5),e.bIt("openEditClientProgramEvent",function(o){e.eBV(t);const a=e.XpG();return e.Njj(a.openEditClientProgram(o))}),e.k0s()}if(2&r){const t=e.XpG();e.Y8G("programs$",t.clientsPrograms$)("isProgramCompleted",t.isProgramCompleted)("isDashboard",!0)}}function D(r,f){1&r&&(e.j41(0,"div",6),e.nrm(1,"div",7)(2,"div",7)(3,"div",7)(4,"div",7)(5,"div",7)(6,"div",7)(7,"div",7)(8,"div",7)(9,"div",7),e.k0s())}let E=(()=>{class r{constructor(){this.clientsService=(0,e.WQX)(g._$),this.router=(0,e.WQX)(h.Ix),this.shareClientsDataService=(0,e.WQX)(g.Xg),this.isProgramCompleted=[],this.clientInfo=this.shareClientsDataService.clientInfo,this.themeManager=(0,e.WQX)(p.YP),this.themeSignal=this.themeManager.themeSignal,this.pageTitle="Kontrolna tabla"}ngOnInit(){this.clientsPrograms$=this.clientsService.getAllClientsProgramsBasic().pipe((0,P.T)(t=>{const s=new Date,o=[];return t.forEach(a=>{const i=a.program,d=new Date(i.dateRange.start),m=new Date(i.dateRange.end),v=m.getTime()-d.getTime(),T=s.getTime()-d.getTime(),M=Math.min(T/v*100,100);i.progress=Math.round(M),m>s&&(this.isProgramCompleted.push(!1),o.push(i),console.log("This program is in progress"))}),o.sort((a,i)=>new Date(i.dateRange.end).getTime()-new Date(a.dateRange.end).getTime()),console.log(o),o}))}openEditClientProgram(t){console.log(t);const s=t.id,o=t.name,a=t.dateRange;console.log(a),this.clientInfo.set({clientId:t.clientId,clientName:t.clientName,programPosition:t.position,programId:s,programName:o,dateRange:a}),this.router.navigate([`programs/form/${s}`],{queryParams:{programName:`${o}`,isClientProgram:o.isTemplate?"false":"true"}})}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["sanareapp-dashboard"]],standalone:!0,features:[e.aNF],decls:9,vars:2,consts:()=>{let t;return t=" Nedavni napredak pacijenata ",[t,[3,"pageTitle"],[1,"client-progress-container"],[1,"mat-title-large"],["overlay-scrollbars","",1,"scrollable-container",3,"options","defer"],[3,"openEditClientProgramEvent","programs$","isProgramCompleted","isDashboard"],[1,"programs-list-wrapper-placeholder"],[1,"program-list-skeleton"]]},template:function(s,o){1&s&&(e.nrm(0,"ui-page-toolbar",1),e.j41(1,"div",2)(2,"h3",3),e.pXf(3,0),e.k0s(),e.j41(4,"div",4),e.DNE(5,C,1,3)(6,D,10,0),e.nv$(7,5,_,null,6),e.g25(),e.k0s()()),2&s&&(e.Y8G("pageTitle",o.pageTitle),e.R7$(4),e.Y8G("options",o.themeSignal()))},dependencies:[p.YL,c.QX,c.r2],styles:['.client-progress-container[_ngcontent-%COMP%]{display:block;width:500px;height:calc(100vh - 170px);overflow:hidden;padding:16px;border-radius:16px}.client-progress-container[_ngcontent-%COMP%]   .scrollable-container[_ngcontent-%COMP%]{height:calc(100vh - 238px);overflow-y:scroll}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]{height:calc(100vh - 238px);overflow-y:hidden}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]{border-radius:8px;width:100%;height:78px;overflow:hidden;position:relative;margin-bottom:4px}.programs-list-wrapper-placeholder[_ngcontent-%COMP%]   .program-list-skeleton[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}']})}}return r})()}}]);
//# sourceMappingURL=507.bfbe37319e2495fa.js.map