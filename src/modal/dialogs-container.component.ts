import { Component, ViewContainerRef, Type, ComponentRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DialogsService } from './dialogs.service';
import { DialogArgs } from './dialog-args';

@Component({
	selector: 'bdc-dialogs-container',
	template: '<div #dialogAnchor></div>',
})
export class DialogsContainerComponent implements OnInit, OnDestroy {

	private openDialogSub: Subscription;

	@ViewChild('dialogAnchor', { read: ViewContainerRef }) dialogAnchor: ViewContainerRef;

	public constructor(private dialogSvc: DialogsService) { }

	public ngOnInit(): void {
		this.dialogSvc.openDialogEvt.subscribe(arg => this.createDialog(arg));
	}

	public ngOnDestroy(): void {
		if (this.openDialogSub) {
			this.openDialogSub.unsubscribe();
		}
	}

	private createDialog<TDialog>(dialogArgs: DialogArgs): ComponentRef<Type<TDialog>> {
		if (dialogArgs.clearPreviousDialog) {
			this.dialogAnchor.clear();
		}

		const dialogComponentFactory = dialogArgs.componentFactoryResolver.resolveComponentFactory(dialogArgs.type);
		const dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);

		(<any>dialogComponentRef.instance).openDialog(dialogArgs);
		(<any>dialogComponentRef.instance).closeEvent.subscribe(() => dialogComponentRef.destroy());

		return dialogComponentRef;
	}
}
