import { Type, ComponentFactoryResolver } from '@angular/core';

export interface DialogArgs {
	id: string;
	arg: any;
	callback: CallbackOrPromise;
	type: Type<any>;
	componentFactoryResolver: ComponentFactoryResolver;
	clearPreviousDialog: boolean;
}

export interface CallbackOrPromise {
	callback: (res) => void;
	resolve: (res) => void;
	reject: () => void;
}
