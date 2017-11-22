import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FirstDialogComponent } from './first-dialog.component/first-dialog.component';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		FirstDialogComponent,
		LoginComponent
	],
	imports: [
		RouterModule.forChild([
			{ path: '', component: LoginComponent },
		])
	],
	entryComponents: [
		FirstDialogComponent
	],
})
export class LoginModule { }
