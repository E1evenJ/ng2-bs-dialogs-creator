import { Component, ElementRef } from '@angular/core';

import { BaseDialogComponent } from '../../../modal';

@Component({
	templateUrl: './first-dialog.component.html'
})
export class FirstDialogComponent extends BaseDialogComponent<string, string> {

	public constructor(elementRef: ElementRef) {
		super(elementRef);
	}

	public onDialogInit(): void {

	}

	public onDialogViewReady(): void {

	}

	public done(): void {
		this.closeDialogWithResult('I\'m the result of the first dialog');
	}

}
