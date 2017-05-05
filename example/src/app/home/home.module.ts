import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecondDialogComponent } from './second-dialog.component/second-dialog.component';
import { HomeComponent } from './home.component';

@NgModule({
	declarations: [
		SecondDialogComponent,
		HomeComponent
	],
	imports: [
		RouterModule.forChild([
			{ path: '', component: HomeComponent },
		])
	],
	entryComponents: [
		SecondDialogComponent
	],
})
export class HomeModule { }
