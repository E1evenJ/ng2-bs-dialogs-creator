import { Component, ElementRef } from '@angular/core';
import { BaseDialogComponent } from 'ng2-bs-dialogs-creator';

@Component({
	templateUrl: './second-dialog.component.html'
})
export class SecondDialogComponent extends BaseDialogComponent<number, string> {

	public constructor(elementRef: ElementRef) {
		super(elementRef);
	}

	public onDialogInit(): void {

	}

	public onDialogViewReady(): void {

	}

	public done(): void {
		this.closeDialogWithResult('I\'m the result of the second dialog');
	}

}
