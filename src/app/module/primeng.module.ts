import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule, ButtonModule, InputTextModule, TooltipModule, DropdownModule, TreeTableModule , SharedModule,
  RadioButtonModule, CalendarModule, CheckboxModule, ConfirmDialogModule, PaginatorModule, ScheduleModule,
  ProgressBarModule, InputTextareaModule, FileUploadModule, OverlayPanelModule, RatingModule, EditorModule, ChartModule,
  MultiSelectModule, DialogModule, DataTableModule, GrowlModule } from 'primeng/primeng';
// import {EditorModule} from 'primeng/primeng';

@NgModule({
  imports:      [
    EditorModule,
    CommonModule,
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
    GrowlModule],
  declarations: [
  ],
  exports: [
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
    GrowlModule,
    DialogModule
  ]
})
export class PrimengModule { }
