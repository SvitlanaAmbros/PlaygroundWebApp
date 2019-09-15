import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent implements OnInit {
  @Input() isAvailable = true;
  @Input() availableMessage = 'Order';
  @Input() noAvailableMessage = 'Disabled';
  @Input() hasBorder = false;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    this.clicked.emit(null);
  }

}
