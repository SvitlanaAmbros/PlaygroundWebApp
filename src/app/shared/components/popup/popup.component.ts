import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public generatedId: string;

  @Input() public position?: string;
  @Input() public header = 'Confirm Action';
  @Input() public buttonAction = 'OK';
  @Input() public buttonCancel = 'Cancel';
  @Input() public isDisabled: boolean;
  @Input() public isActionPerformed = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onAction = new EventEmitter<void>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() public onClose = new EventEmitter<void>();

  public config = {
    position: 'center-center' || 'center-top'
  };

  constructor(/*private popupService: PopupService*/) { }

  ngOnInit() {
    this.initConfig();
    // this.generatedId =  this.popupService.generateId('form');
    // this.isDisabled = true;
  }

  private initConfig() {
    this.config = {
      position: this.position || 'center-center'
    };
  }

  public action() {
    this.onAction.emit();
  }

  public close() {
    this.onClose.emit();
  }
}
