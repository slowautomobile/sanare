import { ActivePageService, ClientsService, DeleteConfirmationDialogComponent, MatDialog, MatPaginatorIntl, MatTableDataSource, PageToolbarComponent, PaginatorI18nService, ProgramsService, ProgramsTableComponent, ShareClientsDataService, ShareStateService } from "./chunk-ESKXYVOI.js";
import { MatSnackBar, Router, UsersService } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import "./chunk-2QWI6V4H.js";
import "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { Subscription, __spreadProps, __spreadValues, forkJoin, inject, ɵsetClassDebugInfo, ɵɵProvidersFeature, ɵɵadvance, ɵɵdefineComponent, ɵɵelementEnd, ɵɵelementStart, ɵɵlistener, ɵɵproperty } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/programs/programs-list/programs-list.component.ts
var ProgramsListComponent = class _ProgramsListComponent {
  constructor() {
    this.programsService = inject(ProgramsService);
    this._snackBar = inject(MatSnackBar);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.clientsService = inject(ClientsService);
    this.shareClientsDataService = inject(ShareClientsDataService);
    this.usersService = inject(UsersService);
    this.shareStateService = inject(ShareStateService);
    this.activePageTitle = inject(ActivePageService);
    this.pageTitle = this.activePageTitle.pageTitle;
    this.pageType = "program";
    this.dataSource = new MatTableDataSource();
    this.isFetchingData = this.shareStateService.isFetchingData;
    this.programs = [];
    this.subscriptions = new Subscription();
    this.reuseProgram = this.shareClientsDataService.reuseProgram;
    this.userFavorites = this.usersService.userFavorites;
    this.userId = this.usersService.userId;
    this.isAdmin = this.usersService.isAdmin;
    this.clientInfo = this.shareClientsDataService.clientInfo;
    this.isAdminProgram = this.programsService.isAdminProgram;
    this.getPrograms("all");
  }
  //  FINISH THIS  COMPONENT !!!!!
  ngOnInit() {
    this.pageTitle.set("Programi");
    this.clientInfo.set({
      clientId: "",
      clientName: "",
      programPosition: 0,
      programId: "",
      programName: "",
      dateRange: {
        start: "",
        end: ""
      }
    });
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  /*   changeListedItems() {
      console.log(this.listOption);
      if (this.listOption === 'all') {
        const subscription = forkJoin([
          this.programsService.getPrograms(),
          this.clientsService.getAllClientsPrograms(),
        ]).subscribe(([programsServiceList, clientsServiceList]) => {
          this.programs = [];
  
          const clientsProgramList = clientsServiceList.map(
            (clientInfo: any) => clientInfo.program,
          );
          this.programs = [...programsServiceList, ...clientsProgramList];
          console.log(this.programs);
          this.dataSource.data = this.programs;
        });
  
        this.subscriptions.add(subscription);
      } else if (this.listOption === 'template') {
        const subscription = this.programsService
          .getPrograms()
          .subscribe(programsList => {
            this.programs = [];
            this.programs = programsList;
            this.dataSource.data = this.programs;
  
            this.subscriptions.add(subscription);
          });
      } else if (this.listOption === 'client') {
        const subscription = this.clientsService
          .getAllClientsPrograms()
          .subscribe(programsList => {
            this.programs = [];
            const clientsProgramList = programsList.map(
              (clientInfo: any) => clientInfo.program,
            );
  
            this.programs = clientsProgramList;
            this.dataSource.data = this.programs;
  
            this.subscriptions.add(subscription);
          });
      } else if (this.listOption === 'favorite') {
        // Implement logic for favorite programs. isFavorite field should be added to program model
        this.programs = [];
        this.dataSource.data = this.programs;
      }
    } */
  createProgram() {
    this.router.navigateByUrl("/programs/form");
  }
  getPrograms(listOption) {
    this.isFetchingData.set(true);
    if (listOption === "all") {
      const subscription = forkJoin([this.programsService.getPrograms(), this.clientsService.getAllClientsPrograms()]).subscribe(([programsServiceList, clientsServiceList]) => {
        this.programs = [];
        const clientsProgramList = clientsServiceList.map(clientInfo => clientInfo.program);
        this.programs = [...programsServiceList, ...clientsProgramList];
        this.programs.forEach(program => {
          if (this.userFavorites().favPrograms.some(favProgram => favProgram === program.id)) {
            program.isFavorite = true;
          } else {
            program.isFavorite = false;
          }
        });
        this.programs.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this.dataSource.data = this.programs;
        this.isFetchingData.set(false);
      });
      this.subscriptions.add(subscription);
    } else if (listOption === "template") {
      this.isFetchingData.set(true);
      const subscription = this.programsService.getPrograms().subscribe(programsList => {
        this.programs = [];
        this.programs = programsList;
        this.programs.forEach(program => {
          if (this.userFavorites().favPrograms.some(favProgram => favProgram === program.id)) {
            program.isFavorite = true;
          } else {
            program.isFavorite = false;
          }
        });
        this.programs.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this.dataSource.data = this.programs;
        this.isFetchingData.set(false);
      });
      this.subscriptions.add(subscription);
    } else if (listOption === "client") {
      this.isFetchingData.set(true);
      const subscription = this.clientsService.getAllClientsPrograms().subscribe(programsList => {
        this.programs = [];
        const clientsProgramList = programsList.map(clientInfo => clientInfo.program);
        this.programs = clientsProgramList;
        this.programs.forEach(program => {
          if (this.userFavorites().favPrograms.some(favProgram => favProgram === program.id)) {
            program.isFavorite = true;
          } else {
            program.isFavorite = false;
          }
        });
        this.programs.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this.dataSource.data = this.programs;
        this.isFetchingData.set(false);
      });
      this.subscriptions.add(subscription);
    } else if (listOption === "favorite") {
      this._getFavoritePrograms();
    }
  }
  _getFavoritePrograms() {
    this.isFetchingData.set(true);
    const subscription = forkJoin([this.programsService.getPrograms(), this.clientsService.getAllClientsPrograms()]).subscribe(([programsServiceList, clientsServiceList]) => {
      this.programs = [];
      let favoritePrograms = [];
      const clientsProgramList = clientsServiceList.map(clientInfo => clientInfo.program);
      this.programs = [...programsServiceList, ...clientsProgramList];
      favoritePrograms = this.programs.filter(program => {
        if (this.userFavorites().favPrograms.some(favProgram => favProgram === program.id)) {
          program.isFavorite = true;
          return true;
        } else {
          program.isFavorite = false;
          return false;
        }
      });
      favoritePrograms.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      this.dataSource.data = favoritePrograms;
      this.isFetchingData.set(false);
    });
    this.subscriptions.add(subscription);
  }
  openEditProgram(programId) {
    const programToEdit = this.programs.find(program => program.id === programId);
    this.clientInfo.update(currentValue => __spreadProps(__spreadValues({}, currentValue), {
      programName: programToEdit.name
    }));
    this.router.navigate([`programs/form/${programId}`], {
      queryParams: {
        programName: `${programToEdit.name}`,
        isClientProgram: programToEdit.isTemplate ? "false" : "true"
      }
    });
  }
  reuseEditProgram(eventData) {
    this.reuseProgram.set(true);
    const programToEdit = this.programs.find(program => program.id === eventData.programId);
    this.clientInfo.update(currentValue => __spreadProps(__spreadValues({}, currentValue), {
      programName: programToEdit.name
    }));
    console.log(this.clientInfo());
    this.router.navigate([`programs/form/${programToEdit.id}`], {
      queryParams: {
        programName: `${programToEdit.name}`,
        isClientProgram: programToEdit.isTemplate ? "false" : "true"
      }
    });
  }
  addClient(clientId) {
    console.log("open program and add client automatically");
  }
  openDeleteConfirmationDialog(eventData) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: "312px",
      data: {
        title: "Izbri\u0161i izabrani program?",
        message: "Brisanje izabranog programa \u0107e ga ukloniti sa va\u0161eg naloga."
      },
      panelClass: "custom-dialog"
    });
    const subscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("User confirmed deletion");
        this.deleteProgram(eventData.itemId, eventData.listOption);
        dialogRef.close();
      } else {
        console.log("User canceled deletion");
        dialogRef.close();
      }
    });
    this.subscriptions.add(subscription);
  }
  deleteProgram(programId, listOption) {
    const programToDelete = this.programs.find(program => program.id === programId);
    let subscription;
    if (programToDelete.isTemplate) {
      subscription = this.programsService.deleteProgram(programId).subscribe(() => {
        this.getPrograms(listOption);
      });
    } else {
      subscription = this.clientsService.deleteClientProgram(programToDelete.clientId, programToDelete.position).subscribe(() => {
        this.getPrograms(listOption);
      });
    }
    this.subscriptions.add(subscription);
    this._snackBar.open("Program izbrisan", "", {
      duration: 2e3,
      panelClass: ["custom-snackbar-style"]
    });
  }
  /*   undoRemove(): void {
      console.log(this.removedProgram?.program);
      if (this.removedProgram) {
        // Add the removed item back to its original position
        // this.items.splice(this.removedItem.index, 0, this.removedItem.value);
  
        const restoredProgramSubscription = this.programsService
          .createProgram(this.removedProgram.program)
          .subscribe(
            // NOT LIKE THIS, PUT CONFIRM DIALOG, AND AFTER WITHOUT UNDO, ONLY SNACKBAR INFO!!!! BECAUSE THERE IS NO NEED FOR UNNECCESSARY HTTP REQUESTS AND NEWLY CREATED CLIENT(ALTOUGH SAME) WILL HAVE DIFERENT ID!!!!!!
            () => {
              this.getPrograms();
            },
          );
  
        // Reset the removedItem reference
        this.removedProgram = null;
        this.subscriptions.add(restoredProgramSubscription);
      }
    } */
  // Add/remove favorite programs
  _updateFavorites(userId, updatedFavorites) {
    const subscription = this.usersService.updateFavorites(userId, updatedFavorites).subscribe(favorites => console.log(favorites));
    this.subscriptions.add(subscription);
  }
  addToFavorites(program) {
    this.userFavorites.update(favorites => {
      const programId = program.id;
      const updatedFavorites = __spreadProps(__spreadValues({}, favorites), {
        favPrograms: [...favorites.favPrograms, programId]
      });
      this._updateFavorites(this.userId(), updatedFavorites);
      return updatedFavorites;
    });
  }
  removeFromFavorites(program) {
    const updatedFavPrograms = this.userFavorites().favPrograms.filter(favProgramId => favProgramId !== program.id);
    this.userFavorites.update(favorites => {
      const updatedFavorites = __spreadProps(__spreadValues({}, favorites), {
        favPrograms: [...updatedFavPrograms]
      });
      return updatedFavorites;
    });
    this._updateFavorites(this.userId(), this.userFavorites());
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ProgramsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProgramsListComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ProgramsListComponent,
      selectors: [["sanareapp-programs-list"]],
      features: [ɵɵProvidersFeature([{
        provide: MatPaginatorIntl,
        useClass: PaginatorI18nService
      }])],
      decls: 2,
      vars: 7,
      consts: [[3, "newEvent", "pageTitle", "newButton", "pageType"], [3, "getProgramsEvent", "reuseEditProgramEvent", "openEditProgramEvent", "openDeleteConfirmationDialogEvent", "favoriteProgram", "removeFavoriteProgram", "isAdmin", "isAdminProgram", "mainProgramsList", "dataSource"]],
      template: function ProgramsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ui-page-toolbar", 0);
          ɵɵlistener("newEvent", function ProgramsListComponent_Template_ui_page_toolbar_newEvent_0_listener() {
            return ctx.createProgram();
          });
          ɵɵelementEnd();
          ɵɵelementStart(1, "ui-programs-table", 1);
          ɵɵlistener("getProgramsEvent", function ProgramsListComponent_Template_ui_programs_table_getProgramsEvent_1_listener($event) {
            return ctx.getPrograms($event);
          })("reuseEditProgramEvent", function ProgramsListComponent_Template_ui_programs_table_reuseEditProgramEvent_1_listener($event) {
            return ctx.reuseEditProgram($event);
          })("openEditProgramEvent", function ProgramsListComponent_Template_ui_programs_table_openEditProgramEvent_1_listener($event) {
            return ctx.openEditProgram($event);
          })("openDeleteConfirmationDialogEvent", function ProgramsListComponent_Template_ui_programs_table_openDeleteConfirmationDialogEvent_1_listener($event) {
            return ctx.openDeleteConfirmationDialog($event);
          })("favoriteProgram", function ProgramsListComponent_Template_ui_programs_table_favoriteProgram_1_listener($event) {
            return ctx.addToFavorites($event);
          })("removeFavoriteProgram", function ProgramsListComponent_Template_ui_programs_table_removeFavoriteProgram_1_listener($event) {
            return ctx.removeFromFavorites($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("pageTitle", ctx.pageTitle())("newButton", true)("pageType", "program");
          ɵɵadvance();
          ɵɵproperty("isAdmin", ctx.isAdmin())("isAdminProgram", ctx.isAdminProgram())("mainProgramsList", true)("dataSource", ctx.dataSource);
        }
      },
      dependencies: [PageToolbarComponent, ProgramsTableComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ProgramsListComponent, {
    className: "ProgramsListComponent",
    filePath: "apps/sanare-app/src/app/pages/programs/programs-list/programs-list.component.ts",
    lineNumber: 54
  });
})();
export { ProgramsListComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
//# sourceMappingURL=chunk-MR5GJZDM.js.map