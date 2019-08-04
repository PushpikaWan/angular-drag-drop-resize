import { Component, OnInit } from '@angular/core';
import { DashboardControllingService } from 'projects/angular-drag-drop-rearrange/src/lib/services/dashboard-controlling.service';
import { Dashboard } from 'projects/angular-drag-drop-rearrange/src/lib/dashboard.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-dashboard-control',
  templateUrl: './dashboard-control.component.html',
  styleUrls: ['./dashboard-control.component.css']
})
export class DashboardControlComponent implements OnInit {

  cols: number = 3;
  cardMaxRows: number = 2;

  dashboards: Dashboard[];
  selectedTemplate: number = 0;

  constructor(private dashboardService: DashboardControllingService) { }

  ngOnInit() {
    this.initialiseTemplates();
  }

  private initialiseTemplates() {
    this.dashboards = [
      { counter: 3,
        dashboardItems: [
          {id:1, content:"c1", columns:2, rows:3 }, 
          {id:2, content:"c2", columns:1, rows:1 }, 
          {id:3, content:"c3", columns:2, rows:2 }
        ]
      },
      {counter: 0,
      dashboardItems: [
        {id:1, content:"c1", columns:2, rows:3 }
      ]
      }
    ];
  }

  ngOnDestroy(): void {
    this.dashboardService.dashboardComponentListChanged.unsubscribe();
  }

  addItem(cols: any, rows: any) {
    // this.dashboardService.addItem(cols.toInt32(cols,1),rows.toInt32(rows,1));
    this.dashboardService.addItem(+cols,+rows);
  }

  dashboardTemplateChangeListener(event: any) {
    this.selectedTemplate = event.target.value;
  }

  setTemplate() {
    console.log("selected template",this.dashboards[this.selectedTemplate]);
    this.dashboardService.loadDashBoradItemsByList(this.dashboards[this.selectedTemplate]);
  }

  resetPanel() {
    this.dashboardService.resetPanel();
  }

  counter(i: number) {
    return new Array(i);
  }

  orderChanged(e: any): void {
  }

  updateCols(val: any): void {
    this.cols = this.toInt(val, 3) || 3;
  }

  updateCardMaxRows(val: any): void {
    this.cardMaxRows = this.toInt(val, 2) || 2;
  }

  private toInt(val: any, fallbackValue: number = 0): number {
    const normalized = String(val).replace(/[\D]/g, '');
    const v = Number(normalized);
    return isNaN(v) ? fallbackValue : v;
  }

}
