import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DialogsService } from './dialogs.service';
import { DialogsContainerComponent } from './dialogs-container.component';

@NgModule({
	imports: [],
	providers: [
		DialogsService
	],
	declarations: [
		DialogsContainerComponent
	],
	exports: [
		DialogsContainerComponent
	]
})
export class DialogsModule {

	constructor( @Optional() @SkipSelf() parentModule: DialogsModule) {
		if (parentModule) {
			throw new Error('DialogsModule is already loaded. Import it in the AppModule only');
		}
	}
}
