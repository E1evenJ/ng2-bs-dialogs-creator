import { OnInit, EventEmitter, OnDestroy, ElementRef } from '@angular/core';

import { DialogArgs, CallbackOrPromise } from '../';

export abstract class BaseDialogComponent<TArgument, TResult> implements OnInit, OnDestroy {

	public id: string;
	public closeEvent = new EventEmitter<void>();
	public argument = <TArgument>{};

	private closedByCode = false;
	private dialogElement: JQuery;
	private callbackOrPromise: CallbackOrPromise;

	public constructor(protected elementRef: ElementRef) { }

	public ngOnInit(): void {
		this.onDialogInit();
		setTimeout(() => {
			this.dialogElement = jQuery(this.elementRef.nativeElement).find('#' + this.id);

			this.dialogElement.on('hidden.bs.modal', evt => {
				if (this.closedByCode) {
					return;
				}
				if (this.callbackOrPromise.reject) {
					this.callbackOrPromise.reject();
				}
			});

			this.dialogElement.on('shown.bs.modal', evt => {
				this.onDialogViewReady();
			});

			(<any>this.dialogElement).modal();
		});
	}

	public abstract onDialogInit(): void;

	public abstract onDialogViewReady(): void;

	public ngOnDestroy(): void {
	}

	public openDialog(args: DialogArgs): void {
		this.argument = args.arg;
		this.id = args.id;
		this.callbackOrPromise = args.callback;
	}

	public closeDialogWithResult(result: TResult) {
		this.closedByCode = true;

		(<any>this.dialogElement).modal('hide');

		if (this.callbackOrPromise.callback) {
			this.callbackOrPromise.callback(result);
		}
		if (this.callbackOrPromise.resolve) {
			this.callbackOrPromise.resolve(result);
		}

		// HACK: bootstrap modals take 3-400ms delay due to animations
		setTimeout(() => this.closeEvent.emit(), 500);
	}

	public closeDialog() {
		this.closeDialogWithResult(undefined);
	}
}
