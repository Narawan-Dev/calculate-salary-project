import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
})
export class CalculateComponent {
  items = [
    { label: 'ชั่วโมงการทำงาน', amount: 400, value: null, result: 0, action: 'A'},
    { label: 'สาย', value: null, amount: 0, result: 0, action: 'D'},
    { label: 'ทำงานล่วงเวลา 1', amount: 0, value: null, result: 0, action: 'A' },
    { label: 'ทำงานล่วงเวลา 1.5', amount: 75, value: null, result: 0, action: 'A' },
    { label: 'ทำงานล่วงเวลา 2', amount: 100, value: null, result: 0, action: 'A'},
    { label: 'ทำงานล่วงเวลา 3', amount: 150, value: null, result: 0, action: 'A' },
    { label: 'ค่ากะดึก', amount: 165, value: null, result: 0, action: 'A' },
    { label: 'ค่าอาหารกะดึก', amount: 65, value: null, result: 0, action: 'A' },
    { label: 'ค่าอาหารโอทีกะดึก', amount: 65, value: null, result: 0, action: 'A' },
    { label: 'ค่าเช่าบ้าน', amount: 100, value: null, result: 0, action: 'A' },
    { label: 'เงินพิเศษ', amount: 12.50, value: null, result: 0, action: 'A' },
    { label: 'หยุดประเพณี PH', amount: 400, value: null, result: 0, action: 'A' },
    { label: 'พักร้อน AL', amount: 400, value: null, result: 0, action: 'D' },
    { label: 'ลาป่วย SL', amount: 400, value: null, result: 0, action: 'D' },
    { label: 'กิจพิเศษ PL', amount: 400, value: null, result: 0, action: 'D' },
  ];

  total = 0;

  calculateRow(index: number): void {
    const item = this.items[index];
    item.result = (item.value ?? 0) * item.amount;
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((sum, item) => {
      if (item.action === 'A') {
        return sum + (item.result ?? 0); // บวกเมื่อ action เป็น 'A'
      } else if (item.action === 'D') {
        return sum - (item.result ?? 0); // ลบเมื่อ action เป็น 'D'
      }
      return sum; // ไม่เปลี่ยนค่า sum หาก action ไม่ใช่ 'A' หรือ 'D'
    }, 0);
  }

  resetForm(): void {
    this.items.forEach(item => {
      item.value = null; // รีเซ็ตค่า value เป็น null
      item.result = 0; // รีเซ็ตค่า result เป็น 0
    });
    this.total = 0; // รีเซ็ตค่า total เป็น 0
  }
}