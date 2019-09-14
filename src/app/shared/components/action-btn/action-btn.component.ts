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

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public clicked(): void {
    this.onClick.emit(null);
  }

}
