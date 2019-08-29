import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent implements OnInit {
  @Input() isAvailable: boolean = false;
  @Input() availableMessage: string = 'Order';
  @Input() noAvailableMessage: string = 'Disabled';

  constructor() { }

  ngOnInit() {
  }

}
