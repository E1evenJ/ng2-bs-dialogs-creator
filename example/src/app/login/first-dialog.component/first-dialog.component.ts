import { Component, ElementRef } from '@angular/core';
import { BaseDialogComponent } from 'ng2-bs-dialogs-creator';

@Component({
	templateUrl: './first-dialog.component.html'
})
export class FirstDialogComponent extends BaseDialogComponent<string, string> {
	public constructor(elementRef: ElementRef) {
		super(elementRef);
	}

	public done() {
		this.closeDialogWithResult('I\'m the result of the first dialog');
	}
}
