import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule} from 'primeng/components/datatable/datatable';
import { AppComponent } from './app.component';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TreeTableComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    TreeTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
