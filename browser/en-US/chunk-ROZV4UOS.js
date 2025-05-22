<<<<<<<< HEAD:browser/en-US/chunk-FNHCMCE2.js
import { ActivePageService, ClientsService, DeleteConfirmationDialogComponent, MatCell, MatCellDef, MatColumnDef, MatDialog, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger, MatNoDataRow, MatPaginator, MatPaginatorIntl, MatPaginatorModule, MatProgressSpinner, MatProgressSpinnerModule, MatRow, MatRowDef, MatSort, MatSortHeader, MatSortModule, MatTable, MatTableDataSource, MatTableModule, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, PaginatorI18nService, ScreenSizeService, ShareClientsDataService, ShareStateService, ThemeManagerService } from "./chunk-ETMZBCVE.js";
========
import { ActivePageService, ClientsService, DeleteConfirmationDialogComponent, MatCell, MatCellDef, MatColumnDef, MatDialog, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger, MatNoDataRow, MatPaginator, MatPaginatorIntl, MatPaginatorModule, MatProgressSpinner, MatProgressSpinnerModule, MatRow, MatRowDef, MatSort, MatSortHeader, MatSortModule, MatTable, MatTableDataSource, MatTableModule, OverlayScrollbarsComponent, OverlayscrollbarsModule, PageToolbarComponent, PaginatorI18nService, ScreenSizeService, ShareClientsDataService, ShareStateService, ThemeManagerService } from "./chunk-ESKXYVOI.js";
>>>>>>>> 7e7d94b (Deploy dist update):browser/en-US/chunk-ROZV4UOS.js
import { MatFormField, MatInput, MatLabel, MatSnackBar, Router } from "./chunk-ZW3GDTPB.js";
import "./chunk-S7U3HECP.js";
import "./chunk-SWLHLYHZ.js";
import { MatButtonModule, MatIconButton } from "./chunk-2QWI6V4H.js";
import { MatIcon, MatIconModule, MatTooltip } from "./chunk-7MZUFN34.js";
import "./chunk-QTN4UOGR.js";
import { Subscription, computed, inject, ɵsetClassDebugInfo, ɵɵProvidersFeature, ɵɵadvance, ɵɵconditional, ɵɵdeclareLet, ɵɵdefineComponent, ɵɵelement, ɵɵelementContainerEnd, ɵɵelementContainerStart, ɵɵelementEnd, ɵɵelementStart, ɵɵgetCurrentView, ɵɵi18n, ɵɵi18nApply, ɵɵi18nExp, ɵɵlistener, ɵɵloadQuery, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction0, ɵɵqueryRefresh, ɵɵreadContextLet, ɵɵreference, ɵɵrepeater, ɵɵrepeaterCreate, ɵɵresetView, ɵɵrestoreView, ɵɵstoreLet, ɵɵtemplate, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵviewQuery } from "./chunk-2MICNSAC.js";

// apps/sanare-app/src/app/pages/clients/clients-list/clients-list.component.ts
var _c0 = () => [5, 10, 25, 100];
var _forTrack0 = ($index, $item) => $item.key;
function ClientsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "mat-spinner", 18);
    ɵɵelementEnd();
  }
}
function ClientsListComponent_For_13_Conditional_0_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const column_r2 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", column_r2.label, "");
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 26);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(row_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(row_r3.email);
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", row_r3.name, " ");
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 22);
    ɵɵtemplate(1, ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Conditional_1_Template, 4, 2)(2, ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(4);
    const deviceScreenSize_r4 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵconditional((deviceScreenSize_r4 == null ? null : deviceScreenSize_r4.isCompact) ? 1 : 2);
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ClientsListComponent_For_13_Conditional_0_Conditional_2_mat_cell_0_Template, 3, 1, "mat-cell", 24);
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_3_mat_cell_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const column_r2 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", element_r5[column_r2.key], " ");
  }
}
function ClientsListComponent_For_13_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ClientsListComponent_For_13_Conditional_0_Conditional_3_mat_cell_0_Template, 2, 1, "mat-cell", 27);
  }
}
function ClientsListComponent_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 19);
    ɵɵtemplate(1, ClientsListComponent_For_13_Conditional_0_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 21)(2, ClientsListComponent_For_13_Conditional_0_Conditional_2_Template, 1, 0, "mat-cell", 22)(3, ClientsListComponent_For_13_Conditional_0_Conditional_3_Template, 1, 0, "mat-cell");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r2 = ɵɵnextContext().$implicit;
    ɵɵnextContext();
    const deviceScreenSize_r4 = ɵɵreadContextLet(0);
    ɵɵproperty("matColumnDef", column_r2.key);
    ɵɵadvance(2);
    ɵɵconditional((deviceScreenSize_r4 == null ? null : deviceScreenSize_r4.isCompact) ? 2 : 3);
  }
}
function ClientsListComponent_For_13_Conditional_1_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-header-cell");
  }
}
function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 31);
    ɵɵlistener("click", function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const row_r7 = ɵɵnextContext().$implicit;
      const ctx_r7 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r7.openEditClientDialog(row_r7.id, row_r7.name));
    });
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "edit");
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 32);
    ɵɵlistener("click", function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r6);
      const row_r7 = ɵɵnextContext().$implicit;
      const ctx_r7 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r7.openDeleteConfirmationDialog(row_r7.id));
    });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "delete_outline");
    ɵɵelementEnd()()();
  }
}
function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33)(1, "mat-icon");
    ɵɵtext(2, "more_vert");
    ɵɵelementEnd()();
    ɵɵelementStart(3, "mat-menu", null, 1)(5, "button", 34);
    ɵɵlistener("click", function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_2_Template_button_click_5_listener() {
      ɵɵrestoreView(_r9);
      const row_r7 = ɵɵnextContext().$implicit;
      const ctx_r7 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r7.openEditClientDialog(row_r7.id, row_r7.name));
    });
    ɵɵelementStart(6, "mat-icon");
    ɵɵtext(7, "edit");
    ɵɵelementEnd();
    ɵɵelementStart(8, "span");
    ɵɵi18n(9, 3);
    ɵɵelementEnd()();
    ɵɵelementStart(10, "button", 35);
    ɵɵlistener("click", function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_2_Template_button_click_10_listener() {
      ɵɵrestoreView(_r9);
      const row_r7 = ɵɵnextContext().$implicit;
      const ctx_r7 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r7.openDeleteConfirmationDialog(row_r7.id));
    });
    ɵɵelementStart(11, "mat-icon");
    ɵɵtext(12, "delete_outline");
    ɵɵelementEnd();
    ɵɵelementStart(13, "span");
    ɵɵi18n(14, 4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const menu_r10 = ɵɵreference(4);
    ɵɵproperty("matMenuTriggerFor", menu_r10);
  }
}
function ClientsListComponent_For_13_Conditional_1_mat_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-cell", 30);
    ɵɵtemplate(1, ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_1_Template, 7, 0, "div")(2, ClientsListComponent_For_13_Conditional_1_mat_cell_2_Conditional_2_Template, 15, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const deviceScreenSize_r4 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵconditional(!(deviceScreenSize_r4 == null ? null : deviceScreenSize_r4.isCompact) ? 1 : 2);
  }
}
function ClientsListComponent_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 20);
    ɵɵtemplate(1, ClientsListComponent_For_13_Conditional_1_mat_header_cell_1_Template, 1, 0, "mat-header-cell", 28)(2, ClientsListComponent_For_13_Conditional_1_mat_cell_2_Template, 3, 1, "mat-cell", 29);
    ɵɵelementContainerEnd();
  }
}
function ClientsListComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ClientsListComponent_For_13_Conditional_0_Template, 4, 2, "ng-container", 19)(1, ClientsListComponent_For_13_Conditional_1_Template, 3, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    ɵɵconditional(column_r2.key !== "options" ? 0 : 1);
  }
}
function ClientsListComponent_mat_header_row_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
  }
}
function ClientsListComponent_mat_row_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-row", 36);
  }
}
function ClientsListComponent_mat_row_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-row", 37)(1, "td", 38);
    ɵɵi18n(2, 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const input_r11 = ɵɵreference(7);
    ɵɵadvance(2);
    ɵɵi18nExp(input_r11.value);
    ɵɵi18nApply(2);
  }
}
function ClientsListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mat-paginator", 17);
  }
  if (rf & 2) {
    ɵɵproperty("pageSizeOptions", ɵɵpureFunction0(1, _c0));
  }
}
var ClientsListComponent = class _ClientsListComponent {
  constructor() {
    this.pageType = "client";
    this.clientsService = inject(ClientsService);
    this._snackBar = inject(MatSnackBar);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.shareStateService = inject(ShareStateService);
    this.ActivePageService = inject(ActivePageService);
    this.screenSizeService = inject(ScreenSizeService);
    this.isFetchingData = this.shareStateService.isFetchingData;
    this.screenSize = this.screenSizeService.screenSize;
    this.pageTitle = this.ActivePageService.pageTitle;
    this.columnName = "Name";
    this.columnEmail = "Email";
    this.columnPhone = "Phone";
    this.displayedColumns = [{
      key: "name",
      label: this.columnName
    }, {
      key: "email",
      label: this.columnEmail
    }, {
      key: "phone",
      label: this.columnPhone
    }, {
      key: "options",
      label: ""
    }];
    this.columnKeys = computed(() => {
      if (this.screenSize()?.isCompact) {
        return this.displayedColumns.filter(column => column.key !== "phone" && column.key !== "email").map(col => col.key);
      } else {
        return this.displayedColumns.map(col => col.key);
      }
    });
    this.dataSource = new MatTableDataSource();
    this.clients = [];
    this.subscriptions = new Subscription();
    this.shareClientsDataService = inject(ShareClientsDataService);
    this.clientInfo = this.shareClientsDataService.clientInfo;
    this.themeManager = inject(ThemeManagerService);
    this.themeSignal = this.themeManager.themeSignal;
    console.log(this.screenSize()?.isCompact);
    this.getClients();
  }
  ngOnInit() {
    this.pageTitle.set("Clients");
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createClient() {
    this.router.navigateByUrl("/clients/form");
  }
  getClients() {
    this.isFetchingData.set(true);
    const subscription = this.clientsService.getClientsBasic().subscribe(clientsList => {
      this.clients = clientsList;
      this.dataSource.data = this.clients;
      console.log(this.dataSource.data);
      this.isFetchingData.set(false);
    });
    this.subscriptions.add(subscription);
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openEditClientDialog(clientId, clientName) {
    this.clientInfo.set({
      clientId,
      clientName,
      programPosition: 0,
      programId: "",
      programName: "",
      dateRange: {
        start: "",
        end: ""
      }
    });
    this.router.navigateByUrl(`clients/form/${clientId}`);
  }
  openDeleteConfirmationDialog(itemId) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: "312px",
      data: {
        title: "Delete selected client?",
        message: "Deleting the selected client will remove it from your account."
      },
      panelClass: "custom-dialog"
    });
    const subscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("User confirmed deletion");
        this.deleteClient(itemId);
        dialogRef.close();
      } else {
        console.log("User canceled deletion");
        dialogRef.close();
      }
    });
    this.subscriptions.add(subscription);
  }
  deleteClient(clientId) {
    const subscription = this.clientsService.deleteClient(clientId).subscribe({
      next: () => {
        this.getClients();
        this._snackBar.open("Client deleted", "", {
          duration: 2e3,
          panelClass: ["custom-snackbar-style"]
        });
      },
      error: e => console.error(e),
      complete: () => console.info("Client deletion completed")
    });
    this.subscriptions.add(subscription);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ClientsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientsListComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */ɵɵdefineComponent({
      type: _ClientsListComponent,
      selectors: [["sanareapp-clients-list"]],
      viewQuery: function ClientsListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MatSort, 5);
          ɵɵviewQuery(MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sort = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginator = _t.first);
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: MatPaginatorIntl,
        useClass: PaginatorI18nService
      }])],
      decls: 18,
      vars: 10,
      consts: () => {
        let i18n_0;
        if (false) {
          const MSG_EXTERNAL_ClientsList_inputPlaceholder$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_0 = goog.getMsg("E.g. John Maurice");
          i18n_0 = MSG_EXTERNAL_ClientsList_inputPlaceholder$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_0;
        } else {
          i18n_0 = "E.g. John Maurice";
        }
        let i18n_1;
        if (false) {
          const MSG_EXTERNAL_ClientsList_selectPageOfClientsAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_1 = goog.getMsg("Select page of clients");
          i18n_1 = MSG_EXTERNAL_ClientsList_selectPageOfClientsAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_1;
        } else {
          i18n_1 = "Select page of clients";
        }
        let i18n_2;
        if (false) {
          const MSG_EXTERNAL_ClientsList_inputFilterLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_2 = goog.getMsg("Filter");
          i18n_2 = MSG_EXTERNAL_ClientsList_inputFilterLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_2;
        } else {
          i18n_2 = "Filter";
        }
        let i18n_3;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableEditButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_3 = goog.getMsg("Edit");
          i18n_3 = MSG_EXTERNAL_ClientsList_tableEditButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_3;
        } else {
          i18n_3 = "Edit";
        }
        let i18n_4;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableEditButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_4 = goog.getMsg("Edit icon button");
          i18n_4 = MSG_EXTERNAL_ClientsList_tableEditButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_4;
        } else {
          i18n_4 = "Edit icon button";
        }
        let i18n_5;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableDeleteButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_5 = goog.getMsg("Delete");
          i18n_5 = MSG_EXTERNAL_ClientsList_tableDeleteButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_5;
        } else {
          i18n_5 = "Delete";
        }
        let i18n_6;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableDeleteButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_6 = goog.getMsg("Delete icon button");
          i18n_6 = MSG_EXTERNAL_ClientsList_tableDeleteButtonAriaLabel$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_6;
        } else {
          i18n_6 = "Delete icon button";
        }
        let i18n_7;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableEditButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_7 = goog.getMsg("Edit");
          i18n_7 = MSG_EXTERNAL_ClientsList_tableEditButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_7;
        } else {
          i18n_7 = "Edit";
        }
        let i18n_8;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableDeleteButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_8 = goog.getMsg("Delete");
          i18n_8 = MSG_EXTERNAL_ClientsList_tableDeleteButtonTooltip$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_8;
        } else {
          i18n_8 = "Delete";
        }
        let i18n_9;
        if (false) {
          const MSG_EXTERNAL_ClientsList_tableNoMatchingData$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_9 = goog.getMsg(' No data matching the filter "{$interpolation}" ', {
            "interpolation": "\uFFFD0\uFFFD"
          }, {
            original_code: {
              "interpolation": "{{ input.value }}"
            }
          });
          i18n_9 = MSG_EXTERNAL_ClientsList_tableNoMatchingData$$APPS_SANARE_APP_SRC_APP_PAGES_CLIENTS_CLIENTS_LIST_CLIENTS_LIST_COMPONENT_TS_9;
        } else {
          i18n_9 = " No data matching the filter \"" + "\uFFFD0\uFFFD" + "\" ";
        }
        return [["input", ""], ["menu", "matMenu"], i18n_2, i18n_7, i18n_8, i18n_9, [3, "newEvent", "pageTitle", "pageType", "newButton"], [1, "table-wrapper"], ["appearance", "fill", 1, "rounded-filter-input"], ["matInput", "", "placeholder", i18n_0, 3, "keyup"], [1, "clients-table-container"], ["overlay-scrollbars", "", 1, "clients-list-table", "table-scroll-container", 3, "options", "defer"], [1, "fetchingDataSpinner"], ["matSort", "", 1, "mat-table-background", 3, "dataSource"], [4, "matHeaderRowDef"], ["class", "table-rows", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["pageSize", "10", "aria-label", i18n_1, 1, "mat-paginator-background", 3, "pageSizeOptions"], ["diameter", "50"], [3, "matColumnDef"], ["matColumnDef", "options"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [1, "dynamic-cell"], ["mat-sort-header", ""], ["class", "dynamic-cell", 4, "matCellDef"], [1, "mat-body-large"], [1, "mat-body-medium-secondary"], [4, "matCellDef"], [4, "matHeaderCellDef"], ["class", "client-options", 4, "matCellDef"], [1, "client-options"], ["mat-icon-button", "", "matTooltip", i18n_3, "aria-label", i18n_4, 3, "click"], ["mat-icon-button", "", "matTooltip", i18n_5, "aria-label", i18n_6, 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 2, "min-width", "200px", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "table-rows"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]];
      },
      template: function ClientsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵdeclareLet(0);
          ɵɵelementStart(1, "ui-page-toolbar", 6);
          ɵɵlistener("newEvent", function ClientsListComponent_Template_ui_page_toolbar_newEvent_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.createClient());
          });
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 7)(3, "mat-form-field", 8)(4, "mat-label");
          ɵɵi18n(5, 2);
          ɵɵelementEnd();
          ɵɵelementStart(6, "input", 9, 0);
          ɵɵlistener("keyup", function ClientsListComponent_Template_input_keyup_6_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.applyFilter($event));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(8, "div", 10)(9, "div", 11);
          ɵɵtemplate(10, ClientsListComponent_Conditional_10_Template, 2, 0, "div", 12);
          ɵɵelementStart(11, "mat-table", 13);
          ɵɵrepeaterCreate(12, ClientsListComponent_For_13_Template, 2, 1, null, null, _forTrack0);
          ɵɵtemplate(14, ClientsListComponent_mat_header_row_14_Template, 1, 0, "mat-header-row", 14)(15, ClientsListComponent_mat_row_15_Template, 1, 0, "mat-row", 15)(16, ClientsListComponent_mat_row_16_Template, 3, 1, "mat-row", 16);
          ɵɵelementEnd()();
          ɵɵtemplate(17, ClientsListComponent_Conditional_17_Template, 1, 2, "mat-paginator", 17);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const deviceScreenSize_r12 = ɵɵstoreLet(ctx.screenSize());
          ɵɵadvance();
          ɵɵproperty("pageTitle", ctx.pageTitle())("pageType", ctx.pageType)("newButton", true);
          ɵɵadvance(8);
          ɵɵproperty("options", ctx.themeSignal());
          ɵɵadvance();
          ɵɵconditional(ctx.isFetchingData() ? 10 : -1);
          ɵɵadvance();
          ɵɵproperty("dataSource", ctx.dataSource);
          ɵɵadvance();
          ɵɵrepeater(ctx.displayedColumns);
          ɵɵadvance(2);
          ɵɵproperty("matHeaderRowDef", ctx.columnKeys());
          ɵɵadvance();
          ɵɵproperty("matRowDefColumns", ctx.columnKeys());
          ɵɵadvance(2);
          ɵɵconditional(!(deviceScreenSize_r12 == null ? null : deviceScreenSize_r12.isCompact) ? 17 : -1);
        }
      },
      dependencies: [PageToolbarComponent, MatFormField, MatLabel, MatInput, OverlayscrollbarsModule, OverlayScrollbarsComponent, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatSortModule, MatSort, MatSortHeader, MatIconModule, MatIcon, MatTooltip, MatButtonModule, MatIconButton, MatPaginatorModule, MatPaginator, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinnerModule, MatProgressSpinner],
      styles: ['.fetchingDataSpinner[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;left:4px;right:4px;top:4px;width:calc(100% - 20px);height:100%;border-top-left-radius:16px;border-top-right-radius:16px}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 234px);overflow-y:hidden}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .client-options[_ngcontent-%COMP%]{justify-content:end}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]{height:calc(100vh - 290px);overflow-y:scroll}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .table-rows[_ngcontent-%COMP%]{height:48px}@media (max-width: 599px){.table-wrapper[_ngcontent-%COMP%]{padding:16px;height:100%}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]{margin-top:-8px;height:calc(100vh - 228px)}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]{height:calc(100vh - 228px);padding-bottom:84px}.table-wrapper[_ngcontent-%COMP%]   .clients-table-container[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .table-rows[_ngcontent-%COMP%]{height:auto}}.dynamic-cell[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:8px}.programs-table-skeleton[_ngcontent-%COMP%]{width:100%;height:440px;overflow:hidden}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:14px;height:48px;border-bottom-width:1px;border-bottom-style:solid}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-radius:16px;min-width:193px;height:30px;overflow:hidden;position:relative;width:100%}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{position:absolute;inset:0;transform:translate(-100%);animation:_ngcontent-%COMP%_shimmer 1s infinite;content:""}@keyframes _ngcontent-%COMP%_shimmer{to{transform:translate(100%)}}.programs-table-skeleton[_ngcontent-%COMP%]   .row-skeleton[_ngcontent-%COMP%]:last-of-type{border-bottom:0}\n/*# sourceMappingURL=clients-list.component-WWMA26FO.css.map */']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ClientsListComponent, {
    className: "ClientsListComponent",
    filePath: "apps/sanare-app/src/app/pages/clients/clients-list/clients-list.component.ts",
    lineNumber: 69
  });
})();
export { ClientsListComponent };
/**i18n:ab11a1dcb816b11965daf92ebc4252f70aaa11f3a07066be31c4bdd61d35557d*/
<<<<<<<< HEAD:browser/en-US/chunk-FNHCMCE2.js
//# sourceMappingURL=chunk-FNHCMCE2.js.map
========
//# sourceMappingURL=chunk-ROZV4UOS.js.map
>>>>>>>> 7e7d94b (Deploy dist update):browser/en-US/chunk-ROZV4UOS.js
