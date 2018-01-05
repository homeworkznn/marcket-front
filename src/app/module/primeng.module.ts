import {NgModule, OnInit} from '@angular/core';
import { PanelMenuModule, ButtonModule, InputTextModule, TooltipModule, DropdownModule, TreeTableModule , SharedModule,
  RadioButtonModule, CalendarModule, CheckboxModule, ConfirmDialogModule, PaginatorModule, ScheduleModule,
  ProgressBarModule, InputTextareaModule, FileUploadModule, OverlayPanelModule, RatingModule, EditorModule, ChartModule,
  MultiSelectModule, DialogModule, DataTableModule, GrowlModule, GalleriaModule , ToolbarModule } from 'primeng/primeng';
// import {EditorModule} from 'primeng/primeng';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    EditorModule,
    PanelMenuModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    DropdownModule,
    TreeTableModule,
    SharedModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    PaginatorModule,
    ScheduleModule,
    ProgressBarModule,
    InputTextareaModule,
    FileUploadModule,
    OverlayPanelModule,
    RatingModule,
    ChartModule,
    MultiSelectModule,
    DataTableModule,
    DialogModule,
    GrowlModule,
    ToolbarModule,
    FormsModule,
    GalleriaModule],
  declarations: [
  ],
  exports: [
    EditorModule,
    FormsModule,
    GalleriaModule,
    PanelMenuModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    DropdownModule,
    TreeTableModule,
    SharedModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    PaginatorModule,
    ScheduleModule,
    ProgressBarModule,
    InputTextareaModule,
    FileUploadModule,
    OverlayPanelModule,
    RatingModule,
    ChartModule,
    MultiSelectModule,
    DataTableModule,
    GrowlModule,
    DialogModule
  ]
})
export class PrimengModule {
}


