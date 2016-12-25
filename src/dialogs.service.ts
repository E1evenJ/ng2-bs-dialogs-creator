import { Injectable, EventEmitter, ComponentFactoryResolver } from '@angular/core';

import { DialogArgs } from '../';

@Injectable()
export class DialogsService {

	public openDialogEvt = new EventEmitter<DialogArgs>();

	public constructor() { }

	public show(
		id: string,
		type: any,
		args: any,
		componentFactoryResolver: ComponentFactoryResolver,
		cb: (res) => void,
		clearPreviousDialog = true): void {

		this.openDialogEvt.emit({
			arg: args,
			clearPreviousDialog: clearPreviousDialog,
			id: id,
			componentFactoryResolver: componentFactoryResolver,
			type: type,
			callback: {
				callback: cb,
				reject: undefined,
				resolve: undefined
			}
		});
	}

	public showAsync<TResult>(
		id: string,
		type: any,
		args: any,
		componentFactoryResolver: ComponentFactoryResolver,
		clearPreviousDialog = true): Promise<TResult> {

		return new Promise((resolve, reject) => {
			this.openDialogEvt.emit({
				arg: args,
				clearPreviousDialog: clearPreviousDialog,
				id: id,
				componentFactoryResolver: componentFactoryResolver,
				type: type,
				callback: {
					callback: undefined,
					reject: reject,
					resolve: resolve
				}
			});
		});
	}
}
