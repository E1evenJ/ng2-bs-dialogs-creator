import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogsModule } from 'ng2-bs-dialogs-creator';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		DialogsModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
			{ path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
		])
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
