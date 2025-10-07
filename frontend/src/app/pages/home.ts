// src/app/pages/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1>FedEx Proof</h1>
      <p *ngIf="msg; else loading">API says: {{ msg }}</p>
      <ng-template #loading><em>Loading…</em></ng-template>
    </div>
  `
})
export class HomeComponent {
  msg: string | null = null;
  constructor(api: ApiService) {
    api.hello().subscribe(res => this.msg = res.message, _ => this.msg = 'API call failed');
  }
}
